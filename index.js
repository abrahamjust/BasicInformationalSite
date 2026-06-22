const express = require("express");
const path = require("path");
const app = express();

app.get('/', function(req, res){
    res.sendFile(path.join((__dirname + '/index.html')));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/about.html'));
});

app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname + '/contact-me.html'));
});

app.use(function(req,res){
    res.status(404).sendFile(path.join(__dirname + '/404.html'));
});

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});

// import http from 'node:http';
// import fs from 'node:fs';

// // const server = http.createServer((req, res) => {
// //     if (req.url === '/') {
// //         res.writeHead(200, { 'Content-Type': 'text/html'});
// //         res.end(fs.readFileSync('index.html'));
// //     } else if (req.url === '/about') {
// //         res.writeHead(200, { 'Content-Type': 'text/html'});
// //         res.end(fs.readFileSync('about.html'));
// //     } else if (req.url === '/contact-me') {
// //         res.writeHead(200, { 'Content-Type': 'text/html'});
// //         res.end(fs.readFileSync('contact-me.html'));
// //     } else {
// //         res.writeHead(200, { 'Content-Type': 'text/html'});
// //         res.end(fs.readFileSync('404.html'));
// //     }
// // });

// // server.listen(8080);

// const server = http.createServer((req, res) => {
//     let url = req.url;
//     let filePath = "";

//     if (url === '/') {
//         filePath = "index.html";
//     } else if (url === '/about') {
//         filePath = "about.html";
//     } else if (url === '/contact-me') {
//         filePath = "contact-me.html";
//     } else {
//         filePath = "404.html";
//     }

//     fs.readFile(filePath, (err, content) => {
//         if (err) {
//             res.writeHead(500, { "Content-Type": "text/plain" });
//             res.end("Internal error - 500");
//         } else {
//             let statusCode = (filePath === '404.html') ? 404 : 200;
//             res.writeHead(statusCode, { "Content-Type": "text/html" });
//             res.end(content, "utf-8");
//         }
//     });
// });

// server.listen(8080, () => {
//     console.log("server running on port 8080");
// });
