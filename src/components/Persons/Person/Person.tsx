import React from 'react';
import * as PersonModel from './Person.model';


export default (props:PersonModel.PersonComponent) => (
      <div className={props.age > 25 ? 'text-red': 'text-blue'}>
        <span onClick={props.goPerson}>{props.name} - {props.age} ({props.children})</span>
        <span onClick={props.delPerson}>delete</span>
        <input type="text" onChange={()=>props.changed(props.id)} value={props.name} />
      </div>
    );
  

