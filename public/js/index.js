//import { sidebar, head, gebi } from "./js/components/sidebar.js";

let elemnts = { sidebar: sidebar(), head: head() };

gebi("sidebar").innerHTML = elemnts.sidebar;
gebi("headPg").innerHTML = elemnts.head;

let sidebarElms = document.querySelectorAll(".sidebar ul li a");
sidebarElms.forEach((el,ind) => {
  if (ind == 0){el.classList.add("active")}
  el.addEventListener("click", (ev) => {
    let lien = el.getAttribute("data-lien");
    sidebarElms.forEach((elm) => {
      elm.classList.remove("active");
    });
    el.classList.add("active");
    //gebi('contentPg').innerHTML = elemnts.head
  });
});

