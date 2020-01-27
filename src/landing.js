//initial page load information here

const clearTab = () => {
  while (tabContent.firstChild) {
    tabContent.removeChild(tabContent.firstChild);
  }
}

//module 1
const background = () => {
  clearTab();
  let backgroundContent = document.createElement('div');
  backgroundContent.textContent = "Here would be the background Information";
}

//module 2
const menuTab = () => {
  clearTab();

  let menuContent = document.createElement('div');
  menuContent.textContent = "Here is the menu!";

}

//module 3
const contact = () => {
  clearTab();

  let contactContent = document.createElement('div');
  contactContent.textContent = "Robin Lifshitz";

}


export { background, menuTab, contact };