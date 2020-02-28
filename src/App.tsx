import React, {Component} from 'react';
import Person from './Person/Person';
import PersonModel from './Person/Person.model';


export default class App extends Component {
  state ={
    persons: [
      {name:"Zoomba", age: 26},
      {name:"Natali", age: 24},
      {name:"Rig", age: 36},
      {name:"Mir", age: 29},
    ]
  }

  switchName = (newName: string ="Max") =>{
    this.setState({
      persons: [
        ...this.state.persons,
        {name:newName, age: 29},
      ]
    })
    console.log(this.state.persons)
  }

  render() {
    return (
      <div className="App">
      <button onClick={this.switchName.bind(this, '')}>Click</button> 
      {
        Array.isArray(this.state.persons) &&
            this.state.persons.map((_person: PersonModel,inx) => (
              <Person name={_person.name} age={_person.age} key={inx} goPerson={this.switchName.bind(this, 'Riggardo')}></Person>
            ))
      }
{/* 
        <Person name="Zoomba" age="26" goPerson={this.switchName.bind(this, 'Zoombiba')}></Person>
        <Person name="Rig" age="24" goPerson={this.switchName.bind(this, 'Riggardo')}></Person>
        <Person name="Natali" age="24" ><i>Content</i></Person> */}
      </div>
    );
  }
}

