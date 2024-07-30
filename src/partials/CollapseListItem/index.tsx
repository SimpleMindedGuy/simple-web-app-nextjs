"use client"
import React from "react";

import { HTMLAttributes } from "react";
import Collapse from "../Collapse";

import { I_UniversalProp } from "@/lip/interface";

/**
 * @property {string} label - Text to display at the Label section.
 * @property {string} sectionClassName - Class name for the Section that contains both the label and collapse
 * @property  {string} labelClassName - Class name for the Label Element
 * @property {string} collapseClassName - Class name for the collapse component
 * @extends {HTMLAttributes<HTMLElement>}
 * @extends {I_UniversalProp}
 * @interface
 */
export interface CollapseListItemProps extends HTMLAttributes<HTMLElement>, I_UniversalProp {
  label: string;
  sectionClassName?: string,
  labelClassName?: string,
  collapseClassName?: string,

}

/**
 * Renders an Item contain A label, that toggles The collapse Section.
 * and Collapse Component
 *
 * @param {CollapseListItemProps} CollapseProps- Collapse List Item Properties
 * @returns {ReactNode}
 */
const CollapseListItem = ({ ...rest }: CollapseListItemProps) => {

  const [isActive, setActive] = React.useState<boolean>(false)
  const { isEven, label, labelClassName, collapseClassName, sectionClassName, children } = rest;


  function ToggleCollapseMenu(): void {

    setActive(previous_Value => !previous_Value)
  }

  return (
    <section className={`List-Item ${sectionClassName} ${isEven ? 'Even' : 'Odd'}`}>

      <label className={`Pointer ${labelClassName}`}
        onClick={
          ToggleCollapseMenu
        }>
        {label}
      </label>
      <Collapse collapseClassName={`${collapseClassName} ${isActive ? '' : 'Inactive'}`} containerClassName={""}>
        {children}
      </Collapse>
    </section>

  )
}


export default CollapseListItem; 
