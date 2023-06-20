import { StoriesCategories } from "../../types/models";
import openai  from "./openAiClient";


export const OpenAIService = {

    getHistory: async (title: string, category: StoriesCategories, plot: string, paragraphs=4) => {
        try {
            let requireArgPrompt = `Write a story titled ${title} of category:${category}.`
            const hasPlot = plot !== null && plot !== undefined && plot !== ""
            if (hasPlot) {
                requireArgPrompt = requireArgPrompt + `The main idea of the story is:${plot}.`
            }
            requireArgPrompt = requireArgPrompt + `The length of the story should be ${paragraphs} paragraphs`
            const res = await openai.createCompletion({
                model: "text-davinci-002",
                prompt:requireArgPrompt,
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