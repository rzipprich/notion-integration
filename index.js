import fetch from "node-fetch";

let today = new Date();
let date = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate();

const options = {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Notion-Version": "2022-06-28",
    Authorization: "Bearer secret_nBE9MNaNo7sZQFILqGFy4XhA2ycy4MVsMzUBMl5qMA0",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    children: [
      {
        heading_2: {
          rich_text: [
            {
              text: {
                content: date,
              },
            },
          ],
        },
      },
      {
        paragraph: {
          rich_text: [
            {
              text: {
                content: "Enter description here",
              },
            },
          ],
        },
      },
    ],
  }),
};

fetch(
  "https://api.notion.com/v1/blocks/fed3925b90ce48969112e0e5945b9d5b/children",
  options
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.error(err));
