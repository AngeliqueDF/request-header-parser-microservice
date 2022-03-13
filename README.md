- [Request Header Parser Microservice](#request-header-parser-microservice)
  - [Overview](#overview)
  - [Links](#links)
  - [How to run the project](#how-to-run-the-project)
  - [Description](#description)
  - [Features](#features)
  - [API](#api)
    - [Get the JSON response](#get-the-json-response)
      - [Parameters](#parameters)
      - [Example response](#example-response)
  - [Technologies](#technologies)
    - [Recommended technologies and tools](#recommended-technologies-and-tools)
  - [Sources](#sources)
  - [Useful references](#useful-references)

# Request Header Parser Microservice

<div align="center">
  <img src="./src/img/logo-nodejs.svg">
  <img src="./src/img/logo-nodemon.svg">
  <img src="./src/img/logo-expressjs.svg">
</div>

## Overview

_A header parser which the client's IP address, preferred language, and software._

<!-- ![Security Headers](https://img.shields.io/security-headers?url=https%3A%2F%2Fadf.dev) -->

<hr />

## Links

<p>
<a href="https://github.com/AngeliqueDF/request-header-parser-challenge">GitHub repo</a>
</p>

<br />

## How to run the project

1. `git clone HTTPS_REPO_URL MY-FOLDER-NAME`
2. `cd MY-FOLDER-NAME`
3. add `.env` file with a `PORT` value
4. `npm install`
5. `npm start`
6. visit `http://localhost:{PORT}`

<br />

## Description

This project is a simple Express.js app which parses specific headers from a request and returns them in a JSON object.

The code is my solution to freeCodeCamp's Request Header Parser Microservice challenge.

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

```javascript
{
  ipaddress: "159.20.14.100",
  language: "en-US,en;q=0.5",
  software: "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"
}
```

<br />

## Technologies

- `Node.js` and `Express.js`
<!--

## How I built this project

gist -->

### Recommended technologies and tools

- [`nodemon` to restart the server after each save.](https://www.npmjs.com/package/nodemon)

<br />

## Sources

- [Request Header Parser Microservice challenge from freeCodeCamp.](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/request-header-parser-microservice)

## Useful references

1. [`req.ip` from the Express documentation](http://expressjs.com/en/4x/api.html#req.ip).
2. [`req.get(field)` from the Express documentation](http://expressjs.com/en/4x/api.html#req.get).
