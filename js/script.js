
function show_menu(){
    let menu = document.querySelector("header nav");

    if(menu.style.display == ""){
        menu.style.display = "flex";
    }
    else{
        menu.style.display = "";
    }


}

setInterval(() => {
    console.log(document.readyState)
    if(document.readyState !== "complete"){
        document.body.style.visibility = "hidden";
        document.querySelector(".loader_wrapper").style.visibility = "visible";

    }
    else{
        
        document.body.style.visibility = "visible";
        document.querySelector(".loader_wrapper").style.visibility = "hidden";
    }
}, 2000);



