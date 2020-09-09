import React, {Component} from 'react';
import * as PersonModel from './Person.model';


export default class Person extends Component<PersonModel.PersonComponent>  {

  render() {
    return (
      <div >
       {this.props.id} - {this.props.name} - {this.props.age} __
        <sup onClick={this.props.changed}><i>change</i></sup> __ 
        <sup onClick={this.props.delPerson}><i>delete</i></sup>
      </div>
    )
  }

}
      

  

