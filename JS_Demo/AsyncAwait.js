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

async function studyPath() {
    try {
        const htmlResult = await studyHTML();
        const cssResult = await studyCSS(htmlResult);
        const jsResult = await studyJS(cssResult);
        const reactResult = await studyReact(jsResult);
        console.log(reactResult);
    } catch (error) {
        console.log(error);
    }
}

studyPath();
