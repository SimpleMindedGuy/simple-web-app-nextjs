import React, { ReactNode, isValidElement, cloneElement, HTMLAttributes } from "react";
import { I_UniversalProp } from "./interface";

/**
 * Takes A react node and loops over every element recusivly, to Drill {@link I_UniversalProp} into every element in the DOM.
 * - While passing {@link isEven} property it flibs the boolean value if the Current element has the property {@link alternate}.
 *
 * - Primary use is for alternating Background Colors.
 * @param {ReactNode} children - a ReactNode
 * @param {I_UniversalProp} props - properties that required to be drilled into Child components
 * @return {ReactNode} same children with properties drilled into them.
 */
export function F_ExplicitPropDrilling(children: ReactNode, props: I_UniversalProp): ReactNode {
  return React.Children.map(children, (child) => {

    /** Check if the child is valid;
    * Ensure child validiy
    */
    if (!isValidElement(child)) {
      return child;

    }
    // Get child universal props.
    const childProps = child.props as I_UniversalProp;

    // get Parent props
    let newProps = { ...props };

    // Flip isEven if alternate is present and true
    if (childProps.alternate) {
      newProps.isEven = !props.isEven;
    }

    // return a clone of the element with the new props
    // run the same function on its children, to drill the props appropriately.
    return cloneElement(child, { ...newProps, ...props }, F_ExplicitPropDrilling(child.props.children, newProps));
  });
}



/**
 * This function is only used in the {@link AlternatingView} component.
 * - It takes the children of the component, and appropriately drilles its properties into its children using the function {@link F_ExplicitPropDrilling}, it ensures that not every component with alternating colors starts exactly with the same alternating color, based on {@link isEven} value of that component.
 * @param {ReactNode} children - the children of Alternate Component.
 * @return {ReactNode} same children with properties drilled into them.
 */
export function F_CheckAlternatingElements(children: ReactNode): ReactNode {
  return React.Children.map(children, (child) => {
    /** Check if the child is valid;
    * Ensure child validiy
    */
    if (!isValidElement(child)) {

      return child;

    }


    // get child proprs
    const childProps = child.props as I_UniversalProp


    const newProps = { ...childProps, ...child.props }

    // Flip isEven if alternate is present and true
    if (childProps.alternate) {
      newProps.isEven = !childProps.isEven;
    }

    /**
     * return a clone of the child with its original props, and new props for its children
     * It takes the children of the component, and appropriately drilles its properties into its children using the function {@F_ExplicitPropDrilling}, it ensures that not every component with alternating colors starts exactly with the same alternating color, based on {@link isEven} value of that component.
     */
    return cloneElement(child, childProps, F_ExplicitPropDrilling(child.props.children, newProps));
  });
}

