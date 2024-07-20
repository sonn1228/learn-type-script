// 1. ràng buộc kiểu dữ liệu
let number: number = 3;
let boolean: boolean = true;
let string: string = "Nguyen Van A";
// 2. object

let user: {
  fullName: string;
  age: number;
} = {
  fullName: "Nguyen Van A",
  age: 18,
};
console.log(user);

// 3.4 Interface - Interface in Interface
interface Social {
  zalo?: string;
  facebook?: string;
}
interface User {
  fullName: string;
  age?: number; // optional
  socials?: Social;
}

const userInteface: User = {
  fullName: "nguyen Van A",
  socials: {
    zalo: "string",
  },
};

// 5. Extend interface
interface A {
  fullName: string;
  cccd: string;
}
interface B extends A {
  age: number;
  married?: boolean;
}
const humnan: B = {
  age: 18,
  fullName: "string",
  cccd: "string",
};
// 6. Array
const arr: (number | string | boolean | User)[] = [1, "2"];
console.log(arr);

// 7. Tuple
let info: [string, number, boolean];
info = ["string", 12, true];
console.log(info);

// 8. readonly
interface C {
  readonly demo: string;
}
let C1: C = {
  demo: "string",
};
