import { OPENAI_API_KEY, OPENAI_ORGANIZATION } from "@env";
import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
  organization: OPENAI_ORGANIZATION
});
const openai = new OpenAIApi(configuration);

export default openai