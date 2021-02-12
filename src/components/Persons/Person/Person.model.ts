

export interface PersonState {
  id: number;
  name: string;
  age: number;
  children?: any;
}

export interface PersonComponentModel extends PersonState {
  goPerson(): void;
  changed(event: any): void;
  delPerson(): void;
}


export interface PersonsState {
  persons: PersonState[];

}

export interface PersonsComponentModel extends PersonsState {
  switchName(name: string): void;
  changeName(event: any, id: number): void;
  deleted(inx: number): void;
}


export interface AddPersonComponentModel {
  addPerson(event: any): void;
}

export interface EditPersonComponentModel {
  editPerson(event: any): void;
  editablePerson: Person;
}


export class Person {
 id: number = 0;
 name: string = '';
 age: number = 0;
 
}

export interface AppState {
  persons: Person[];
  isListShow: boolean;
  authenficated: boolean;
}


