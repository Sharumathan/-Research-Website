import sys
from pypdf import PdfReader

def extract(pdf_path, out_path):
    try:
        reader = PdfReader(pdf_path)
        text = ''
        for page in reader.pages:
            text += page.extract_text() + '\n'
        with open(out_path, 'w', encoding='utf-8') as f:
            f.write(text)
        print(f"Successfully extracted {pdf_path} to {out_path}")
    except Exception as e:
        print(f"Error extracting {pdf_path}: {e}")

if __name__ == "__main__":
    extract('Website.pdf', 'website_text.txt')
    extract('Research.pdf', 'research_text.txt')
