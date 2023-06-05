import openai  from "./openAiClient";


export const OpenAIService = {

    getHistory: async (input: string) => {
        try {
            const res = await openai.createCompletion({
                model: "text-davinci-002",
                prompt: `Write a story about a cat name ${input}. The story must have a beginning, middle and end.`,
                max_tokens: 150,
                temperature: 0.2,
              })
            return res.data.choices[0].text  
        } catch (error) {
            if (error.response) {
                console.log(error.response.status);
                console.log(error.response.data);
              } else {
                console.log(error.message);
              }
        }
      }
}