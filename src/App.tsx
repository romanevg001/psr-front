import React, {Component} from 'react';
import Person from './components/Persons/Person/Person';
import Persons from './components/Persons/Persons';
import AddPerson from './components/Persons/AddPerson';
import {AppState} from './components/Persons/Person/Person.model';
import WithClass from './hoc/WithClass';
import WithClass2 from './hoc/WithClass2';
import AuthContext from './context/auth-context';
import { BrowserRouter as Router, Route, Switch,  } from 'react-router-dom';


class App extends Component {
  constructor(props: any) {
    super(props);
    console.log('[App.js] constructor');
  } 
  newName='';

  state:AppState = {
    persons: [
      {id: 9, name:"Zoomba", age: 26},
      {id: 2, name:"Natali", age: 24},
      {id: 8, name:"Rig", age: 36},
      {id: 19, name:"Mir", age: 29},
    ],
    isListShow: true,
    authenficated: false
    
  }

  static getDerivedStateFromProps(props: any, state: AppState) {
    console.log('[App.js] getDerivedStateFromProps');
    return state;
  }

  componentDidCatch() {
    console.log('[App.js] componentDidCatch');

  }

  componentDidMount() { // call http
    console.log('[App.js] componentDidMount');
  }

  componentWillUnmount() {
    console.log('[App.js] componentWillUnmount');
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
    this.setState((prevState:AppState, props) => ({
      persons: [
        ...prevState.persons,
        {name:newName, age: 29},
      ]
    }));
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

  login(){
    this.setState( {authenficated: true} )
  }

  render() {
    console.log('[App.js] render');

    return (
      <WithClass2 classes="bom">

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
          <AuthContext.Provider value={{
            authenficated: this.state.authenficated, 
            login: this.login.bind(this)
          }}><Persons 
            persons={this.state.persons}
            switchName={this.switchName}
            changeName={this.changeName}
            deleted={this.deletePerson}
          ></Persons></AuthContext.Provider>  : null
   
      } 
      </WithClass2>
    );
  }
}

export default WithClass(App, "App")