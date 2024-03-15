import fitz  # PyMuPDF for reading PDF
import spacy
import re
from sklearn.feature_extraction.text import TfidfVectorizer
import numpy as np

# Function to extract text from PDF
def extract_text_from_pdf(pdf_path):
    doc = fitz.open(pdf_path)
    text = ""
    for page in doc:
        text += page.get_text()
    doc.close()
    return text

# Function to preprocess text
def preprocess_text(text):
    text = text.lower()
    text = re.sub(r'[^\w\s]', '', text)
    text = re.sub(r'\d+', '', text)
    doc = nlp(text)
    lemmatized_text = " ".join([token.lemma_ for token in doc if not token.is_stop])
    return lemmatized_text

# Function to extract entities
def extract_entities(text):
    doc = nlp(text)
    entities = [(ent.text.strip(), ent.label_) for ent in doc.ents]
    return entities

# Function to extract keywords using TF-IDF
def extract_keywords_tfidf(text, max_features=20, ngram_range=(1, 2)):
    vectorizer = TfidfVectorizer(max_features=max_features, ngram_range=ngram_range)
    tfidf_matrix = vectorizer.fit_transform([text])
    feature_names = np.array(vectorizer.get_feature_names_out())
    sorted_indices = np.argsort(tfidf_matrix.toarray()).flatten()[::-1]
    top_keywords = feature_names[sorted_indices][:max_features]
    return top_keywords

# Load the spaCy English model
nlp = spacy.load("en_core_web_sm")

# Path to your PDF file
pdf_path = "OOP_Concepts_PDF.pdf"

# Extract, preprocess text, and then extract entities and keywords
extracted_text = extract_text_from_pdf(pdf_path)
preprocessed_text = preprocess_text(extracted_text)
entities = extract_entities(preprocessed_text)
keywords = extract_keywords_tfidf(preprocessed_text)

# Print extracted entities and keywords
print("Extracted Entities:", entities)
print("Extracted Keywords:", keywords)

# Basic function to generate questions from keywords
def generate_questions(keywords):
    questions = []
    for keyword in keywords:
        questions.append(f"What is {keyword}?")  # Simple template-based question
    return questions

# Generate and print questions
questions = generate_questions(keywords)
for question in questions:
    print(question)
