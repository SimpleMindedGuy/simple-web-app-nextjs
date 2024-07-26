"use client"
import React from "react";

import { HTMLAttributes } from "react";
import Collapse from "../Collapse";

import { I_UniversalProp } from "@/lip/interface";

export interface CollapseProps extends HTMLAttributes<HTMLElement>, I_UniversalProp {
  Label: string;
  SectionClassName?: string,
  LabelClassName?: string,
  DropDownClassName?: string,

}

const CollapseListItem = ({ ...rest }: CollapseProps) => {

  const [isActive, setActive] = React.useState<boolean>(false)
  const { isEven, Label, LabelClassName, DropDownClassName, SectionClassName, children } = rest;


  function ToggleCollapseMenu(): void {

    setActive(previous_Value => !previous_Value)
  }

  return (
    <section className={`List-Item ${SectionClassName} ${isEven ? 'Even' : 'Odd'}`}>

      <label className={`Pointer ${LabelClassName}`}
        onClick={
          ToggleCollapseMenu
        }>
        {Label}
      </label>
      <Collapse dropClassName={`${DropDownClassName} ${isActive ? '' : 'Inactive'}`} containerClassName={""}>
        {children}
      </Collapse>
    </section>

  )
}


export default CollapseListItem; 
