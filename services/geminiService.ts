import { GoogleGenAI } from "@google/genai";
import { GeminiModel } from "../types";

// Initialize Gemini Client
// Note: In a production environment, ensure your API key is secure.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

export const askGeminiAssistant = async (query: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure the environment variable.";
  }

  try {
    const response = await ai.models.generateContent({
      model: GeminiModel.FLASH,
      contents: query,
      config: {
        systemInstruction: "You are a helpful news assistant for CJNewsHUB. Provide concise, accurate summaries and answers about current events. Keep answers under 100 words unless asked for more details.",
      },
    });

    return response.text || "I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I am having trouble connecting to the news service right now.";
  }
};
