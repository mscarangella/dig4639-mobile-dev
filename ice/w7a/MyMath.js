function Sum (a, b) {
  let result = undefined
  if(typeof a == "number" && typeof b == "number") {
    result = a + b
  }
  return result;
}

function AddList(a, b, c, d, e){
let result = undefined
if(typeof a == "number" &&  typeof b == "number" && typeof c == "number" && typeof d == "number" && typeof e == "number"){
  result = a + b + c + d + e
}
return result;
}

export { Sum };
export { AddList };