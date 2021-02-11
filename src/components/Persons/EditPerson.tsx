import React, {Component, Fragment} from 'react';
import {EditPersonComponent} from './Person/Person.model';

// export default (this.props:PersonModel.PersonsComponent) => (

export default class EditPerson extends Component<EditPersonComponent> {
 
  // componentDidMount() {
  //   console.log('componentDidMount: ', this.props)
  // }

  // shouldComponentUpdate(nextProps: PersonModel.EditPersonComponent) {
  //   console.log('shouldComponentUpdate: ', this.props, nextProps)
  //   return true
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate: ', this.props)

  // }

  // getSnapshotBeforeUpdate(prevProps:any, prevState:any) {
  //   console.log('getSnapshotBeforeUpdate: ',prevProps, this.props)
  // }


  render() {
    console.log('this.props: ', this.props)
    return (
      <Fragment>
      <form>
        <input type="text" name="text" onChange={this.props.editPerson} value={this.props.editablePerson.name}  />
        {/* <button type="submit" >Edit person</button>  */}
      </form>
      </Fragment>
    )
    
  }
}

