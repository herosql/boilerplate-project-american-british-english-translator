# American-British English Translator

### 🎯 Objective
A specialized linguistics microservice designed to perform real-time localized translation between American and British English variants, emphasizing complex string manipulation and pattern matching.

### 🛠 Tech Stack
- **Runtime:** Node.js & Express
- **Logic:** JavaScript (ES6) / Regular Expressions
- **Testing:** Chai & Mocha (Unit & Functional Testing)

### 🚀 Key Features
- **Bidirectional Translation:** Seamlessly converts text from American to British English and vice versa using specialized dictionaries.
- **Context-Aware Mapping:** Handles nuances such as spelling differences (color vs. colour), vocabulary variations (elevator vs. lift), and honorifics (Mr. vs Mr).
- **Time Format Conversion:** Automatically detects and converts time formats (10:30 in US vs. 10.30 in UK).
- **Visual Highlighting:** Implements a dynamic UI/API response that wraps translated words in specific HTML tags for easy identification.
- **Extensive Test Coverage:** - **Unit Tests:** Validates individual translation logic for various categories (spelling, titles, etc.).
    - **Functional Tests:** Ensures API endpoints return correct JSON responses and handle empty or untranslatable strings gracefully.

### 🧪 Technical Highlight
This project demonstrates high proficiency in **Regular Expressions (RegEx)** to solve non-trivial text processing challenges, ensuring that localized titles and time-strings are handled with precision without affecting the rest of the sentence structure.
