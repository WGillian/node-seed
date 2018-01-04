const fs = require('fs');
const express = require('express');
const app = express();


fs.readFile('data/hello.txt', 'utf-8', function(err, contents){
	console.log(contents);
});


fs.readFile('data/hello.txt', 'utf-8', function(err, contents){
	console.log(JSON.stringify({contents : '<name>'}));
});

