import React from "react";

import { HTMLAttributes } from "react";

import { I_UniversalProp } from "@/lip/interfaces";

interface ListItemProps extends HTMLAttributes<HTMLElement>, I_UniversalProp {

}

const ListItem = ({ ...props }: ListItemProps) => {

  const { isEven, children } = props



  return (
    <div className={`List-Item ${isEven ? 'Even' : 'Odd'}`}>
      {children}
    </div>
  )

}


export default ListItem;
