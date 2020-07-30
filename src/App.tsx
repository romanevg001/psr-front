import React, {Component} from 'react';
import Person from './components/Persons/Person/Person';
import Persons from './components/Persons/Persons';
import AddPerson from './components/Persons/AddPerson';
import { BrowserRouter as Router, Route, Switch,  } from 'react-router-dom';


export default class App extends Component {
  constructor(props: any) {
    super(props);
    console.log('[App.js] constructor');
  } 
  newName='';

  state = {
    persons: [
      {id: 9, name:"Zoomba", age: 26},
      {id: 2, name:"Natali", age: 24},
      {id: 8, name:"Rig", age: 36},
      {id: 19, name:"Mir", age: 29},
    ],
    isListShow: true
    
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');

  // }

  getSnapshotBeforeUpdate(prop: any, state: any) {
    console.log('[App.js] getSnapshotBeforeUpdate', prop, state);
    return state;
  }

  shouldComponentUpdate() {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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

  changeName = ( event?: any, id?:number,) =>{
    console.log(id, event.target.value)

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
    this.setState({persons: [...this.state.persons,{
      id: Math.random()*100, name:this.newName , age: 24
    }]})
  }

  deletePerson = (inx:number) => {
    let persons = [...this.state.persons];
    persons.splice(inx,1);
    this.setState( {persons: persons} )
  }

  toggleList(){
    this.setState({isListShow: !this.state.isListShow})
  }

  render() {
    console.log('[App.js] render');

    return (
      <div className="App">

        <Router>
          <Switch>
            <Route path="/person/:id" component={Person} />
            <Route path="/history" component={AddPerson} />
          </Switch>
        </Router>
        
    

        <AddPerson 
          addPerson={this.addPerson}
        ></AddPerson>
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

