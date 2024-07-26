

import React from 'react'
import { HTMLAttributes } from 'react'

import { F_CheckAlternatingElements } from '@/lip/utils';

interface DropDownProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className: string;

}

const AlternatingView = ({ ...props }: DropDownProps) => {
  let { children, className } = props;

  children = F_CheckAlternatingElements(children)

  return (
    <section
      className={className}
    >
      <div className="Container">
        {children}
      </div>
    </section>

  )
}
export default AlternatingView


