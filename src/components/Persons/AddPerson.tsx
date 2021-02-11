import React, {Component, SyntheticEvent} from 'react';
import {AddPersonComponent} from './Person/Person.model';
import Wrapper from '../../hoc/Wrapper';

// export default (this.props:PersonModel.PersonsComponent) => (

export default class AddPerson extends Component<AddPersonComponent> {
  keyUp(e: any) {
    if(e.keyCode === 13) {
      this.props.addPerson(e);
    }
  }

  isGoing: any;

  
  handleSubmit (e: SyntheticEvent) {
 //   this.props.addPerson()
    console.log(e.target);
    // const message: Message = {
    //   id: Math.random().toString(),
    //   avatar: 'https://via.placeholder.com/150',
    //   name: '',
    //   body: newMessage,
    //   time: Math.floor(moment().unix() / 1000),
    // };
    // dispatch(sendMessage(message));
    e.preventDefault();
  };


  render() {
    return (
      <Wrapper>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="text" checked={this.isGoing} />
          <button type="submit" >Add person</button> 
        </form>
        <p>test of wrapper</p>
      </Wrapper>
    )
    
  }
}

