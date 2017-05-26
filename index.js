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
  var path = workdir + "repo/" + filename;
  if (!fs.existsSync(path))
	  continue;
  // we use sync so we can get them all toghether
  var data = fs.readFileSync(path, 'utf8');
  
  var pattern;
  var report;
  try {
	  // this is stupid, it want the object in this format
	  pattern = { pattern: commentPattern(filename) };
	  // extract comments to json
	  report = commentExtract(data, pattern);
  
	output[filename] = report;
  } catch (e) {
	  continue;
  }
}

console.log(JSON.stringify(output));

