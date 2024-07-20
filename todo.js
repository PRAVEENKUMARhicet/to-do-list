var input=document.getElementById("add-list");
var todo=document.getElementById("list");
var button=document.getElementById("add-button");

button.addEventListener('click',()=>{
    item(input.value)
    input.value=''
})

function item(values){
    let lists=document.createElement('p')
    let btn=document.createElement('button')
    if(values!="" || values!=null){
        btn.textContent="delete"
        let span=document.createElement('span')
        span.textContent=values
        lists.appendChild(span)
        lists.appendChild(btn)
        todo.appendChild(lists)
    }
    btn.addEventListener('click',()=>{
        todo.removeChild(lists)   
    })
}