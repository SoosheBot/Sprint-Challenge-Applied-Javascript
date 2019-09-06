// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const newTab = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
  console.log(response);
  newTab.appendChild(newtabCreator(response.data));
  })
.catch(error => {
  console.log("The data was not returned", error);
})


function newtabCreator(data){
    const tab = document.createElement('div');
    
//set class names
tab.classList.add('tab');

//set data
tab.textContent = 'new topics';

return tab;

}

//display tabs stretch goal

// const displayAllTabs = document.querySelector('.topics');
// function displayAll(data){
//     const allTabs = document.createElement('div');

// allTabs.classList.add('allTabs');
// allTabs.textContent = data.topics

// return allTabs;
// }


