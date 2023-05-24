const arr = [1, 2, 3]

for (let i of arr) {
    console.log(i)
}

function lol (kek) {
    let kekw = 0
    console.log(1)
}


console.log(1)



var funcs = [];
// let's create 3 functions
for (let i = 0; i < 3; i++) {
  // and store them in funcs
  funcs[i] = function() {
    // each should log its value.
    console.log("My value: " + i);
  };
}
for (let j = 0; j < 3; j++) {
  // and now let's run each one to see
  funcs[j]();
}