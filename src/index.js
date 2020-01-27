import { background, menuTab, contact } from './landing.js';

let clearTab = () => {
  while (tabContent.firstChild) {
    tabContent.removeChild(tabContent.firstChild);
  }
}

const tabContent = document.createElement('div');

let restaurant = () => {
  let contentContainer = document.getElementById('content');
  //creates tabs
  const tabBar = document.createElement('div');
  tabBar.setAttribute('id', 'tabBar');
  const backgroundTab = document.createElement('div');
  backgroundTab.textContent = "Background";
  backgroundTab.addEventListener('click', function () {
    background()
  });
  const menu = document.createElement('div');
  menu.textContent = "Menu";
  menu.addEventListener('click', function () {
    menuTab()
  });
  const contactTab = document.createElement('div');
  contactTab.textContent = "Contact";
  contactTab.addEventListener('click', function () {
    contact();
  });
  tabBar.appendChild(backgroundTab);
  tabBar.appendChild(menu);
  tabBar.appendChild(contactTab);
  //sets class and Id's
  let tabBarItems = Array.from(tabBar.childNodes);

  for (let i = 0; i < tabBarItems.length; i++) {
    tabBarItems[i].setAttribute('class', 'allTabs');
    tabBarItems[i].setAttribute('id', 'tab' + i);
  }
  //contentContainer attaches tabBar as child
  contentContainer.appendChild(tabBar);
  //attaches the tabs content to page
  tabContent.setAttribute('id', 'tabContent');
  contentContainer.appendChild(tabContent);
};


restaurant();

export { clearTab, tabContent };

//write tab switching logic
//clears content of maincontainer
//appends correct tabs functions