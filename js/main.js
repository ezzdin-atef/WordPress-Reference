const elements = {
  container: document.querySelector('.container'),
};
let name;

let xhr = new XMLHttpRequest();

// Potst
name = 'posts'; // change this name
xhr.open('GET', `json/${name}.json`, true);
xhr.send();
xhr.onreadystatechange = () => {
  if (xhr.status === 200 && xhr.readyState === 4) {
    let theResponse = JSON.parse(xhr.responseText);
    // Create the main div
    const mainDiv = document.createElement('div');

    // create the header
    const heading = document.createElement('h3');
    heading.appendChild(document.createTextNode(name));
    mainDiv.appendChild(heading);

    // create the funtion list ul
    const ul = document.createElement('ul');
    theResponse.forEach(element => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = element.link;
      a.target = '_blank';
      a.appendChild(document.createTextNode(element.name));
      li.appendChild(a);
      ul.appendChild(li);
    });
    mainDiv.appendChild(ul);


    // append the element to the container
    elements.container.appendChild(mainDiv);
  }
};