
import React, { ReactNode } from 'react'
import { HTMLAttributes } from 'react'

import { I_UniversalProp } from '@/lip/interface'

/**
 * @interface
 * @extends {HTMLAttributes<HTMLElement>}
 * @extends {I_UniversalProp}
 */
interface CardProps extends HTMLAttributes<HTMLElement>, I_UniversalProp {

}

/**
 * @param {CardProps} props -universal component properties.
 * @returns {ReactNode}
 */
const Card = (props: CardProps) => {
  let { isEven, children } = props;


  return (
    <section
      className={`Card ${isEven ? "Even" : "Odd"}`}
    >
      <div className="Container">
        {children}
      </div>
    </section>

  )
}
export default Card


