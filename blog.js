blogsList = document.getElementById("blogs");
newPostDialog=document.getElementById("newPost");
cancelBtn=document.getElementById("cancel");
saveBtn= document.getElementById("save");
addBtn=document.getElementById("addBtn");
list= document.getElementById("blogs")
addBtn.addEventListener("click",() => {
    newPostDialog.showModal();
});
let blogs =localStorage.getItem("blogs");
if(blogs !== null){
    blogs = JSON.parse(blogs);
       for(const n of blogs){

        let element = document.createElement("li");
        list.appendChild(element);
        element.id=n[0];
        element.innerHTML=n[0]+" Date:"+n[1]+" summary:" + n[2];
       }
}
saveBtn.addEventListener("click",()=> {
    let title = document.getElementById("title").value;
    let date = document.getElementById("date").value;
    let summary = document.getElementById("summary").value;
    let blogs =localStorage.getItem("blogs");
    if(blogs !== null){
        JSON.parse(blogs)       
    }
    let element = document.createElement("li");
    list.appendChild(element);
    element.id=title;
    element.innerHTML=title+" Date:"+date+" summary:" + summary;
    JSON.stringify([title,date,summary]);
    newPostDialog.close();
});    
