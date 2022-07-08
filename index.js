import fetch from 'node-fetch';

fetch("https://api.notion.com")
  .then(response => resonponse.json())
  .then(data => console.log(data))