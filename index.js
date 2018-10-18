function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
  
 let emp=document.querySelector('input[name="name"]').value;
  return emp;
}
function addNewElementAsLi(){
  let ul=document.querySelector('.employee-list');
  let info=retrieveEmployeeInformation();
  let list = document.createElement('li');
  list.innerHTML = info;
  ul.appendChild(list);
  
}
function addNewLiOnClick(){
   let c=document.querySelector('input[type="submit"]');
   c.addEventListener("click",function(){
     let ul=document.querySelector('.employee-list');
  let info=retrieveEmployeeInformation();
  let list = document.createElement('li');
  list.innerHTML = info;
  ul.appendChild(list);
 let emp=document.querySelector('input[name="name"]');
  emp.value="";
   })
  
}
function clearEmployeeListOnLinkClick(){
  let ul = document.querySelector('ul')
  let button = document.querySelector('a');
   
  button.addEventListener('click',function(){
   ul.innerHTML="";
   
  })
}