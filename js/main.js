const elements = {
  container: document.querySelector(".container"),
  left: document.querySelector(".container .left"),
  center: document.querySelector(".container .center"),
  right: document.querySelector(".container .right"),
};

function getData(name) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", `json/${name}.json`, true);
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
      let theResponse = JSON.parse(xhr.responseText);
      // Create the main div
      const mainDiv = document.createElement("div");

      // create the header
      const heading = document.createElement("h3");
      heading.appendChild(document.createTextNode(name));
      mainDiv.appendChild(heading);

      // create the funtion list ul
      const ul = document.createElement("ul");
      theResponse.forEach((element) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = element.link;
        a.target = "_blank";

        const code = document.createElement("code");
        code.appendChild(document.createTextNode(element.name));

        a.appendChild(code);
        li.appendChild(a);
        ul.appendChild(li);
      });
      mainDiv.appendChild(ul);

      // append the element to the container
      let leftHeight = elements.left.clientHeight;
      let rightHeight = elements.right.clientHeight;
      let centerHeight = elements.center.clientHeight;

      if (rightHeight <= leftHeight && rightHeight <= centerHeight)
        elements.right.appendChild(mainDiv);
      else if (leftHeight <= rightHeight && leftHeight <= centerHeight)
        elements.left.appendChild(mainDiv);
      else elements.center.appendChild(mainDiv);
      console.log();
    }
  };
}

getData("posts");
getData("author");
getData("comments");
getData("essentials");
getData("categories");
getData("sidebar");
