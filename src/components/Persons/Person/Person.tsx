import React, {Component} from 'react';
import {PersonComponentModel} from './Person.model';
import AuthContext from '../../../context/auth-context';



export default class PersonComponent extends Component<PersonComponentModel>  {

  static contextType = AuthContext;
  personEl: any;
  personElRef = React.createRef<HTMLInputElement>();


  componentDidMount() {
    console.log('PersonComponent componentDidMount',this.context.authenficated)
    this.personEl.focus();
    this.personElRef.current.setAttribute('style','border:2px red solid')
  }

  render() {
    return (
      <AuthContext.Consumer>
      {
        (context) => (
          <div className="person">({console.log(context.authenficated) })
            {context.authenficated ? <p>authenficated!</p> : <p>Please login</p>}

            {this.props.id} - {this.props.name} - {this.props.age} __
            <sup onClick={this.props.changed}><i>change</i></sup> __ 
            <sup onClick={this.props.delPerson}><i>delete</i></sup>
            <input type="text"  ref={el => this.personEl = el} />
            <input type="text"  ref={this.personElRef} />
          </div>
        )
      }
      </AuthContext.Consumer>
      
    )
  }

}
      

  

