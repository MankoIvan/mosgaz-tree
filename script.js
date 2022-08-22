import mockedData from './src/data/mockedDataBad.json' assert {type: "json"};

import fs from 'fs';


const moveOperations = (obj) => {
  if (obj.children.length) {
    obj.children.forEach(child => moveOperations(child));
  }
  const operations = obj.operations;
  delete obj.operations;
  obj.attributes.operations = operations;
  return obj;
}

moveOperations(mockedData)

fs.writeFile('src/data/mockedData.json', JSON.stringify(mockedData), function (err) {
  if (err) return console.log(err);
  console.log('New data > newData.json');
});