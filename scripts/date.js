const currentYearElement = document.querySelector("#currentyear");
const lastModifiedElement = document.querySelector("#lastModified");

currentYearElement.textContent = new Date().getFullYear();
lastModifiedElement.textContent = document.lastModified;
