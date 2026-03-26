# React Advice App

A simple React app that fetches and displays random advice using the Advice Slip API.

This project demonstrates modern React data fetching using **React Suspense** and the **use() hook**.

---

## Features

- Fetches random advice from an API
- Uses React Suspense for loading UI
- Uses React `use()` hook to resolve promises
- Button to fetch new advice instantly
- Simple and clean component structure

---

## Tech Stack

- React
- Vite
- JavaScript
- CSS

---

## How It Works

1. The app fetches advice from the API.

- https://api.adviceslip.com/advice

2. The promise is stored in React state.

3. The promise is passed to the `Advices` component.

4. The `use()` hook resolves the promise.

5. While the promise is pending, `Suspense` shows a loading message.

---

## Project Structure

```
src
├── App.jsx
├── Advices.jsx
├── App.css
└── assets
```

---

## Main Components

### App.jsx

Responsible for:

- Fetching advice
- Managing state
- Rendering Suspense

### Advices.jsx

Responsible for:

- Resolving the promise with `use()`
- Displaying the advice

---

## Installation

Clone the repository

```bash
git clone https://github.com/JowelislamHabib/Get-Advice.git
```

Go to the project folder
`cd Get-Advice`

Install dependencies
`npm install`

Run the project
`npm run dev`
