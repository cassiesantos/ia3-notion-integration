const express = require("express");
const { Client } = require("@notionhq/client");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const notion = new Client({ auth: "NOTION_KEY_HERE" });
const databaseId = "34c4d348e4f480dfb13fd1ca3bed8251";

app.post("/submit", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: {
          title: [{ text: { content: name } }]
        },
        Email: {
          rich_text: [{ text: { content: email } }]
        },
        Message: {
          rich_text: [{ text: { content: message } }]
        }
      }
    });

    res.json({ success: true });
  } catch (error) {
    console.error("NOTION ERROR:", error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});