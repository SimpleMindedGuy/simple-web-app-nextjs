import React from 'react'
import { HTMLAttributes } from 'react'

import { I_UniversalProp } from '../../lip/interface'

export interface ListProps extends HTMLAttributes<HTMLElement>, I_UniversalProp {
  children: React.ReactNode
}

const List = (props: ListProps) => {
  const { isEven, children } = props;



  return (
    <section className="List">
      {children}
    </section>
  )
}
export default List;
