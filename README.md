# Web Dev Tech Assignment

This project is a mock Search Engine, built with ReactJS and Typescript, built with Vite, with automated testing for quality assurance.

## 💻 Table of Contents

- [Web Dev Tech Assignment](#web-dev-tech-assignment)
  - [💻 Table of Contents](#-table-of-contents)
  - [🗄️ Project Structure](#️-project-structure)
  - [⚙️ Installation](#️-installation)
    - [Prerequisites](#prerequisites)
  - [🚄 Run the App](#-run-the-app)
  - [🧪 Run Unit Tests](#-run-unit-tests)
  - [🧱 Technologies Used](#-technologies-used)
  - [📷 Preview](#-preview)
    - [Responsiveness](#responsiveness)



## 🗄️ Project Structure
```
├── src
│   ├── App.tsx
│   ├── assets
│   │   ├── react.svg
│   │   ├── singapore-lion.png
│   │   └── singapore-lion.svg
│   ├── components
│   │   ├── Header
│   │   │   ├── Banner
│   │   │   │   └── Banner.tsx
│   │   │   ├── Header.tsx
│   │   │   └── InputSearch
│   │   │       └── InputSearch.tsx
│   │   └── SearchResult
│   │       └── SearchResult.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── pages
│   │   └── Search.tsx
│   ├── types
│   │   └── types.ts
│   └── vite-env.d.ts
```

## ⚙️ Installation 

### Prerequisites
Ensure that you have the following installed:
- Node.js (LTS version recommended)
- npm (comes with Node.js)

1. Clone the repository

   ```bash
   git clone https://github.com/thienduc7218/web-dev-assessment.git
   cd web-dev-assessment 
   ```

2. Install dependencies

   ```bash
    npm install
   ```

## 🚄 Run the App

This will start a development server on port 5173 by default.

   ```bash
   npm run dev
   ```
Open your browser and go to http://localhost:5173

## 🧪 Run Unit Tests

   ```bash
   npm run test
   ```
   
![Unit Tests](images/unit-test-vitest.png)
Test library used:
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/)

## 🧱 Technologies Used
- **Frontend**: ReactJS, Typescript
- **Build tool**: Vite
- **Testing tool**: React Testing Library, Jest 

## 📷 Preview
**Header**
![Header](images/input-search-web.png)

**Search result**
![Search result](images/search-result-web.png)

### Responsiveness

**Header**
![Header](images/input-search-responsive.png)

**Search result mobile**
![Search result](images/search-result-responsive.png)