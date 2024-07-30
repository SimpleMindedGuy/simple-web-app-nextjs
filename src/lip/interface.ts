/**
 * Universal Properties for every component within the Project, Used for Alternating back ground color based ont the value of {@link isEven}.
 *{@prop alternate} tells the function flip the value of {@link isEven}.
 * 
 * - Values of isEven are fliped during page generation on the server, this happens inside the {@link AlternatingView} component, using the {@link F_CheckAlternatingElements} function.
 * @type {interface}
 * @property {boolean|null} isEven - boolean value used set the background color
 * @property {boolean} alternate - boolean value used to signal when/where to flip the value of {@link isEven}
 * @interface 
 */
export interface I_UniversalProp {
  isEven?: boolean | null;
  alternate?: boolean;
}
