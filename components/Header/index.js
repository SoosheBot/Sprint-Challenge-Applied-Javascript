// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component


function Header() {
    const head = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    //set class names
    head.classList.add('date');
    head.classList.add('title');
    head.classList.add('temp');

    //set text content
    date.textContent = 'SMARCH 28, 2019';
    title.textContent = 'Lambda Times';
    temp.textContent = '98°';

    //set structure of elements
    head.appendChild(date);
    head.appendChild(title);
    head.appendChild(temp);

    return head;
}

const container = document.querySelector('.header-container');

    container.appendChild(Header());
