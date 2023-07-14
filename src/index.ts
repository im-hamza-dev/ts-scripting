interface User {
  name: string;
}
const addId = <T>(obj: T) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};
let userA = {
  name: "Hamza",
};
userA = addId<User>(userA);

console.log(userA);
5255723053012510101;
37401 - 6108918 - 5;
interface Character<T> {
  name: string;
  age: number;
  powers: T; // to make this dynamic type we can use GENERICS <Type>
}
let characterA: Character<object> = {
  name: "Hamza",
  age: 24,
  powers: { lives: 2, canSwim: true },
};

let characterB: Character<string[]> = {
  name: "Paul",
  age: 20,
  powers: ["Multiple Livers", "Can Swim"],
};

let characterC: Character<number[]> = {
  name: "Paul",
  age: 20,
  powers: [4, 1],
};

console.log(characterA, characterB, characterC);
