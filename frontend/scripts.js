function selectGroup(item){
    item.classList.add("button-primary");
    item.parentNode.childNodes.forEach((brother)=>{
        if(brother!==item && brother.nodeName!=="#text"){
            brother.classList.remove("button-primary");
        }
    })
    sessionStorage.setItem('group',item.innerHTML);
}

function submitCheck(){
    if(sessionStorage.getItem('group')&&sessionStorage.getItem('countries').length>2){
        return true;
    }
    return false;
}

window.onload = (event)=>{
    var groups = Array.from(document.getElementById("selectGroup").children);
    groups.forEach(item=>{
        item.addEventListener('click',(e)=>{
            selectGroup(item);
        })
    })
    document.getElementById("submit").addEventListener('click',(e)=>{
        if(submitCheck){
            location.href="result.html";
        }
    })
}
