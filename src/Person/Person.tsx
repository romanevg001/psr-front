import React, { Component } from 'react';
import PersonModel from './Person.model';

export default class Person extends Component<PersonModel, {}> {
  // constructor(props:PersonModel){
  //   super(props);
  //   console.log(props)
  // }

  render() {
    return (
    <div onClick={this.props.goPerson}>{this.props.name} - {this.props.age} ({this.props.children})</div>
    );
  }
}
