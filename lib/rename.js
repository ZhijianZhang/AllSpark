'use strict'
const fs = require('fs');
const root = require('../../config').root;

module.exports = (newName) => {
    var projectParent = root.substring(0, root.substr(1).lastIndexOf('/') + 1);
    console.log("root: " + root)
    console.log(projectParent)
    fs.rename(root, projectParent + '/' + newName, function (err) {
        if (err) {
            throw err;
        }
        console.log('rename success!');
    })
}

// function rename(newName) {
//     var projectParent = root.substring(0, root.substr(1).lastIndexOf('/') + 1);
//     console.log("root: " + root)
//     console.log(projectParent)
//     fs.rename(root, projectParent + '/' + newName, function (err) {
//         if (err) {
//             throw err;
//         }
//         console.log('rename success!');
//     })
// }

// rename('fuzzy-search-poi-1')