let addBtn = document.querySelector("#addBtn");
let clearBtn = document.querySelector("#clearBtn");
let textInput = document.querySelector("#textInput");
let list = document.querySelector("#itemsList");

addBtn.addEventListener("click", function(){

    list.style.animation = "";
    let task = textInput.value;

    textInput.value = "";

    if (task.trim() === "") return;

    let li = document.createElement("li");

    let xBu = document.createElement("button")

    li.innerText = task;
    
    li.classList.add("task-item");

    xBu.innerText = "X"

    xBu.classList.add("delete-btn");

    xBu.addEventListener("click", function(){
        
        li.style.animation = "slideOut 0.2s ease"
        
        li.addEventListener("animationend" , function(){
            xBu.parentElement.remove();
        })

    })
    
    li.appendChild(xBu);

    list.appendChild(li);

})

clearBtn.addEventListener("click",function(){
    
    list.style.animation = "slideOut 0.2s ease";
    
    list.addEventListener("animationend" , function(){
            list.innerHTML = "";
            list.style.animation = "";
        },{once: true})
    

    
})

