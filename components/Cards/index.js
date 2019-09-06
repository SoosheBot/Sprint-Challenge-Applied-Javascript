// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cards = document.querySelector('.cards-container');

function cardCreator(data){
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const imgLink = document.createElement('img');      
    const authorName = document.createElement('span');


// //class list
card.classList.add('card');
headline.classList.add('headline');
author.classList.add('author');
authorName.classList.add('authorName');
imgContainer.classList.add('img-container');
imgLink.classList.add('imgLink');


// //text content
headline.textContent = data.headline;  
author.textContent = data.name;
    //under author
imgContainertextContent = 'Author: '; 
imgLink.src =  data.authorPhoto;
authorName.textContent =`By: ${data.authorName}`;


// //appends
card.appendChild(headline);
card.appendChild(author);
    //under author
author.appendChild(imgContainer);
imgContainer.appendChild(imgLink);
author.appendChild(authorName);

return card;

}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
//   console.log(response);
// console.log(response.data);
// console.log(response.data.articles);

//need to write a for loop for each of these cards

//loop for bootstrap
bootstrapArray = response.data.articles.bootstrap;
for(i=0; i<bootstrapArray.length; i++){
    cards.appendChild(cardCreator(bootstrapArray[i]));
}
console.log(response.data.articles.bootstrap);

//loop for javascript
javascriptArray = response.data.articles.javascript;
for(i=0; i<javascriptArray.length; i++){
    cards.appendChild(cardCreator(javascriptArray[i]));
}
console.log(response.data.articles.javascript);

//loop for jquery
jqueryArray = response.data.articles.jquery;
for(i=0; i<jqueryArray.length; i++){
    cards.appendChild(cardCreator(jqueryArray[i]));
}
console.log(response.data.articles.jquery);

//loop for node
nodeArray = response.data.articles.node;
for(i=0; i<nodeArray.length; i++){
    cards.appendChild(cardCreator(nodeArray[i]));
}
console.log(response.data.articles.node);

//loop for technology
techArray = response.data.articles.technology;
for(i=0; i<techArray.length; i++){
    cards.appendChild(cardCreator(techArray[i]));
}
console.log(response.data.articles.technology);
  })
.catch(error => {
  console.log("The data was not returned", error);
})