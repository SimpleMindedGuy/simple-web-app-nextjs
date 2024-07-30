import React from 'react'
import { HTMLAttributes } from 'react'

import { I_UniversalProp } from '@/lip/interface'

/**
 * Properties for Collapse component
 * @type {interface} CollapseProps
 * - If value is null then just do nothing. 
 * @property {string} collapseClassName - Class name for the Collapse Element
 * @property {string} containerClassName - Class name for the Container Element inside the Collapse Element
 * @property {string} children - The folder where the kanban file will be created at.
 */
interface CollapseProps extends HTMLAttributes<HTMLElement>, I_UniversalProp {
  collapseClassName?: string;
  containerClassName?: string;
  children?: React.ReactNode;
}

/**
 *
 * Component that can contain anything.
 * give it class `Inactive`, to collapse and hide the content.
 * For it to be interactive It needs to be used inside A client component, that can add/remove The class `Inactive` form its class list
 * Mostly used with nested lists, useful if you want to use it as a UI for a file manage.
 *
 * @param {CollapseProps} props -  Component Properties 
 * @param {React.ReactNode} children - Children passed / rendered in the Container Element.
 */
const Collapse = (props: CollapseProps) => {
  const { collapseClassName, containerClassName, children } = props;



  return (
    <section
      className={"Collapse " + collapseClassName}>
      <div className={"Container " + containerClassName}>
        {children}
      </div>
    </section>
  )
}

export default Collapse
