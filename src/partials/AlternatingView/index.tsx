import React, { ReactNode } from 'react'
import { HTMLAttributes } from 'react'

import { F_CheckAlternatingElements } from '@/lip/utils';

/**
 * @interface
 * @extends {HTMLAttributes<HTMLElement>}
 *
 * - Interface for the  {@link AlternatingVie} Components
 *
 * @property {string} className - Class for the component.
 * @property {React.ReactNode} children - Children for Element for to properly drill properties into 
 */
interface AlternatingViewProps extends HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;

}


/**
 *
 * This compeonet should only be used once on the top level of the DOM Tree
 * - The only function of this Component is to Loop through every child, and drill properties of {@link isEven} appropriately.
 * - Nesting this object Can result in An unOptimized and/or Unpredictable behaviour.
 *
 * @prop {React.ReactNode} children, Elements/Components contained in the Component
 * @prop {string} className classes to apply to the component .
 * @return {ReactNode}
 */
const AlternatingView = ({ ...props }: AlternatingViewProps) => {
  let { children, className } = props;

  children = F_CheckAlternatingElements(children)

  return (
    <section
      className={className}
    >
      {children}
    </section>

  )
}
export default AlternatingView


