const studyHTML = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("I studied HTML");
        }, 1000);
    });
};

const studyCSS = (result) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(result);
            const success = Math.random() > 0.5;
            if (success) {
                resolve("I studied CSS");
            } else {
                reject("I did not study CSS");
            }
        }, 1000);
    });
};

const studyJS = (result) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(result);
            resolve("I studied JS");
        }, 1000);
    });
};

const studyReact = (result) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(result);
            resolve("I studied React");
        }, 1000);
    });
};

studyHTML()
    .then(studyCSS)
    .then(studyJS)
    .then(studyReact)
    .then((finalResult) => console.log(finalResult))
    .catch((error) => console.log(error));
