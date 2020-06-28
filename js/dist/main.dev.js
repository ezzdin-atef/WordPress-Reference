"use strict";

var elements = {
  container: document.querySelector('.container')
};
var name;
var xhr = new XMLHttpRequest(); // Potst

name = 'posts'; // change this name

xhr.open('GET', "json/".concat(name, ".json"), true);
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.status === 200 && xhr.readyState === 4) {
    var theResponse = JSON.parse(xhr.responseText); // Create the main div

    var mainDiv = document.createElement('div'); // create the header

    var heading = document.createElement('h3');
    heading.appendChild(document.createTextNode(name));
    mainDiv.appendChild(heading); // create the funtion list ul

    var ul = document.createElement('ul');
    theResponse.forEach(function (element) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = element.link;
      a.target = '_blank';
      a.appendChild(document.createTextNode(element.name));
      li.appendChild(a);
      ul.appendChild(li);
    });
    mainDiv.appendChild(ul); // append the element to the container

    elements.container.appendChild(mainDiv);
  }
};
//# sourceMappingURL=main.dev.js.map
