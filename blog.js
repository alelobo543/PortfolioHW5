
newPostDialog=document.getElementById("newPost");
cancelBtn=document.getElementById("cancel");
saveBtn= document.getElementById("save");
addBtn=document.getElementById("addBtn");
list= document.getElementById("blogs");
editDialog=document.getElementById("editPost");
saveEditbtn = document.getElementById("saveEdit");
cancelEditBtn=document.getElementById("cancelEdit");
titleEdit = document.getElementById("titleEdit");
dateEdit= document.getElementById("dateEdit");
summaryEdit= document.getElementById("summaryEdit");
deleteDialog=document.getElementById("deletePost");
yesBtn = document.getElementById("yes");
noBtn = document.getElementById("no");
addBtn.addEventListener("click",() => {
    newPostDialog.showModal();
    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("summary").value = "";
});
yesBtn.addEventListener("click", () => {
    let index = [...list.children].indexOf(deleteDialog.currentPost);
    deleteDialog.currentPost.remove();
    blogs.splice(index, 1);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    deleteDialog.close();
});
let blogs =localStorage.getItem("blogs");
if(blogs !== null){
    blogs = JSON.parse(blogs);
    for(const n of blogs){
        let element = document.createElement("li");
        let remove = document.createElement("button");
        let edit = document.createElement("button");
        list.appendChild(element);
        element.id=n[0];

        element.innerHTML=n[0]+" Date:"+n[1]+" summary:" + n[2];
        remove.innerHTML="Delete";
        remove.class="delete";
        edit.innerHTML="Edit";
        edit.class="edit";
        element.appendChild(edit);
        element.appendChild(remove);
        
        remove.addEventListener("click",() => {
            // Store the current blog post element in a variable
            const currentPost = element;
    
            // Pass the current blog post element to the delete confirmation dialog
            deleteDialog.showModal();
            deleteDialog.currentPost = currentPost;
        });

        edit.addEventListener("click", () => {
            editDialog.showModal();
            titleEdit.value = n[0];
            dateEdit.value = n[1];
            summaryEdit.value = n[2];
            const currentElement = element;
            editDialog.currentElement = currentElement;
            editDialog.edit = edit;
            editDialog.remove = remove;
          });

    }
}
else{
    blogs= []
}
saveEditbtn.addEventListener("click", () => {
    let index = [...list.children].indexOf(editDialog.currentElement);
    blogs[index] = [titleEdit.value, dateEdit.value, summaryEdit.value];
    localStorage.setItem("blogs", JSON.stringify(blogs));
    editDialog.currentElement.innerHTML =
      titleEdit.value + " Date:" + dateEdit.value + " summary:" + summaryEdit.value;
      editDialog.currentElement.appendChild(editDialog.edit);
      editDialog.currentElement.appendChild(editDialog.remove);
    editDialog.close();
  });

saveBtn.addEventListener("click",()=> {
    let title = document.getElementById("title").value;
    let date = document.getElementById("date").value;
    let summary = document.getElementById("summary").value;
    let element = document.createElement("li");
    let remove = document.createElement("button");
    let edit = document.createElement("button");
    list.appendChild(element);
    element.id=title;
    element.innerHTML=title+" Date:"+date+" summary:" + summary;
    remove.innerHTML="Delete";
    remove.class="delete";
    edit.innerHTML="Edit";
    edit.class="edit";
    element.appendChild(edit);
    element.appendChild(remove);
    
    blogs.push([title,date,summary]);
    localStorage.setItem("blogs",JSON.stringify(blogs));
    newPostDialog.close();


    remove.addEventListener("click",() => {
        // Store the current blog post element in a variable
        const currentPost = element;

        // Pass the current blog post element to the delete confirmation dialog
        deleteDialog.showModal();
        deleteDialog.currentPost = currentPost;
    });

    edit.addEventListener("click",() =>{
        editDialog.showModal();
        titleEdit.value = title;
        dateEdit.value= date;
        summaryEdit.value=summary;
        const currentElement = element;
        editDialog.currentElement = currentElement;
        editDialog.edit = edit;
        editDialog.remove = remove;
    })
}); 
cancelBtn.addEventListener("click",() => {
    newPostDialog.close();
});
cancelEditBtn.addEventListener("click",() => {
    editDialog.close();
})
noBtn.addEventListener("click",() => {
    deleteDialog.close();
})


