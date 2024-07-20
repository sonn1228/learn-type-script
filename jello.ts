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

// 3.4 Interface - Interface in Interface
interface Social {
  zalo?: String;
  facebook?: String;
}
interface User {
  fullName: String;
  age?: Number; // optional
  socials?: Social;
}

const userInteface: User = {
  fullName: "nguyen Van A",
  socials: {
    zalo: "String",
  },
};

// 5. Extend interface
interface A {
  fullName: String;
  cccd: String;
}
interface B extends A {
  age: Number;
  married?: Boolean;
}
const humnan: B = {
  age: 18,
  fullName: "String",
  cccd: "String",
};
