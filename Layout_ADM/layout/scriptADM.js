    //Dropdown navbar
    let avatar = document.querySelector(".avatar"),
        notification = document.querySelector(".notification");

dropMenu(avatar);
dropMenu(notification);        

    function dropMenu(selector){
        selector.addEventListener("click", ()=>{
            let dropDownMenu = selector.querySelector(".dropdown-menu");
            dropDownMenu.classList.contains("active")?dropDownMenu.classList.remove("active"):dropDownMenu.classList.add("active");
        });
    }
//saibedar Toggle
    let sidebar = document.querySelector(".sidebar"),
    bars = document.querySelector(".bars");

    bars.addEventListener("click", () =>{
        sidebar.classList.contains("active") ? sidebar.classList.remove("active"):
        sidebar.classList.add("active")
    })
 
    window.matchMedia("(max-width : 768px)").matches? sidebar.classList.remove("active"): sidebar;classList.add("active");
    
