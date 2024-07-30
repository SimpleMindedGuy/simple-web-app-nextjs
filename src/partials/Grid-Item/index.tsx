import { I_UniversalProp } from '@/lip/interface';
import React, { HTMLAttributes } from 'react'

/**
 * interface for GridItem proerpties.
 *
 * @interface
 * @extends {HTMLAttributes<HTMLElement>}
 * @extends {I_UniversalProp}
 *
 *
 */
interface GridItemProps extends HTMLAttributes<HTMLElement>, I_UniversalProp {

}

/**
 * @function 
 * Container for items used inside {@link Grid} component.
 * it just puts the Element in A container, with the class name `Grid-Item`
 * @param props Component properties 
 * @returns {React.ReactNode} - Component
 */
function GridItem(props: GridItemProps) {
  const { isEven } = props;
  return (
    <div className={`Grid-Item ${isEven ? 'Even' : 'Odd'}`}>
      <p>Icon</p>
    </div>
  )
}

export default GridItem
