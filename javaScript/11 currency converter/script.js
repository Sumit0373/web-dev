let baseUrl = "https://api.exchangeratesapi.io/v1/latest?access_key=b4fd619a213b5888127edf2d1694782c&%20symbols=";
let dropdowns = document.querySelectorAll(".dropdown select");
let btn = document.querySelector("form button");
for(let select of dropdowns ){
  //  console.log(select);
    for(let code in countryList){
      //  console.log(code);
        let newOption = document.createElement("option");
         newOption.innerText=code;
         newOption.value=code;
         if(select.name==="from" && code==="USD"){
            newOption.selected="selected";
         }
       else if(select.name==="To" && code === "INR"){
            newOption.selected="selected";
         }
         select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
      updateFlag(evt.target);
    });
}

const updateFlag = (event)=>{
  // console.log(event);
   let currencyCode = event.value;
   console.log(countryList[currencyCode]);
   let countryCode=countryList[currencyCode];
   
   let newSrc= `https://flagsapi.com/${countryCode}/flat/64.png`; //Update image
   let img =  event.parentElement.querySelector("img");
   img.src=newSrc;
}
btn.addEventListener("click",async (evt)=>{
   evt.preventDefault();
   let amount=document.querySelector(".amount input");
  let amtVal=amount.value;
  if(amtVal==="" && amtVal<1){
   amtVal=1;
   amount.value=1;
  }
  let select1 =  document.querySelector(".from select");
let select2 =  document.querySelector(".to select");
  let eurF=`${baseUrl}${select1.value}`;
  let res1 = await fetch(eurF);
  let   data1 = await res1.json();

  let eurT=`${baseUrl}${select2.value}`;
  let res2 = await fetch(eurT);
  let   data2 = await res2.json();

  
  
   let rateF = data1.rates[select1.value];
   let rateT = data2.rates[select2.value];
    let newRate = (rateT /rateF)*amtVal;
    let roundedRate = Math.round(newRate * 100) / 100;

  console.log(newRate);
  let msg = document.querySelector(".msg");
  msg.innerText = `${amtVal} ${select1.value} => ${roundedRate} ${select2.value}`;

  
}) ; 