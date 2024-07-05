import React from 'react'

import { HTMLAttributes } from 'react'

interface GridProps extends HTMLAttributes<HTMLElement> {

}

const Grid = (props: GridProps) => {
  const { children } = props;
  return (
    <section
      className='Grid'>

      {children}
    </section>
  )
}

export default Grid
