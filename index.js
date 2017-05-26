var commentExtract = require('multilang-extract-comments');
var commentPattern = require('comment-patterns');
var fs = require('fs');

var workdir = process.argv[2];

// file list
var urls = process.argv.slice(3)

// object output
var output = {};

for (var i = 0; i < urls.length; i++) {
  var filename = urls[i];
  var path = workdir + "/" + filename;
  if (!fs.existsSync(path))
	  continue;
  // we use sync so we can get them all toghether
  var data = fs.readFileSync(path, 'utf8');
  
  // this is stupid, it want the object in this format
  var pattern = { pattern: commentPattern(filename) };
  // extract comments to json
  var report = commentExtract(data, pattern);
  
  output[filename] = report;
}

console.log(JSON.stringify(output));

