console.clear()

function copyInfo(mainObject) {
    let objCopy = {};
    let key;

    for (key in mainObject){
        objCopy[key] = mainObject[key];
    }
    return objCopy;
}

const mainObject = {
    a: 3,
    b: 6,
    c: {
        m: 4,
        n: 5,
    },
}

console.log(copyInfo(mainObject));