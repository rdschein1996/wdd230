const d = new Date();
const year = d.getFullYear();
const fulldate = `${year}`;
document.querySelector("#dateyear").textContent = fulldate;

let lastmod = new Date(document.lastModified)
document.querySelector("#lastUpdated").textContent = lastmod;