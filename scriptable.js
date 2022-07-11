let payload = args.shortcutParameter

let today = new Date();
let date = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate();

postRequest = new Request("https://api.notion.com/v1/blocks/fed3925b90ce48969112e0e5945b9d5b/children")

postRequest.method = 'PATCH'
postRequest.headers = {
  "Notion-Version": "2022-06-28",
  Authorization: "Bearer secret_nBE9MNaNo7sZQFILqGFy4XhA2ycy4MVsMzUBMl5qMA0",
  "Content-Type": "application/json"
 }

postRequest.body = JSON.stringify({
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
                content: payload
              },
            },
          ],
        },
      },
    ],
  })
  
postRequest.load()

Script.complete()
