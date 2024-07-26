import React, { ReactNode, isValidElement, cloneElement, HTMLAttributes } from "react";
import { I_UniversalProp } from "./interface";


export function F_ExplicitPropDrilling(children: ReactNode, props: I_UniversalProp): ReactNode {
  return React.Children.map(children, (child) => {
    if (isValidElement(child)) {

      const childProps = child.props as I_UniversalProp;

      let newProps = { ...props };

      // Flip isEven if alternate is present and true
      if (childProps.alternate) {
        newProps.isEven = !props.isEven;
      }
      console.log(`child component`, childProps)

      return cloneElement(child, { ...newProps, ...props }, F_ExplicitPropDrilling(child.props.children, newProps));
    }
    return child;
  });
}

export function F_CheckAlternatingElements(children: ReactNode): ReactNode {
  return React.Children.map(children, (child) => {
    if (isValidElement(child)) {


      const childProps = child.props as I_UniversalProp

      const newProps = { ...childProps, ...child.props }

      // Flip isEven if alternate is present and true
      if (childProps.alternate) {
        newProps.isEven = !childProps.isEven;
      }

      return cloneElement(child, childProps, F_ExplicitPropDrilling(child.props.children, newProps));
    }
    return child;
  });
}

