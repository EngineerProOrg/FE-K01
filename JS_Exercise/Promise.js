function fetchData() {
    const rawData = [
        { id: 0, title: "Callbacks", content: "Callbacks Hell" },
        { id: 1, title: "Promises", content: "Promises Chain" },
        { id: 2, title: "Async/Await", content: "Async/Await" },
    ];
    // TODO: return the raw data
}

function processData(data) {
    // TODO: Filter out and return posts with id greater than 1
}

function saveData(data) {
    /* 
    TODO: Loop through all the elements and print to the console.
    Finally resolve with message "Data saved successfully"
    */
}

// Execute the workflow
fetchData()
    .then((processedData) => processData(processedData))
    .then((filteredData) => saveData(filteredData))
    .then((message) => console.log(message))
    .catch((error) => console.error("Error:", error));
