let number = 3;
let boolean = true;
let string = "Nguyen Van A";
let user = {
    fullName: "Nguyen Van A",
    age: 18,
};
console.log(user);
const userInteface = {
    fullName: "nguyen Van A",
    socials: {
        zalo: "string",
    },
};
const humnan = {
    age: 18,
    fullName: "string",
    cccd: "string",
};
const arr = [1, "2"];
console.log(arr);
let info;
info = ["string", 12, true];
console.log(info);
let C1 = {
    demo: "string",
};
const sum2 = (a, b) => {
    return a + b;
};
console.log(`9. Function: ` + sum2(1, 2));
const sum3 = (a = 0, b = 0) => {
    return a + b;
};
const sum4 = (...restPara) => {
    return restPara.reduce((sum, item) => sum + item, 0);
};
console.log(`11. Rest parameters: ` + sum4(1, 2, 3));
var Status;
(function (Status) {
    Status["INITIAL"] = "initial";
    Status["ACTIVE"] = "active";
    Status["INACTIVE"] = "inactive";
})(Status || (Status = {}));
const currentStatus = "initial";
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
let a = 10;
a = "string";
let b = 10;
b = "string";
const hello = (fullName) => {
    console.log(`Hello ${fullName}`);
};
function reverseArr(arr) {
    return arr.reverse();
}
console.log(reverseArr([1, 2, 3]));
console.log(reverseArr(["1", "2", "3"]));
const product = {
    rating: 10,
    status: "initial",
};
const userDE = {
    id: "string",
    age: 10,
    hotline: "string",
};
const f1 = {
    email: "string",
    phone: "string",
    id: "string",
    name: "string",
};
const ff1 = {
    email: "string",
};
