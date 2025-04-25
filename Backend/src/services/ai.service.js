require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.GOOGLE_GEMINI_KEY;
console.log(`API key exists: ${!!apiKey}`);

const genAI = new GoogleGenerativeAI(apiKey);

async function contentGenerator(code) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction: `

      You are an code reviewer, who have an expertise in development.
      you look for the code and find the problems and suggest the solution to the developer.

      you always try to find the best solution for the developer and also try to make the code more efficient and clean.

      `,

    });
    const result = await model.generateContent(code);
    return result.response.text();
  } catch (error) {
    console.error("Error details:", error);
    throw error;
  }
}

module.exports = contentGenerator;