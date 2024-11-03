/*                    Fetch API(Application Programming Interface)
  The fetch Api provides an interface for fetching (sending /receving) resources.
  
  It uses Request and Response  object.

  The fetch() method is used to fetch a resouce (data)
  let promise = fetch(url,[options]);
   you can also fetch api by fetch(url); if you not write any options than api call (Get request) this request to bring the data
   
   
   The data alway come form server in mainly to format 
 
   1: AJAX => is Asynchrounous JS and XML
            it is a old method 


    2: JSON => is JavaScript Object Notation

       json() method : return a second promise that resolve with the result of parsing the response body text as 
                        JASON . (Input is JSON , output is JS object).


          the output come from api in jason form we have to convert the jason to js object
               (Response(JSON))=>(JS Object).
          */

   let URL = "https://cat-fact.herokuapp.com/facts";
 
//    let promise = fetch(URL);
//    console.log(promise); 
let data;
 let fact= document.querySelector("#Fact");
 let btn = document.querySelector("#btn");

//    const getFact = async ()=>{
//     console.log("fetching data");
//    let response = await fetch(URL);
//    console.log(response); //JASON format
//     data= await response.json(); // it's also a asynchronous function than's why we use await
//    console.log(data); // it's give all the data 
//   console.log(data[0]); // it can give the value to data present at index 0;
//   console.log(data[0].text) // it can give the text from the data zero index;
  
//  // print data 
//  fact.innerText = (data[0].text);
//    }  // when you call getFact() function this will excute 




// when you click the button automatic data from api will we execute

btn.addEventListener("click",async ()=>{
    console.log("fetching data");
   let response = await fetch(URL);
   console.log(response); //JASON format
    data= await response.json(); // it's also a asynchronous function than's why we use await
   console.log(data); // it's give all the data 
  console.log(data[0]); // it can give the value to data present at index 0;
  console.log(data[0].text) // it can give the text from the data zero index;
  
// print data 
 fact.innerText = (data[0].text);
   });

  



// How to do with promise chain 

// function getFact(){
//     fetch(URL).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//             console.log(data);
//             fact.innerText= data[4].text;
//     })
// }

// btn.addEventListener("click",getFact);








/*    Request and Response 

             1:   HTTP

          Mainly request go to the server during api call by http it can use this type of option

          get , head ,post and so on go and read the info from mdn (http request); 
          
          
          
        2:  Response status CODE 
               
             HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

                       Informational responses (100 – 199)
                       Successful responses (200 – 299)
                       Redirection messages (300 – 399)
                       Client error responses (400 – 499)
                       Server error responses (500 – 599)

                       https://developer.mozilla.org/en-US/docs/Web/HTTP/Status



                       **HTTP response headers also contain details about the responses such as content type , HTTP status code etc.
                
          
          */