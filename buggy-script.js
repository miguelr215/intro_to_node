const fs = require("fs");
const path = require("path");

const source = process.argv[2];
const target = process.argv[3];

// read contents of source
const contentsOfSource = fs.readFileSync(source, "utf-8");
console.log("contentsOfSource is type " + typeof contentsOfSource);

// get lines in source into array, remove empty lines
const linesInSource = contentsOfSource.split("\n").filter(Boolean);
console.log("contentsOfSource.split is type " + typeof contentsOfSource.split());
console.log("contentsOfSource.split.filter is type " + typeof contentsOfSource.split("\n").filter(Boolean));
console.log("linesInSource is type " + typeof linesInSource);

// make the target directory if it doesn't exist
if(!fs.existsSync(target)){
    fs.mkdirSync(target);
}

// iterate over the lines
linesInSource.forEach((line) => {
    // get the contents of the line, first word is filename, rest is content
    const [filename, ...contentArr] = line.split(" ");
    console.log(filename);
    console.log(contentArr);
    console.log("filename is type " + typeof filename);
    console.log("contentArr is type " + typeof contentArr);

    // construct the full path for the file to create
    const newFilePath = path.join(__dirname, target, filename);
    console.log(newFilePath);
    console.log("newFilePath is type " + typeof newFilePath);

    // write the file and its contents
    fs.writeFileSync(newFilePath, contentArr.join(' '), {
        flag: "w+",
        encoding: "utf-8"
    });
    console.log("contentArr.join is type " + typeof contentArr.join());
});