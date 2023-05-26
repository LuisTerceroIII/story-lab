import axios from "axios";
import { OPEN_AI_API_KEY } from "@env"

export const OpenAIService = {

    fetchData: async (input: string) => {
        const response = await axios.post(
          "https://api.openai.com/v1/completions",
          {
            prompt: `Complete this sentence: "${input}"`,
            model: "text-davinci-002",
            max_tokens: 50,
            n: 1,
            stop: ".",
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${OPEN_AI_API_KEY}`,
            },
          }
        );
      
        return response.data.choices[0].text;
      }
}