import React from 'react'
import { HTMLAttributes } from 'react'


interface DropDownProps extends HTMLAttributes<HTMLElement> {
  height?: number;
  width?: number;
}

const DropDown = (props: DropDownProps) => {
  const { children, height, width } = props;
  return (
    <section
      className="Card Odd"
      style={{ height: `${height ?? "100px"}`, width: `${width ?? "200px"}` }}>

      <div className="Container">
        {children}
      </div>
    </section>
  )
}

export default DropDown
