import faker from "faker";
import { IColumn } from "./types";

export const createData = () => {
  const times = 10000;
  const data = [];
  for (var i = 0; i < times; i++) {
    data.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      address: faker.address.streetAddress(),
      age: faker.random.number(15, 100)
    });
  }
  return data;
};

export const data = createData();

export const columns: IColumn[] = [
  {
    label: "First Name",
    type: "STRING",
    key: "firstName",
    width: 100
  },
  {
    label: "Last Name",
    type: "STRING",
    key: "lastName",
    width: 100
  },
  {
    label: "Age",
    type: "NUMBER",
    key: "age",
    width: 50
  },
  {
    label: "Address",
    type: "STRING",
    key: "address",
    width: 150
  },
  {
    label: "email",
    type: "STRING",
    key: "email",
    width: 140
  }
];
