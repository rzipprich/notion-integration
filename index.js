import fetch from 'node-fetch';

const options = {
  method: 'PATCH',
  headers: {
    'Notion-Version': '2022-06-28',
    Authorization: "Bearer secret_nBE9MNaNo7sZQFILqGFy4XhA2ycy4MVsMzUBMl5qMA0",
    'Content-Type': 'application/json'
  },
  body: {
    children: [
      {
        "heading_2": {
          "rich_text": [
            {
              "text": {
                "content": "Lacinato kale"
              }
            }
          ]
        }
      },
      {
        "paragraph": {
          "rich_text": [
            {
              "text": {
                "content": "Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.",
                "link": {
                  "url": "https://en.wikipedia.org/wiki/Lacinato_kale"
                }
              }
            }
          ]
        }
      }
    ]
  }
}


fetch("https://api.notion.com/v1/blocks/fed3925b90ce48969112e0e5945b9d5b/children", options)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => console.error(err))