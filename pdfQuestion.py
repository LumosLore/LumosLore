import pdfminer
from pdfminer.high_level import extract_text
import openai
import json

def extract_text_from_pdf(pdf_path):
    return extract_text(pdf_path)

def generate_questions_with_openai(text, openai_api_key):
    openai.api_key = openai_api_key

    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": f"Generate a list of questions based on the following text:\n\n{text}"}
            ],
            max_tokens=20000  # Adjust based on your needs and constraints
        )
        return response['choices'][0]['message']['content'].strip().split('\n')
    except Exception as e:
        print(f"Error generating questions: {e}")
        return []

def save_questions_to_json(questions, filename="questions.json"):
    with open(filename, 'w') as f:
        json.dump(questions, f)

def main(pdf_path, openai_api_key):
    text = extract_text_from_pdf(pdf_path)
    questions = generate_questions_with_openai(text, openai_api_key)
    save_questions_to_json(questions)

if __name__ == "__main__":
    PDF_PATH = "sdgp.pdf"
    OPENAI_API_KEY = "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"
    main(PDF_PATH, OPENAI_API_KEY)
