import React, { HTMLAttributes } from 'react'

interface GridItemProps extends HTMLAttributes<HTMLElement> {

}

function GridItem({ }: GridItemProps) {
  return (
    <div className='Grid-Item Even'>
      <p>Icon</p>
    </div>
  )
}

export default GridItem
