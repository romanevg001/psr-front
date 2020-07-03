import React, {Component} from 'react';
import Persons from './components/Persons/Persons';
import  CreateState from './CreateState';



export default class App extends Component {
  constructor(props: any) {
    super(props);
    console.log('[App.js] constructor');
  } 

  state = {
    persons: [
      {id: 9, name:"Zoomba", age: 26},
      {id: 2, name:"Natali", age: 24},
      {id: 8, name:"Rig", age: 36},
      {id: 19, name:"Mir", age: 29},
    ],
    isListShow: true
    
  };

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

  addPerson = (event: any) => {
    console.log(event)
  }

  deletePerson = (inx:number) => {
    console.log(this)
    let persons = [...this.state.persons];
    persons.splice(inx,1);
    this.setState( {persons: persons} )
    console.log(this.state.persons)

  }

  toggleList(){
    this.setState({isListShow: !this.state.isListShow})
  }

  render() {

    return (
      <div className="App">
       <input type="text"  />  <button onClick={this.addPerson}>Add person</button> 
       <button onClick={this.toggleList.bind(this)}>Toggle List</button> 
       {
        (this.state.isListShow) ? Array.isArray(this.state.persons) &&
          <Persons 
            persons={this.state.persons}
            switchName={this.switchName}
            changeName={this.changeName}
            deleted={this.deletePerson}
          ></Persons>   : null
      } 
      </div>
    );
  }
}

