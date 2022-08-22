# Request Header Parser Microservice

![request-header-parser-microservice](https://user-images.githubusercontent.com/39645777/185943283-6fa9a356-dcd3-4171-b956-a410503173ee.png)

<div align="center">
  <img src="./src/img/logo-nodejs.svg">
  <img src="./src/img/logo-nodemon.svg">
  <img src="./src/img/logo-expressjs.svg">
</div>

## Overview

_A microservice which returns the client's IP address, preferred language, and software._

## Links

<p>
<a href="https://github.com/AngeliqueDF/request-header-parser-challenge">GitHub repo</a>
</p>

<br />

## How to run the project

1. `git clone https://github.com/AngeliqueDF/request-header-parser-microservice-challenge.git MY-FOLDER-NAME`
2. `cd MY-FOLDER-NAME`
3. Add `.env` file with a `PORT` value
4. `npm install`
5. `npm start`
6. Visit `http://localhost:{PORT}`

<br />

## Features

- Parses the request's headers to return information about it.
- Handles requesting an unknown URL.

## Technologies

- `node`
- `express`
- `helmet`
- Bootstrap

## Description

This project is an Express.js app which parses specific headers from a request and returns them in a JSON object. It could be used in an analytics software, a data analytics API, or a logging system, for example.

It's my solution to freeCodeCamp's Request Header Parser Microservice challenge.

### How to test the app (manually)

Once the server is listening, there are different ways to test this microservice:

#### Using the `curl` utility

1. Open the terminal
2. Enter `curl http://localhost:5000/api/whoami`

#### Using the REST Client VS Code extension

1. Create a new file from the terminal `touch request.rest && code request.rest`.
2. In `request.rest`, enter `GET http://localhost:5000/api/whoami`.
3. Click on the `Send request` link that appears above the request you entered in step 2.
4. Once a response is received from the server, its body and headers will be displayed in a new editor tab.

#### In the browser

Visit the http://localhost:5000/api/whoami endpoint in your browser (use the JSONVue extension to format the response, or use Firefox).

### How I built this project

I completed this app using Express' documentation. I replaced the original frontend by serving the HTML and JavaScript files required.

The CSS is a minified Bootstrap stylesheet served from a CDN.

Then I added security measures with `helmet` although this aspect still needs to be improved.

## API

### Get the parsed headers

Returns information on the request.

`GET localhost:{PORT}/api/whoami/`

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

### Recommended technologies and tools

- [`nodemon` to restart the server after each save.](https://www.npmjs.com/package/nodemon).
- JSONVue.
- REST Client VS Code extension.

<br />

## Status

**The app is functional but needs security improvements**.

Data coming from clients is processed without any check. Trusting input from the client can leave the app vulnerable to malicious requests.

### Planned changes

- [ ] Improve security.

## Sources

- [Request Header Parser Microservice - freeCodeCamp](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/request-header-parser-microservice)

## Useful references

1. [`req.ip` from the Express documentation](http://expressjs.com/en/4x/api.html#req.ip).
2. [`req.get(field)` from the Express documentation](http://expressjs.com/en/4x/api.html#req.get).

## Author

- [@AngeliqueDF on GitHub.](https://github.com/AngeliqueDF)
- [Visit my website.](https://adf.dev)
- [View my Frontend Mentor profile.](https://www.frontendmentor.io/profile/AngeliqueDF)
