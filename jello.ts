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

// 9. Function
const sum2 = (a: number, b: number): number => {
  return a + b;
};
console.log(`9. Function: ` + sum2(1, 2));

// 10. Default parameters

const sum3 = (a: number = 0, b: number = 0): number => {
  return a + b;
};

// 11. Rest parameters

const sum4 = (...restPara: number[]) => {
  return restPara.reduce((sum, item) => sum + item, 0);
};
console.log(`11. Rest parameters: ` + sum4(1, 2, 3));
// 12. Enum
enum Status {
  INITIAL = "initial", // ko gán mặc định:  index = 0
  ACTIVE = "active",
  INACTIVE = "inactive",
}
const currentStatus: string = "initial";
switch (currentStatus) {
  case Status.INITIAL:
    console.log("Init");
    break;
  case Status.ACTIVE:
    console.log("Init");
    break;
  case Status.INACTIVE:
    console.log("Init");
    break;
  default:
    break;
}
// 13. Any type
let a: any = 10;
a = "string";
// 14. Unknown
let b: unknown = 10;
b = "string";

// 16. Void Type
const hello = (fullName): void => {
  console.log(`Hello ${fullName}`);
};

// 17. Generics: ~ overloading

function reverseArr<T>(arr: T[]): T[] {
  return arr.reverse();
}
console.log(reverseArr([1, 2, 3]));
console.log(reverseArr(["1", "2", "3"]));

// 18. Union Type: Kết hợp nhiều kiểu dữ liệu thành 1 kiểu dl mới
type statusType = "initial" | "active" | "inactive";
interface Product {
  rating: number | string;
  status: statusType;
}
const product: Product = {
  rating: 10,
  status: "initial",
};
// 19. Type alias
// 20. Intersection type
interface D {
  readonly id: string;
  age: number;
}
interface E {
  hotline: string;
  email?: string;
}

type DE = D & E;
const userDE: DE = {
  id: "string",
  age: 10,
  hotline: "string",
};
// 21. Declaration merging
interface F {
  id: string;
  name: string;
}
interface F {
  email: string;
  phone: string;
}
const f1: F = {
  email: "string",
  phone: "string",
  id: "string",
  name: "string",
};

// 22. Utility<Type>: Giống như tạo ra 1 interface mới
// 22.1 Partial<Type> :all attribute -> optional
interface FF {
  email: string;
  phone?: string;
  zalo: string;
}
const ff1: Partial<FF> = {
  email: "string",
};
// 22.2: Required: all attribute -> required
const ff2: Required<FF> = {
  email: "string",
  phone: "string",
  zalo: "string",
};
// 22.3 Omit<type, keys>: Loại bỏ Key
const ff3: Omit<FF, "zalo"> = {
  email: "string",
};
