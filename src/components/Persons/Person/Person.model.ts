

export interface PersonState {
  id: number;
  name: string;
  age: number;
  children?: any;
}

export interface PersonComponent extends PersonState {
  goPerson(): void;
  changed(id: any): void;
  delPerson(): void;
}


export interface PersonsState {
  persons: PersonState[];

}

export interface PersonsComponent extends PersonsState {
  switchName(name: string): void;
  changeName(): void;
  deleted(inx: number): void;
}