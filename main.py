from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
from datetime import datetime
import openai
# from database import dbasads
import os
from dotenv import load_dotenv

load_dotenv()

print(os.getenv("API_KEY"))
openai.api_key = os.getenv("API_KEY")  

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def getRoutes():
    return ['/prompts']


@app.get("/prompts")
def getPrompts():
    prompts = pd.read_csv('data.csv')
    #notes = db.search_by_value('notesapp', 'notes', "id", "*", get_attributes=['*'])
    return prompts


@app.post("/prompt")
def postPrompt(data = Body()):
    prompt = data['prompt']
    answer = openai.Completion.create(
        model="text-davinci-003",
        prompt=prompt,
        max_tokens=16, # ? 
        temperature=0.5  # to be edited
    )
    print(answer)
    #persist to csv? 
    prompts = pd.read_csv('data.csv')
    prompts = prompts.append({'timestamp':datetime.now(),'prompt':	data['prompt'], 'answer': answer}, ignore_index=True)
    #persist to db 
    return 200
