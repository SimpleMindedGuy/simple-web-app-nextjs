import React from 'react'
import { HTMLAttributes } from 'react'

import { I_UniversalProp } from '@/lip/interface'
interface DropDownProps extends HTMLAttributes<HTMLElement>, I_UniversalProp {
  height?: number;
  width?: number;
  dropClassName: string;
  containerClassName: string;
  children?: React.ReactNode;
}

const Collapse = (props: DropDownProps) => {
  const { dropClassName, containerClassName, children, height, width } = props;



  return (
    <section
      className={"Collapse " + dropClassName}>
      <div className={"Container " + containerClassName}>
        {children}
      </div>
    </section>
  )
}

export default Collapse
