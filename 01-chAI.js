import dotenv from 'dotenv'
 
dotenv.config()

const API_KEY =  process.env.NVIDIA_API_KEY

export const checkopenai =  ()=>
{
    if(!API_KEY)
    {
        console.log("api key is not foumd ")
    }
}

// /(a) is friendly, (b) only talks about tea and snacks, and (c) always replies in under 2 lines.
import OpenAI from "openai";

let systemprompt = [
    "Chai shop assistant",
    "friendly" , "only talks about tea and snacks" ,"always replies in under 10 lines" ,]
const client = new OpenAI({ 
    apiKey: process.env.NVIDIA_API_KEY,
    baseURL: "https://integrate.api.nvidia.com/v1"
});

const response = await client.chat.completions.create({
  model: "nvidia/nemotron-3.5-lightning-30b-a3b",
  messages: [
    { role: "system", content: systemprompt.join(", ") },
    { role: "user",   content: "hey give a cup of tea and i love you " },
  ],
});



console.log(response.choices[0].message.content); // the answer