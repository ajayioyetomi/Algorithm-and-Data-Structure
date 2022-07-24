let str = "200 m";
let pattern = /m\b/;
const checkPattern = (str,pattern) =>{
    return str.search(pattern);
}

//console.log(checkPattern(str,pattern));
let mySet = new Set(['a','b','c']);
console.log(mySet)