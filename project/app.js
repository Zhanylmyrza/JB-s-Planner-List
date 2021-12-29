const item = document.querySelector(".item");

const placeholders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

for (const placeholder of placeholders) {
  // console.log(placeholder);
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", dragdrop);
}

function dragstart(event) {
  //console.log("drag start", event.target);
  //console.log("drag start", this); may have mistakes
  event.target.classList.add("hold");
  setTimeout(() => event.target.classList.add("hide"), 0);
}

function dragover(event) {
  event.preventDefault();
  //console.log("drag over");
}

function dragenter(event) {
  event.target.classList.add("hovered");
  //console.log("dragenter");
}

function dragleave(event) {
  event.target.classList.remove("hovered");
  //console.log("dragleave");
}

function dragdrop(event) {
  event.target.classList.remove("hovered");
  //console.log("dragdrop");
  event.target.append(item);
}

function dragend(event) {
  //console.log("drag end", event.target);
  //console.log("drag start", this); may have mistakes
  event.target.classList.remove("hold", "hide");
  // If want event.target.className = 'item'
  // event.target.classList.remove("hide");
}
