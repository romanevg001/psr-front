import React from 'react';
import Person from './Person/Person';
import * as PersonModel from './Person/Person.model';

export default (props:PersonModel.PersonsComponent) => (
  <div>{
    props.persons.map((_person: PersonModel.PersonState,inx:number) => (
        <Person 
          id={_person.id}
          name={_person.name}
          age={_person.age}
          key={_person.id} 
          goPerson={() =>props.switchName('Riggardo')}
          changed={props.changeName}
          delPerson={() => props.deleted(inx) }
        />
    ))
  }</div>)
  


