let input=document.querySelector("input");
let add=document.querySelector(".add");
let boxs=document.querySelectorAll(".box1");
let store=null;
add.addEventListener("click",()=>{
   if(input.value!=''){
     boxs[0].innerHTML+=`
     
      <p class="data" draggable="true">${input.value}</p>
     `;
     input.value='';
   }
   drag();

})
function drag(){
  let items=document.querySelectorAll(".data")
  items.forEach(item=>{
    item.addEventListener("dragstart",()=>{
      item.style.opacity='.5';
        store=item;
    })
    item.addEventListener("dragend",()=>{
      item.style.opacity='1';
      store=null;
    })
      
  })
  boxs.forEach(box=>{
    box.addEventListener("dragover",(e)=>{
      e.preventDefault();
     box.style.background='rgb(26, 161, 2)';   
    })
    box.addEventListener("dragleave",(e)=>{
      box.style.background='#fff';

     })
     box.addEventListener("drop",()=>{
       box.append(store);
       box.style.background='#fff'; 
     })

    
  })
}
