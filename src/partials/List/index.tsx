import React from 'react'
import { HTMLAttributes } from 'react'

import { I_UniversalProp } from '../../lip/interface'

/**
 * properties for the List Component
 * @property {React.ReactNode} children Elements inside the List Item.
 * @property {string} className Class names for the list item element.
 * @interface
 * @extends {HTMLAttributes<HTMLElement>} HTMLAttributes
 * @extends {I_UniversalProp} I_UniversalProp
 * 
 * 
 */
export interface ListProps extends HTMLAttributes<HTMLElement>, I_UniversalProp {
  children?: React.ReactNode
  className?: string,
}

/**
 * Used inside {@link List} Component.
 * 
 * @param {ListProps} props -Component properties
 * @returns {React.ReactNode} Component
 */
const List = (props: ListProps) => {
  const { className, children } = props;



  return (
    <section className={`List ${className}`}>
      {children}
    </section>
  )
}
export default List;
