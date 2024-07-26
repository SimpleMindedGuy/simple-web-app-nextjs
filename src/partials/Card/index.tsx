
import React, { ReactNode } from 'react'
import { HTMLAttributes } from 'react'

import { I_UniversalProp } from '@/lip/interfaces'

interface DropDownProps extends HTMLAttributes<HTMLElement>, I_UniversalProp {

  children: React.ReactNode;
}

const Card = ({ alternate = true, ...props }: DropDownProps) => {
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


