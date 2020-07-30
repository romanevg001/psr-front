import React, {Component} from 'react';
import Person from './Person/Person';
import Aum from '../../hoc/Aum';
//import WithClass from '../../hoc/WithClass';
import * as PersonModel from './Person/Person.model';
import { BrowserRouter as Router, Route, Switch, Link  } from 'react-router-dom';


// export default (this.props:PersonModel.PersonsComponent) => (

export default class Persons extends Component<PersonModel.PersonsComponent> {
  render() {
    return (
      <Aum test="persons">
        <Router>
        <Link to='/'>Main</Link>

        {
        
          this.props.persons.map((_person: PersonModel.PersonState,inx:number) => (
            <div key={_person.id} className={_person.age > 25 ? 'text-red': 'text-blue'}>
              
                <Link to={'/person/'+_person.id}>{_person.name} - {_person.age} ({_person.children})</Link>
              
              <span onClick={() => this.props.deleted(inx) }>delete</span>
              <input type="text" onChange={event => this.props.changeName(event, _person.id)} value={_person.name} />
            </div>
              // <Person 
              //   id={_person.id}
              //   name={_person.name}
              //   age={_person.age}
              //   key={_person.id} 
              //   goPerson={() =>this.props.switchName('Riggardo')}
              //   changed={event => this.props.changeName(event, _person.id)}
              //   delPerson={() => this.props.deleted(inx) }
              // />
          ))
      }
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