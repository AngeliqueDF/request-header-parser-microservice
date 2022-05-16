# Request Header Parser Microservice

<div align="center">
  <img src="./src/img/logo-nodejs.svg">
  <img src="./src/img/logo-nodemon.svg">
  <img src="./src/img/logo-expressjs.svg">
</div>

## Overview

_A header parser which returns the client's IP address, preferred language, and software._

## Links

<p>
<a href="https://github.com/AngeliqueDF/request-header-parser-challenge">GitHub repo</a>
</p>

<br />

## How to run the project

1. `git clone https://github.com/AngeliqueDF/request-header-parser-microservice-challenge.git MY-FOLDER-NAME`
2. `cd MY-FOLDER-NAME`
3. add `.env` file with a `PORT` value
4. `npm install`
5. `npm start`
6. visit `http://localhost:{PORT}`

<br />

## Description

This project is an Express.js app which parses specific headers from a request and returns them in a JSON object.

This is my solution to freeCodeCamp's Request Header Parser Microservice challenge.

## Features

- Returns client's ip address, preferred language, and software.
- Handles requesting an unknown URL.

<br />

## API

### Get the JSON response

`GET localhost:{PORT}/whoami/`

#### Parameters

None. All values are taken from the request's headers.

#### Example response

```json
{
	"ipaddress": "159.20.14.100",
	"language": "en-US,en;q=0.5",
	"software": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"
}
```

<br />

## Technologies

- `Node.js`
- `Express.js`
- `helmet`
<!--

## How I built this project

gist -->

<br />

## How to test the app

If you are testing this app on localhost, do not forget to start the server! See the repo.
There are different ways to test this microservice:

### Using the Curl utility

1. Open the terminal
2. Enter `curl http://localhost:5000/api/whoami`

### Using the REST Client VS Code extension

1. Create a new file from the terminal `touch request.rest && code request.rest`.
2. In `request.rest`, enter `GET http://localhost:5000/api/whoami`.
3. Click on the `Send request` link that appears above the request you entered in step 2.
4. Once a response is received from the server, its body and headers will be displayed in a new editor tab.

### In the browser

Visit the http://localhost:5000/api/whoami endpoint in your browser (use the JSONVue extension to format the response).

### Recommended technologies and tools

- [`nodemon` to restart the server after each save.](https://www.npmjs.com/package/nodemon).
- JSONVue.
- REST Client VS Code extension.

<br />

## Sources

- [Request Header Parser Microservice challenge from freeCodeCamp.](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/request-header-parser-microservice)

## Useful references

1. [`req.ip` from the Express documentation](http://expressjs.com/en/4x/api.html#req.ip).
2. [`req.get(field)` from the Express documentation](http://expressjs.com/en/4x/api.html#req.get).
