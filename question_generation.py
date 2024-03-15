import fitz  # PyMuPDF
import spacy

def read_pdf(file_path):
    doc = fitz.open(file_path)
    text = ""
    for page in doc:
        text += page.get_text()
    return text


nlp = spacy.load("en_core_web_sm")

def extract_keywords(text):
    doc = nlp(text)
    keywords = [token.text for token in doc if token.pos_ in ['NOUN', 'PROPN']]
    return keywords

from transformers import T5ForConditionalGeneration, T5Tokenizer

model_name = "t5-base"
tokenizer = T5Tokenizer.from_pretrained(model_name)
model = T5ForConditionalGeneration.from_pretrained(model_name)

def generate_question(keyword, context):
    input_text = f"generate a question: {keyword} context: {context}"
    input_ids = tokenizer.encode(input_text, return_tensors="pt")
    output_ids = model.generate(input_ids)[0]
    question = tokenizer.decode(output_ids, skip_special_tokens=True)
    return question

file_path = "OOP_Concepts_PDF.pdf"
text = read_pdf(file_path)
keywords = extract_keywords(text)

# Generate questions for the first few keywords as an example
for keyword in keywords[:5]:  # Adjust as needed
    print(generate_question(keyword, text))