// 2. JavaScript file or not

function isJavaScriptFile(name) {
    if (typeof name === 'string') {
        const fileFullName = name;
        const result = fileFullName.endsWith(".js"); //use endWith function to count reverse way
        return result;
    }
    else {
        return "Please provide a valid input"
    }
}

// const fileName = 'untitled.js'
// const javaScriptFileChecker = isJavaScriptFile(fileName);
// console.log(javaScriptFileChecker);