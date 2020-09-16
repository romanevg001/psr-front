import React, {Component} from 'react';
import * as PersonModel from './Person.model';
import AuthContext from '../../../context/auth-context';



export default class Person extends Component<PersonModel.PersonComponent>  {

  render() {
    return (
      <AuthContext.Consumer>
      {
        (context) => (
          <div className="person">
            {context.authenficated ? <p>authenficated!</p> : <p>Please login</p>}

            {this.props.id} - {this.props.name} - {this.props.age} __
            <sup onClick={this.props.changed}><i>change</i></sup> __ 
            <sup onClick={this.props.delPerson}><i>delete</i></sup>
          </div>
        )
      }
      </AuthContext.Consumer>
      
    )
  }

}
      

  

