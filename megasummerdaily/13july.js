//triple trouble
//kyu 7
function tripledouble(num1, num2) {
  for(var i = 0;i<10;i++){
    if(triple(num1,i)&&double(num2,i)){
      return 1
    }
  }
  return 0
}

function triple(num,d){
    var map = num.toString().split('')
    for(let i = 0;i<map.length-2;i++){
      if(map[i]==d&&map[i+1]==d&&map[i+2]==d){
        return true
      }
    }
  return false
}

function double(num,d){
    var map = num.toString().split('')
    for(let i = 0;i<map.length-1;i++){
      if(map[i]==d&&map[i+1]==d){
        return true
      }
    }
  return false
}
