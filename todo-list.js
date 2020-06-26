// create a close class node and append it to each li element
let nodeList = document.getElementsByTagName("li");
for(let i = 0; i < nodeList.length; i ++) {
    let span = document.createElement("span");
    span.className = "glyphicon glyphicon-trash close";
    span.style.color = "blue";
    span.style.padding = "20px 15px 12px 20px";
    nodeList[i].appendChild(span);
}

//To hide the task on clicking the close btn
let close = document.getElementsByClassName("close");
for(let i = 0; i < close.length; i ++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        if(confirm("Do you really want to delete the task?")){
        div.style.display = "none";
    }
    }
}

// Add checked class on clicking th list item
let check = document.querySelector("ul");
check.addEventListener('click', function(event){
    if(event.target.tagName = 'li'){
        event.target.classList.toggle("checked");
    }
}, false);

// create a new list item on clicking the add btn
function newElement() {
    let li = document.createElement("li");
    let input = document.getElementById("myInput").value;
    let t = document.createTextNode(input);
    li.appendChild(t);
    if(input === ""){
        alert("You must write anything");
    }
    else{
        document.getElementById("myTasks").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    let span = document.createElement("span");
    span.className = "glyphicon glyphicon-trash close";
    span.style.color = "blue";
    span.style.padding = "20px 15px 12px 20px";
    li.appendChild(span);
    for(let i = 0; i < close.length; i ++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            if(confirm("Do you really want to delete the task?")){
            div.style.display = "none";
        }
        }
    }
}