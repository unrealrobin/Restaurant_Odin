import { clearTab, tabContent } from './index.js';

//module 1
const background = () => {
  clearTab();
  let backgroundContent = document.createElement('div');
  backgroundContent.textContent = "Here would be the background Information";
  tabContent.appendChild(backgroundContent);
}

//module 2
const menuTab = () => {
  clearTab();
  let menuContent = document.createElement('div');
  menuContent.textContent = "Here is the menu!";
  tabContent.appendChild(menuContent);


}

//module 3
const contact = () => {
  clearTab();
  let contactContent = document.createElement('div');
  contactContent.textContent = "Robin Lifshitz";
  tabContent.appendChild(contactContent);


}


export { background, menuTab, contact };