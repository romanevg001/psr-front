

export interface PersonState {
  id: number;
  name: string;
  age: number;
}

export interface PersonComponent extends PersonState {
  goPerson(): void;
  changed(): void;
}