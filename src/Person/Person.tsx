import React, { Component } from 'react';
import * as PersonModel from './Person.model';

export default class Person extends Component<PersonModel.PersonComponent, {}> {
  // constructor(props:PersonModel){
  //   super(props);
  //   console.log(props)
  // }

  render() {
    return (
      <div>
        <span onClick={this.props.goPerson}>{this.props.name} - {this.props.age} ({this.props.children})</span>
        <input type="text" onChange={this.props.changed.bind(this,this.props.id)} />
      </div>
    );
  }
}
