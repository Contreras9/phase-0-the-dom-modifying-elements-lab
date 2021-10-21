// Write your code here!

document.body.removeChild(main);

const newHeader = document.createElement("h1");
newHeader.id = "victory";

newHeader.textContent = "Semsem is the champion";

document.body.append(newHeader);