export class Employee {
  id: number;
  name: string;
  joinDate: Date;
  age: number;
  company: string;
  email: string;
  phone: string;
  salary: number;
  address?: Address;
}

export class Address {
  street: string;
  city: string;
  zipcode: string;
}

export enum SortOrder {
  ASC = 'ASCENDING',
  DESC = 'DESCENDING'
}

export enum AgeFilter {
  BELOW = 'BELOW',
  ABOVE = 'ABOVE',
  EQUAL = 'EQUAL'
}
