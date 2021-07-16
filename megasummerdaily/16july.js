// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
//
// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {
  var map = {}
  string = string.split('')
  string.forEach((ele,i)=>{
    if(map[ele]){
      map[ele]+=1
    }else{
      map[ele]=1
    }
  })
  return map
}
