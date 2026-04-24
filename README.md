PROJECT DESCRIPTION (COMTECH)
A very straightforward lead form that sends user input (name, email, and message) directly into a Notion database. Through a clean UI, users can submit necessary information while organizing is done inside Notion for easy tracking.

API USED
Notion API was used to create new pages which serve as the entries in a tabular Notion database. Each form submission is converted into organized data and stored as a database row with properties such as Name, Email, and Message.

SETUP INSTRUCTIONS
-> npm install
-> node server.js
-> open index.html
-> check server.js if Notion integration token and database ID are correct

DATA INTEGRATION EXPLANATION
-> user fills out the form (HTML).
-> when form is submitted, JavaScript captures the input values
-> the data is cleaned using .trim() to prevent empty inputs.
-> POST request is sent to the backend endpoint /submit.
-> express server receives the request and extracts the data.
-> Notion API is called using the provided database ID and token.
-> a new page/entry is created in the Notion database with mapped properties    
    Name → title field
    Email → rich text
    Message → rich text
-> sends a success or error response back to the frontend so the user knows their status

LIMITATIONS
-> email validity outside of the usual @ format cannot be checked
-> requires local server
-> notion API requires exact property name matching, which can cause failures if mismatched

AI USAGE DISCLOSURE
AI (ChatGPT) was used for debugging initial code and improving validation logic. It was also used to refine frontend behavior like preventing empty submissions. I also used YouTube to understand Notion integration better.
