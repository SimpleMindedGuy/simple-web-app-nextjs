import React from "react";

import { HTMLAttributes } from "react";


interface ListItemProps extends HTMLAttributes<HTMLElement> {

}


const ListItem = (props: ListItemProps) => {

  return (
    <div className='List-Item Even'>

      Test list Item
    </div>
  )

}


export default ListItem;
