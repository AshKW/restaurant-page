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
            displayHome();
            return;
        case "Menu":
            displayMenu();
            return;
        case "Contact":
            displayContact();
            return;
    }
}
//Call homeTab to display Home Tab by default
initialisePage();

function clearPage(){

}
function displayHome(){
    console.log("now displaying home");
}
function displayMenu(){
    console.log("now displaying menu");
}
function displayContact(){
    console.log("now displaying contact");
}