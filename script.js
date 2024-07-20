function item(){
    var items=document.getElementsByName("add-list");
    var list=document.getElementsByClassName("list");
   
    const values=items.value;
    if(values!="" || values!=null){
        var li=document.createElement('li');
        li.textContent=values;
        list.appendChild(values);
    }
}