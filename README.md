# AI Practice

A small Node.js practice project: a **chai shop assistant** chatbot that only talks about tea and snacks.

It uses the [OpenAI Node SDK](https://github.com/openai/openai-node) pointed at NVIDIA's OpenAI-compatible API, running the `nvidia/nemotron-3.5-lightning-30b-a3b` model.

## Example

```
> npm start
Fresh chai coming up! 🍵 Comes with a crisp biscuit on the house.
```

## Setup

1. Install [Node.js](https://nodejs.org/) (v18 or newer).
2. Install dependencies:
   ```
   npm install
   ```
3. Get an API key from [build.nvidia.com](https://build.nvidia.com/) and create a `.env` file in the project folder:
   ```
   NVIDIA_API_KEY=your-key-here
   ```
   `.env` is in `.gitignore`, so your key is never committed.

## Run

| Command | What it does |
| --- | --- |
| `npm start` | Runs the script once |
| `npm run dev` | Runs the script and restarts it whenever you save a file |

## How it works

`01-chAI.js` sends two messages to the model:

- a **system prompt** that sets the persona: a friendly chai shop assistant that only talks about tea and snacks and keeps replies short
- a **user message**, such as asking for a cup of tea

It then prints the model's reply. Change the user message in `01-chAI.js` to try other questions.
