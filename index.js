var commentExtract = require('multilang-extract-comments');
var commentPattern = require('comment-patterns');
var fs = require('fs');

// file list
var urls = process.argv.slice(2)

// object output
var output = {};

for (var i = 0; i < urls.length; i++) {
  var filename = urls[i];
  // we use sync so we can get them all toghether
  var data = fs.readFileSync(filename, 'utf8');
  
  // this is stupid, it want the object in this format
  var pattern = { pattern: commentPattern(filename) };
  // extract comments to json
  var report = commentExtract(data, pattern);
  
  output[filename] = report;
}

console.log(JSON.stringify(output));

