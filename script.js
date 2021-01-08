let solder = {
    name: "john",
    helth: 200,
    color: "green"
};

let fedya ={
    helth: 100
};

fedya.__proto__= solder;

console.log(fedya.color);