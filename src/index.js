import { background, menuTab, contact } from './landing.js'

const tabContent = document.createElement('div');

let restaurant = () => {
  let contentContainer = document.getElementById('content');
  //creates tabs
  const tabBar = document.createElement('div');
  const backgroundTab = document.createElement('div');
  const menu = document.createElement('div');
  const contactTab = document.createElement('div');
  tabBar.appendChild(backgroundTab, menu, contactTab);
  //sets class and Id's
  let tabBarItems = Array.from(tabBar.childNodes);
  for (let i = 0; i < tabBar.clientHeight; i++) {
    tabBarItems[i].setAttribute('class', 'allTabs');
    tabBarItems[i].setAttribute('id', 'tab' + i);
  }
  //contentContainer attaches tabBar as child
  contentContainer.appendChild(tabBar);
  //attaches the tabs content to page
  contentContainer.appendChild(tabContent);


}




//write tab switching logic
//clears content of maincontainer
//appends correct tabs functions