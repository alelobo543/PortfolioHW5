saveBtn= document.getElementById("save");
saveEditbtn = document.getElementById("saveEdit");
yesBtn = document.getElementById("yes");
list= document.getElementById("blogs");
for(const n of (list.children) ){
    n.children[0].innerHTML = '<img src="pencil.png" width="25" height= "25" />';
    n.children[1].innerHTML = '<img src="trash.png" width="25" height= "25" />';
}
saveBtn.addEventListener("click",()=> {
    for(const n of (list.children) ){
        n.children[0].innerHTML = '<img src="pencil.png" width="25" height= "25" />';
        n.children[1].innerHTML = '<img src="trash.png" width="25" height= "25" />';
    }
});