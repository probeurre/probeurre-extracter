# probeurre-extracter

**probeurre-extracter** extracts comments from git repositories.

## Requirements

- [nodejs](https://nodejs.org)

## Installing

In the root directory of the project, run

``npm install``

## Usage

Run the index.js followed by the files you want to have the comments of : `node index.js <files...>`


## Output
This is an example output after calling the module with two parameters `probeurre.py` and `probeurre.py`

```json
{
   ".\\index.js":{
      "5":{
         "begin":5,
         "end":5,
         "codeStart":6,
         "content":"file list\r\n",
         "info":{
            "type":"singleline"
         },
         "code":"var urls = process.argv.slice(2)"
      },
      "8":{
         "begin":8,
         "end":8,
         "codeStart":9,
         "content":"object output\r\n",
         "info":{
            "type":"singleline"
         },
         "code":"var output = {};"
      },
      "13":{
         "begin":13,
         "end":13,
         "codeStart":14,
         "content":"we use sync so we can get them all toghether\r\n",
         "info":{
            "type":"singleline"
         },
         "code":"\tvar data = fs.readFileSync(filename, 'utf8');"
      },
      "16":{
         "begin":16,
         "end":16,
         "codeStart":17,
         "content":"this is stupid, it want the object in this format\r\n",
         "info":{
            "type":"singleline"
         },
         "code":"\tvar pattern = { pattern: commentPattern(filename) };"
      },
      "18":{
         "begin":18,
         "end":18,
         "codeStart":19,
         "content":"extract comments to json\r\n",
         "info":{
            "type":"singleline"
         },
         "code":"\tvar report = commentExtract(data, pattern);"
      }
   }
}
```
