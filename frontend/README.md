# Student Speaking Assessment Report

## Overview
A simple full-stack application that displays a student's speaking assessment
report similar to IELTS / SpeechAce score reports.

## Tech Stack
- React
- Node.js
- Express
- Chart.js / HTML progress bars

## How to Run
1. Start backend:
   - cd backend
   - npm install
   - npm start

2. Start frontend:
   - cd frontend
   - npm install
   - npm run dev

## Data Source
Assessment data is stored as an in-memory JavaScript object
inside the Node.js backend.

## API
GET /api/report  
Returns the student's speaking assessment scores.

## Feedback Logic
Feedback is generated dynamically based on overall score:
- ≥ 8 → Excellent performance
- 6–7 → Good performance
- < 6 → Needs improvement
