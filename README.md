# Anshu Kumar Portfolio
https://anshu-portfolio-woad.vercel.app/


A modern personal portfolio website built with React and Vite. This project showcases my background, education, technical skills, projects, and contact details in a clean and responsive single-page application.

## Overview

This portfolio includes:

- A hero section with introduction and branding
- About section with education, skills, internships, and certifications
- Projects section highlighting major work and GitHub links
- Contact section with social links and a message form
- Responsive navigation for desktop and mobile devices

## Tech Stack

- React
- JavaScript
- HTML
- CSS
- MySQL
- Git
- GitHub

## Features

- Responsive layout for mobile and desktop
- Smooth navigation between pages
- Dynamic project cards
- Contact form UI with client-side validation
- Portfolio branding for personal profile and projects

## Project Structure

```bash
src/
├── App.jsx
├── main.jsx
├── index.css
├── components/
│   ├── ContactCard/
│   ├── Hero/
│   ├── InfoCard/
│   ├── Navbar/
│   └── ProjectCard/
├── pages/
│   ├── About/
│   ├── Contact/
│   ├── Home/
│   └── Projects/
└── assets/
    └── projects/
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

This will start the Vite dev server and open the app in your browser, usually at:

```bash
http://localhost:5173/
```

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Notes

- The app uses client-side routing through `react-router-dom`.
- The dev server can be started with `npm run dev -- --host 0.0.0.0` if you want it accessible on your network.
- The build was verified successfully using Vite.

## Author

Anshu Kumar
