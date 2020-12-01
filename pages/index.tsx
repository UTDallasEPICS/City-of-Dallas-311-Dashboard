/* import files */
import * as React from "react";
import { App } from "./vertical_bar";
//import { App } from "./horizontal_bar";
//import {App} from "./pie_chart";

/* vertical bar chart render*/
export default class vertical_bar extends React.Component<any, any> {
  render() {
    return (
      <App/>
    );
  }
}

/* horizontal bar chart render*/
/*export default class horizontal_bar extends React.Component<any, any> {
  render() {
    return (
      <App/>
    );
  }
}*/

/* pie chart render*/
/*export default class pie_chart extends React.Component<any, any> {
  render(){
    return (
      <App/>
    );
  }
}*/