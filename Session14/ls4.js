let original = {
    name: "Bob",
    age: "30",
};
let copy = JSON.parse(JSON.stringify(original));
copy.name = "Charlie";
console.log("Original:", original);
console.log("Copy:", copy);