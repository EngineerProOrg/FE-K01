function fetchData() {
    const rawData = [
        { id: 0, title: "Callbacks", content: "Callbacks Hell" },
        { id: 1, title: "Promises", content: "Promises Chain" },
        { id: 2, title: "Async/Await", content: "Async/Await" },
    ];
    return Promise.resolve(rawData);
}

function processData(data) {
    return new Promise((resolve) => {
        const processedData = data.filter(post => post.id > 1);
        resolve(processedData);
    });
}

function saveData(data) {
    return new Promise((resolve) => {
        data.forEach(post => {
            console.log(`id: ${post.id}, title: ${post.title}, content: ${post.content}`);
        });
        resolve('Data saved successfully');
    });
}

fetchData()
    .then(processedData => processData(processedData))
    .then(filteredData => saveData(filteredData))
    .then(message => console.log(message))
    .catch(error => console.error('Error:', error));