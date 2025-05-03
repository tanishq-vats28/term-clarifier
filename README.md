# Term Clarifier

> A single-screen React app (built with Vite) that lets learners type any term and instantly see a definition with highlighted synonyms.

**Live Demo:** https://exquisite-capybara-bbaff1.netlify.app/

---

## Tech Used

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Plain CSS (with mobile-first responsive design)
- **Data Fetching:** Fetch API
- **API:** [DictionaryAPI.dev](https://dictionaryapi.dev/)

---

## Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/dictionary-app.git
   cd dictionary-app
   ```

````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Visit `http://localhost:5173` (or the address shown in your terminal).

---

## Folder Structure

```
dictionary-app/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── DefinitionCard.jsx
│   │   └── Loader.jsx
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## Usage

1. Type any English term into the input box.
2. Click **Submit**.
3. A loading indicator will display while fetching.
4. If found, you’ll see the definition in a styled card, with any synonyms highlighted in blue and bold.
5. Errors (“Term not found!” or network issues) appear in red below the button.

---

## AI-Related Questions

### Q1 – Leveraging AI in Front-End Delivery

**Describe, with concrete examples, how you would use AI-powered coding or design assistants to accelerate front-end development in a startup where shipping fast matters but code quality can’t slip.**

1. **Component Generation & Scaffolding**

   - Use an AI assistant (e.g., GitHub Copilot or Tabnine) to scaffold new React components.
   - Prompt example:

     > “Generate a responsive React card component that accepts title, description, and an image URL as props, styled with Tailwind.”

   - Saves 10–15 minutes per component and enforces consistency by following your configured style guide.

2. **Automated Accessibility Checks**

   - Integrate AI-powered linting tools (e.g., Axe CI or DeepCode) into CI/CD.
   - They automatically flag missing ARIA labels, color-contrast issues, and semantic HTML mistakes.
   - This ensures that even under tight deadlines, each PR meets WCAG standards.

3. **Design-to-Code Conversion**

   - Use Figma’s AI export plugin to convert approved designs into React code snippets (JSX + CSS modules).
   - Designers stay in Figma; developers get clean starting points, cutting hand-off friction and reducing rework by up to 30%.

4. **Intelligent Code Reviews**

   - Employ AI review bots (e.g., CodeGuru, SonarLint with AI) to detect performance anti-patterns (like unnecessary re-renders or unused dependencies).
   - The bot comments on PRs with actionable suggestions: “Consider wrapping this callback with `useCallback` to avoid prop-drilling re-renders.”

---

### Q2 – Inventing an AI Feature for Class 11 Students

**You’re tasked with designing a new AI feature that makes Physics revision easier for Indian class 11 students. Outline two key features and sketch the user journey in plain text.**

1. **Adaptive Concept Summarizer**

   - **What it does:**

     - Student selects a chapter or topic (e.g., “Newton’s Laws”).
     - AI reads the official NCERT text and generates a concise, bullet-point summary focusing on definitions, formulas, and real-life examples.

   - **User Journey:**

     1. Student logs in and clicks “Chapter 5: Laws of Motion.”
     2. Taps “Generate Summary.”
     3. Sees a two-column view: left side shows AI-written bullets; right side lists related formula cards with quick‐copy buttons.

2. **Interactive Problem Solver**

   - **What it does:**

     - Student types or uploads a physics problem statement.
     - AI breaks it into step-by-step hints, suggests which formula to use, and finally shows the full solution.

   - **User Journey:**

     1. On the “Practice” tab, student pastes: “A 5 kg block on a frictionless surface…”
     2. AI asks: “Which law applies here?” with multiple-choice prompts.
     3. After selection, AI renders the free-body diagram and highlights the relevant formula.
     4. Upon request, AI reveals the complete solution with explanatory notes.

---
````
