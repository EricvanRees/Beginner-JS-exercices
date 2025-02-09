/* 14. Write a JavaScript exercise to get the filename extension.  */ 

let name = "arcgis.exe"; 

function getFileExtension(filename) {
  if (typeof(filename) === 'string') {
    let filenameSplit = filename.split(".");
    let fileExt = filenameSplit[1];
    return fileExt;
  }
  else {
    return false;
  }
}

console.log(getFileExtension(name));
