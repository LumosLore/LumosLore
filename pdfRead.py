import fitz  # PyMuPDF
from transformers import pipeline
import json

# Extract text from PDF
def extract_text_from_pdf(pdf_path):
    doc = fitz.open(pdf_path)
    text = ""
    for page in doc:
        text += page.get_text()
    return text

# Answer questions
def answer_questions(text, questions):
    qa_pipeline = pipeline("question-answering")
    for question in questions:
        try:
            result = qa_pipeline(question=question, context=text)
            print(f"Question: {question}")
            print(f"Answer: {result['answer']}\n")
        except Exception as e:
            print(f"Error answering question '{question}': {e}")

# Main function
def main(pdf_path, questions_file):
    text = extract_text_from_pdf(pdf_path)

    # Reading questions from the JSON file
    with open(questions_file, 'r') as f:
        questions = json.load(f)

    answer_questions(text, questions)

# Example usage
if __name__ == "__main__":
    pdf_path = "sdgp.pdf"
    questions_file = 'questions.json'
    main(pdf_path, questions_file)
