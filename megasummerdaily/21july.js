//kyu 7
//you got change
function giveChange(amount) {
  var bills = [0,0,0,0,0,0]
  while(amount>=100){
    bills[5]+=1
    amount-=100
  }
  while(amount>=50){
    bills[4]+=1
    amount-=50
  }
  while(amount>=20){
    bills[3]+=1
    amount-=20
  }
    while(amount>=10){
    bills[2]+=1
    amount-=10
  }
    while(amount>=5){
    bills[1]+=1
    amount-=5
  }
  while(amount>=1){
    bills[0]+=1
    amount-=1
  }
  return bills
}
