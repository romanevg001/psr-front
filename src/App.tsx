import React, {Component, SyntheticEvent} from 'react';
import Person from './Person/Person';
import * as PersonModel from './Person/Person.model';


export default class App extends Component {
  state ={
    persons: [
      {id: 9, name:"Zoomba", age: 26},
      {id: 2, name:"Natali", age: 24},
      {id: 8, name:"Rig", age: 36},
      {id: 19, name:"Mir", age: 29},
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

  changeName = (id?:number, event?: any) =>{
    if(id && event && event.target) {
      let ind = this.state.persons.findIndex(el=>el.id === id);
      let _personsState = [...this.state.persons];
      _personsState[ind].name = event.target.value;
      this.setState({
        persons: _personsState
      })
    }
  }

  render() {
    return (
      <div className="App">
      <button onClick={this.switchName.bind(this, 'newOne')}>Click</button> 
      {
        Array.isArray(this.state.persons) &&
            this.state.persons.map((_person: PersonModel.PersonState,inx) => (
              <Person 
                id={_person.id}
                name={_person.name}
                age={_person.age} key={inx} 
                goPerson={this.switchName.bind(this, 'Riggardo')}
                changed={this.changeName}
              ></Person>
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

