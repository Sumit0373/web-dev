console.log("Hello Array");
let name= ["Sumit" , "Ashutosh" , "Divyansh", "Digvijay"];
console.log(name);
console.log(name.length);
console.log(name[0][3]); // i as output

// looping in array

for(let i=0 ; i<name.length ; i++){
    console.log(name[i]);
}

 let n="dig";
 n=n.replace('d','v');
 console.log(n);


 let mark = [98,78,34,68,80,86,99]
 let sum=0;
 for(let i of mark){
      sum+=i;
 }
 mark.push(100);
 console.log(`100 add in mark=>${mark[mark.length-1]}`);
 console.log(` The average marks of the class is = > ${sum/mark.length}`);

 let price=[250,645,300,900,50];
 for(let i=0 ; i<price.length ; i++){
    price[i]= price[i]-((10/100)*price[i]);
 }
 for(let i=0 ; i<price.length ; i++){
    console.log(price[i]);
 }