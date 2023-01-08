//Import tab modules
import runHomeTab from './homeTab';
import './style.css';

//Initialise page
const initialisePage = () => {
    const contentContainer = document.querySelector(".content");
    const headerBar = document.createElement("div");
    headerBar.setAttribute("class", "header-bar");
    headerBar.appendChild(createTabButton("Home"));
    headerBar.appendChild(createTabButton("Menu"));
    headerBar.appendChild(createTabButton("Contact"));
    contentContainer.appendChild(headerBar);
}

function createTabButton(name){
    const tab = document.createElement("div");
    tab.setAttribute("id", `${name}`)
    tab.setAttribute("class", "page-tab");
    tab.textContent = `${name}`;
    tab.addEventListener("click", () => changePage(name));
    return tab;
}

function changePage(name){
    console.log(`${name}`);
    switch(name) {
        case "Home":
            console.log("its working for home!");
            return;
        case "Menu":
            console.log("menu works as well");
            return;
        case "Contact":
            console.log("and contact works!!");
            return;
    }
}
//Call homeTab to display Home Tab by default
initialisePage();

