/* Start JavScript code and Dynamic Elements */

document.addEventListener("DOMContentLoaded", function () {
    const isIndexPage = document.getElementById("searchBox");
    const isResultsPage = document.getElementById("results");
    console.log("15");

    if (isIndexPage){
        document.getElementById("searchButton").addEventListener("click", function () {
            event.preventDefault(); // prevent form from reloading page and stopping everything
            const query = document.getElementById("searchBox").value.toLowerCase().trim();
            console.log("20");
            if (query) {
                console.log("25");
                window.location.href = `search.html?q=${encodeURIComponent(query)}`;
            }
          });
    }

    if (isResultsPage){
        console.log("30");
        const params = new URLSearchParams(window.location.search);
        const query = params.get("q")?.toLowerCase() || "";

        if (!query){
            console.log("35");
            return;
        }

        const queryText = document.getElementById("queryText");
        if (queryText) queryText.textContent = query;
        // let indexData = [];
        fetch("searchIndex.json").then(response => response.json()).then(indexData => {
            const filtered = indexData.filter(item => item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query));
            console.log("10");
            const resultsList = document.getElementById('results');
            resultsList.innerHTML = filtered.map(item => `<li><a href="${item.url}">${item.title}</a> - ${item.description}</li>`).join('');
        }
        );
    }
    // let indexData = [];

    // fetch("searchIndex.json").then(response => response.json()).then(data => indexData = data);
    // /* I'm fetching my json file which gives a response object. I turn it into a json object that I have access to. I turn its data into the array. */

    // document.getElementById('searchBox').addEventListener('input', function () {
    //     const query = this.value.toLowerCase();
    //     const filtered = indexData.filter(item => item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query));

    //     console.log("10");
    //     const resultsList = document.getElementById('results');
    //     resultsList.innerHTML = filtered.map(item => `<li><a href="${item.url}">${item.title}</a> - ${item.description}</li>`).join('');
    // });
});