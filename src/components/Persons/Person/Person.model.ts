

export interface PersonState {
  id: number;
  name: string;
  age: number;
  children?: any;
}

export interface PersonComponent extends PersonState {
  goPerson(): void;
  changed(event: any): void;
  delPerson(): void;
}


export interface PersonsState {
  persons: PersonState[];

}

export interface PersonsComponent extends PersonsState {
  switchName(name: string): void;
  changeName(event: any, id: number): void;
  deleted(inx: number): void;
}


export interface AddPersonComponent {
  addPerson(event: any): void;
}

