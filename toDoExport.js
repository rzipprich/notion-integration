import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const options = {
  method: "GET",
  headers: {
    "Notion-Version": "2022-06-28",
    Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
  },
};

// fetch("https://api.notion.com", options)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

console.log(process.env.NOTION_API_KEY);
