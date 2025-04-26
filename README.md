# Code Analyzer

A powerful code analysis tool that leverages Google's Gemini AI to provide detailed code reviews and improvements. This project helps developers write better code by analyzing their codebase and providing actionable feedback.

![Code Analyzer Interface](./Output/Code%20Analyzer.png)

## Features

- 🤖 AI-powered code analysis using Google's Gemini AI
- 📝 Detailed code review reports
- 🔍 Identification of potential issues and bugs
- 💡 Suggestions for code improvements
- 🎯 Best practices recommendations
- ⚡ Performance optimization tips
- 🔒 Security vulnerability detection

## Tech Stack

### Backend
- Node.js
- Express.js
- Google Gemini AI API
- dotenv for environment variables

### Frontend (Planned)
- React.js
- Modern UI/UX design

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Google Gemini AI API key


Create a `.env` file in the Backend directory and add your Google Gemini AI API key:
```
GOOGLE_GEMINI_KEY=your_api_key_here
```

## API Endpoints

### POST /ai/get-review
Analyzes the provided code and returns detailed feedback.

**Request Body:**
```json
{
    "code": "your code here"
}
```

**Response:**
Returns AI-generated code analysis with:
- Issues identified
- Recommended solutions
- Key improvements
- Code examples

## Project Structure

```
code-analyzer/
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── ai.controller.js
│   │   ├── routes/
│   │   │   └── ai.routes.js
│   │   ├── services/
│   │   │   └── ai.service.js
│   │   └── app.js
│   ├── server.js
│   └── package.json
├── Frontend/
│   ├── src/
│   ├── public/
│   └── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Google Gemini AI for providing the AI capabilities
- Express.js team for the backend framework
- React team for the frontend framework