import React from 'react'

import { HTMLAttributes } from 'react'

/**
 * Interface for the grid component
 * @interface
 * @extends {HTMLAttributes<HTMLElement>}
 * 
 * @property {number} cellSize the size cells inside the grid.
 */
interface GridProps extends HTMLAttributes<HTMLElement> {

  cellSize?: number;
}

/**
 * returns a component that display children in grid fashion.
 *
 * @function
 * @property {GridProps} props
 * @returns {React.ReactNode}
 */
const Grid = (props: GridProps) => {
  const { className, children } = props;
  return (
    <section
      className={`Grid ${className}'}>
      {children}
    </section>
  )
}

export default Grid
