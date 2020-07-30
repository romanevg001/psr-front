import React, {Component} from 'react';
import * as PersonModel from './Person.model';


export default class Person extends Component<PersonModel.PersonComponent>  {

  render() {
    return (
      <div >
       gg
       {this.props.id} 
      </div>
    )
  }

}
      

  

