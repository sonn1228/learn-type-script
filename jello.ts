// 1. ràng buộc kiểu dữ liệu
let number: Number = 3;
let boolean: Boolean = true;
let string: String = "Nguyen Van A";
// 2. object

let user: {
  fullName: String;
  age: Number;
} = {
  fullName: "Nguyen Van A",
  age: 18,
};
console.log(user);

// 3.Interface
interface User {
  fullName: String;
  age: Number;
}

const userInteface: User = {
  fullName: "nguyen Van A",
  age: 18,
};
