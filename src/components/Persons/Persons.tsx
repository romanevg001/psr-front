import React, {PureComponent} from 'react';
import {PersonComponent} from './Person/Person';
import Aum from '../../hoc/Aum';
//import WithClass from '../../hoc/WithClass';
import {PersonsComponentModel, Person, PersonState} from './Person/Person.model';
import EditPerson from './EditPerson';
import { BrowserRouter as Router, Route, Switch, Link  } from 'react-router-dom';
import AuthContext from '../../context/auth-context';


// export default (this.props:PersonModel.PersonsComponent) => (

export default class Persons extends PureComponent<PersonsComponentModel> {
  state = {
    editablePerson: new Person()
  }

  perElRef: any;
  perElRef2: any;

  static contextType = AuthContext;

  constructor(props: any) {
    super(props);
    this.perElRef2 = React.createRef();
  //  this.perElRef2.current.focus();
    //this.perElRef2.style="color:red"
  }


  // shouldComponentUpdate(nextProps: any, nextState: any) {
  //   console.log('[Persons.js] shouldComponentUpdate', nextProps.persons !== this.props.persons);
  //   return nextProps.persons !== this.props.persons;
  // }
  

  editPerson(e:any) {
    console.log(e.target.value)
    console.log('authenficated:', this.context.authenficated)
    // this.setState({
    //   editablePerson: e?.target?.value ? e.target.value : ''
    //  });
   
  } 

  changeName(_person: Person){
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
        <h3>Am I authenficated: {this.context.authenficated ? 'yes' : 'no'} - /{this.context.authenficated}/</h3>

        <Router>
        <Link to='/'>Main</Link>
        <div ref={this.perElRef2}>
          <EditPerson editablePerson={this.state.editablePerson} editPerson={this.editPerson.bind(this)}></EditPerson>
         { this.props.persons.map((_person: PersonState,inx:number) => (
                  // <div key={_person.id} className={_person.age > 25 ? 'text-red': 'text-blue'}>
                    
                  // //     <Link to={'/person/'+_person.id}>{_person.name} - {_person.age} ({_person.children})</Link>
                    
                  // //   <span onClick={() => this.props.deleted(inx) }>delete</span>
                  //   <input type="text" onChange={event => this.props.changeName(event, _person.id)} value={_person.name} />
                  // </div>

                
                    <PersonComponent 
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
          <AuthContext.Consumer>
          {
            (context) => (
                <button onClick={context.login}>Login</button>
            )
          }
          </AuthContext.Consumer>

      
 
      </div>
      ******************************************************
          <Switch>
          <Route path="/" component={PersonComponent} />
          <Route path="/person/:id" component={PersonComponent} />
          </Switch>
        </Router>
      </Aum>
    )
    
  }
}

// export default withClass(Persons)