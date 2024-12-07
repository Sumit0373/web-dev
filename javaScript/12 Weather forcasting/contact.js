const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
     content.classList.toggle('active');
  });

});


// form 

const suggetionform = document.querySelector(".herocontent form");
(suggetionform.querySelector("button")).addEventListener("click", (event)=>{
    event.preventDefault();
console.log(suggetionform.querySelector("input").value);
suggetionform.querySelector("input").value="";
 setTimeout(()=>{
    alert("Your querry submit successfully thank for your responce");
},0.01);
});