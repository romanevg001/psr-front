import React, {Component} from 'react';
import Person from './Person/Person';
import Aum from '../../hoc/Aum';
//import WithClass from '../../hoc/WithClass';
import * as PersonModel from './Person/Person.model';
import EditPerson from './EditPerson';
import { BrowserRouter as Router, Route, Switch, Link  } from 'react-router-dom';


// export default (this.props:PersonModel.PersonsComponent) => (

export default class Persons extends Component<PersonModel.PersonsComponent> {
  state = {
    editablePerson: new PersonModel.Person()
  }

  perElRef: any;
  perElRef2: any;

  constructor(props: any) {
    super(props);
    this.perElRef2 = React.createRef();
  //  this.perElRef2.current.focus();
    //this.perElRef2.style="color:red"
  }
  

  editPerson(e:any) {
    console.log(e.target.value)
    // this.setState({
    //   editablePerson: e?.target?.value ? e.target.value : ''
    //  });
   
  } 

  changeName(_person: PersonModel.Person){
     this.setState({
      editablePerson: _person 
     })
     console.log('changeName =this.editablePerson = ', this.state.editablePerson)
  }
  componentDidMount(){
    this.perElRef2.current.focus();
    this.perElRef2.current.style.backgroundColor="pink"
  }

  render() {
    return (
      <Aum test="persons">
        <Router>
        <Link to='/'>Main</Link>
        <div ref={this.perElRef2}>
          <EditPerson editablePerson={this.state.editablePerson} editPerson={this.editPerson.bind(this)}></EditPerson>
         { this.props.persons.map((_person: PersonModel.PersonState,inx:number) => (
                  // <div key={_person.id} className={_person.age > 25 ? 'text-red': 'text-blue'}>
                    
                  // //     <Link to={'/person/'+_person.id}>{_person.name} - {_person.age} ({_person.children})</Link>
                    
                  // //   <span onClick={() => this.props.deleted(inx) }>delete</span>
                  //   <input type="text" onChange={event => this.props.changeName(event, _person.id)} value={_person.name} />
                  // </div>

                
                    <Person 
                      ref={(perEl)=>{this.perElRef = perEl}}
                      id={_person.id}
                      name={_person.name}
                      age={_person.age}
                      key={_person.id} 
                      goPerson={() =>this.props.switchName('Riggardo')}
                      changed={event => this.changeName(_person)}
                      delPerson={() => this.props.deleted(inx) }
                    />
                
                
              ))
          }
      
 
      </div>
      ******************************************************
          <Switch>
          <Route path="/" component={Person} />
          <Route path="/person/:id" component={Person} />
          </Switch>
        </Router>
      </Aum>
    )
    
  }
}

// export default withClass(Persons)