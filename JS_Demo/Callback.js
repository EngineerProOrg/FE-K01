// Learn HTML
// Learn CSS
// Learn JS
// Learn React

const learnHTML = (cb) => {
    setTimeout(() => {
        console.log("I learned HTML");
    }, 1000);
    cb();
};

const learnCSS = (cb) => {
    setTimeout(() => {
        console.log("I learned CSS");
        cb();
    }, 1000);
};

const learnJS = (cb) => {
    setTimeout(() => {
        console.log("I learned JS");
        cb();
    }, 1000);
};

const learnReact = (cb) => {
    setTimeout(() => {
        console.log("I learned React");
        cb();
    }, 1000);
};

learnHTML(() => {
    learnCSS(() => {
        learnJS(() => {
            learnReact(() => {
                console.log("I learned everything");
            });
        });
    });
});
