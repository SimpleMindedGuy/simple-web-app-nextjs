import React from 'react'
import { HTMLAttributes } from 'react'

interface ListProps extends HTMLAttributes<HTMLElement> {


}

const List = (props: ListProps) => {
  const { children } = props;
  return (
    <section className="List">

      {children}
    </section>
  )
}
export default List;
