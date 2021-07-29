//kyu 7
//presents
function presents(a){
  var n = a.length
  var ans = new Array(n)
  for(let i = 0;i<n;i++){
    ans[a[i]-1]=i+1
  }
  return ans
}
