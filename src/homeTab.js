//run this to load the page
const runHomeTab = () => {

let contentContainer = document.querySelector(".content");

let testHeader = document.createElement("h1");
testHeader.innerText = "Restaurant Page TEST!";
contentContainer.appendChild(testHeader);

let testImg = document.createElement("img");
testImg.setAttribute("src","../src/pizza1.jpg");
contentContainer.appendChild(testImg);
}

export default runHomeTab;