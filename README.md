# Blog Summarizer
![Main Page](/assignment-2/public/ProjectImages/MainPage.PNG)

## Demo Video
[▶ Watch Demo](/assignment-2/public/ProjectImages/Demo%20Video.mp4)

## Overview
**Blog Summarizer** is a web application that allows users to submit a blog URL and receive a concise summary of its content. The project leverages **Next.js** for the frontend and integrates with **n8n** for workflow automation by scraping, extracting, summerizing & converting to URDU Language. N8N is also responsible for storing the complete content in the **MongoDB database** & only the URDU summary in **SupaBase**. Summaries are retrieved from a backend API after the n8n workflow processes the submitted URL and are showen to the user.

## Features
- Submit any blog URL to generate a summary
- Automated scraping and summarization using n8n workflow
- Responsive and modern UI built with Next.js & Tailwind CSS
- Displays submitted URL and generated summary
- Handles loading, error, and success states

## Technologies Used
- **Next.js**: Frontend framework for building the user interface
- **React**: UI library for building interactive components
- **n8n**: Workflow automation platform for scraping and summarizing blog content
- **TypeScript**: Type safety for React components
- **Tailwind CSS**: Utility-first CSS framework for styling
- **MongoDB**: To store the complete content related to the URL: (URL, Word Count, Data, Origin, Date and Time)
- **SupaBase**: Stores the summary generated and converted to Urdu Language

## How It Works
1. **User submits a blog URL** via the web interface.
2. **n8n workflow** is triggered via a webhook, which scrapes the blog and generates a summary.
3. The frontend **waits for the summary** to be generated, polling the backend API (`/api/get-latest-summary`).
4. Once ready, the summary is displayed along with the submitted URL.

## Project Structure
```
assignment-2/
  app/
    URL/
      main.tsx        # Main page for submitting URLs and displaying summaries
      page.tsx        # (Additional Next.js page)
    api/
      get-latest-summary/
        route.ts      # API route for retrieving the latest summary
    ...               # Other Next.js app files
  public/             # Static assets
  package.json        # Project dependencies
  tsconfig.json       # TypeScript configuration
  next.config.ts      # Next.js configuration
  README.md           # Project documentation
```

## Key Files
- `app/URL/main.tsx`: Main React component for the URL submission and summary display logic.
- `app/api/get-latest-summary/route.ts`: API endpoint for fetching the latest summary.

## n8n Integration
- The project uses **n8n** to automate the scraping and summarization process.
- When a user submits a URL, a POST request is sent to an n8n webhook.
- n8n handles scraping the blog, generating the summary, converting to Urdu language & stored in the MongoDB & Supabase Databases, which is then made available via the backend API.

## Usage Steps
### 1. Clone the repository and install dependencies.
### 2. Start the Next.js development server or Open using the Deployed [Link](https://blog-summarizer-ten.vercel.app).

### 3. Enter a blog URL in the web interface.
![URL Page](/assignment-2/public/ProjectImages/URLPage.PNG)

### 4. **Execute Workflow** in the n8n & wait for content extraction,  summary generation & Urdu translation. Content is stored in the MongoDB & Summary in SupaBase
![N8N](/assignment-2/public/ProjectImages/n8n.PNG)


### 5. Complete Content View in MongoDB
![MongoDB](/assignment-2/public/ProjectImages/MongoDB.PNG)

### 6. Summary Stored in SupaBase
![SupaBase](/assignment-2/public/ProjectImages/SupaBase.PNG)

### 7. Your Result
![Result](/assignment-2/public/ProjectImages/Result.PNG)


## Notes
- The summary generation may take a few minutes depending on the n8n workflow timing.
- The summary is also generated in english then is statically converted to URDU.
- Error and loading states are handled gracefully in the UI.