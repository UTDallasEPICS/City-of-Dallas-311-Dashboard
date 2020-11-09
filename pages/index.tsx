import FilterMenu from "../components/FilterMenu";
import { Map } from '../components/Map';
import React, { Component } from 'react';

class index extends Component {
  render() {
    return (
      <div>
        <FilterMenu />
        <Map />
      </div>
    )
  }
}

export default index;


