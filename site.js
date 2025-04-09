/* Start JavScript code and Dynamic Elements */

let indexData = [];

fetch("searchIndex.json").then(response => response.json()).then(data => indexData = data);
/* I'm fethcing my json file which gives a response object. I turn it into a josn object that I have access to. I turn its data into the array. */

document.getElementById('searchBox').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const filtered = indexData.filter(item => item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query));

    const resultsList = document.getElementById('results');
    resultsList.innerHTML = filtered.map(item => `<li><a href="${item.url}">${item.title}</a> - ${item.description}</li>`).join('');
});

/* Need to create a json file for searchIndex and response */