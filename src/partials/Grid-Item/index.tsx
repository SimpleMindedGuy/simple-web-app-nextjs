import { I_UniversalProp } from '@/lip/interfaces';
import React, { HTMLAttributes } from 'react'

interface GridItemProps extends HTMLAttributes<HTMLElement>, I_UniversalProp {

}

function GridItem(props: GridItemProps) {
  const { isEven } = props;
  return (
    <div className={`Grid-Item ${isEven ? 'Even' : 'Odd'}`}>
      <p>Icon</p>
    </div>
  )
}

export default GridItem
