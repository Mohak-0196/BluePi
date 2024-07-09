import { faker } from "@faker-js/faker";

const range = (len) => {
  return Array.from({ length: len }, (_, i) => i);
};

const newPerson = () => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: Math.floor(Math.random() * 60) + 18,
    visits: Math.floor(Math.random() * 1000),
    status: "Single",
    progress: Math.floor(Math.random() * 100),
  };
};

export default function makeData(len = 50) {
  return range(len).map(() => newPerson());
}
