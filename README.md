# 5Clipa Command Centre PRO

Advanced Cloud-Based Fintech Operations Dashboard for Micro-Lending & Credit Management.

---

# Overview

5Clipa Command Centre PRO is a modern fintech operations platform designed for:

- Micro-lenders
- Credit providers
- Field agents
- Loan administrators
- Collections teams

The system provides:

✔️ Loan assessments  
✔️ NCA fee calculations  
✔️ South African ID validation  
✔️ Google Sheets cloud database integration  
✔️ PDF receipt generation  
✔️ WhatsApp automation  
✔️ Financial analytics  
✔️ Compliance monitoring  
✔️ Dark mode dashboard  
✔️ Mobile responsiveness  

---

# Features

## Core Lending Features

- Loan affordability calculator
- NCA 2026 compliant fee estimation
- Dynamic repayment schedules
- Risk grading system
- Credit score integration
- Portfolio tracking

---

## Cloud Backend

Powered by:

- Google Apps Script
- Google Sheets database

Benefits:

- Real-time syncing
- Multi-device access
- Zero server hosting cost
- Fast deployment
- Easy reporting

---

## Compliance Tools

Built-in:

- SARS deadline monitoring
- NCR compliance alerts
- POPIA awareness
- Audit-friendly records

---

## Automation

- PDF contract generation
- WhatsApp client messaging
- Automated application syncing
- Real-time dashboard refresh

---

# Tech Stack

## Frontend

- HTML5
- CSS3
- Vanilla JavaScript
- Chart.js
- html2pdf.js
- Font Awesome

---

## Backend

- Google Apps Script

---

## Database

- Google Sheets

---

# Project Structure

```txt
5clipa-command-centre/
│
├── index.html
├── README.md
│
├── assets/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   ├── app.js
│   │   ├── api.js
│   │   ├── calculator.js
│   │   ├── compliance.js
│   │   ├── validation.js
│   │   ├── analytics.js
│   │   ├── pdf.js
│   │   ├── whatsapp.js
│   │   ├── theme.js
│   │   └── constants.js
│   │
│   └── img/
│
├── backend/
│   └── google-apps-script/
│       └── Code.gs
│
└── docs/
```

---

# Installation

## 1. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/5clipa-command-centre.git
```

---

## 2. Open Project

Open:

```txt
index.html
```

in your browser.

Or use VS Code Live Server.

---

# Google Sheets Setup

## Step 1 — Create Spreadsheet

Create a Google Sheet named:

```txt
Applications
```

---

## Step 2 — Add Headers

```txt
Ref
Name
ID
Amount
Term
Status
RiskGrade
CreditScore
Phone
CreatedAt
```

---

## Step 3 — Open Apps Script

```txt
Extensions → Apps Script
```

---

## Step 4 — Paste Backend Code

Paste contents of:

```txt
backend/google-apps-script/Code.gs
```

---

## Step 5 — Deploy Web App

```txt
Deploy → New Deployment
```

Settings:

```txt
Execute As:
Me

Who Has Access:
Anyone
```

---

# Configure Frontend

Inside:

```txt
assets/js/constants.js
```

Update:

```javascript
const API_URL = "YOUR_GOOGLE_SCRIPT_URL";
const API_KEY = "YOUR_API_KEY";
```

---

# Usage

## Create Loan Application

1. Enter client details
2. Enter loan amount
3. Enter affordability data
4. Click:
   "Process Application"

The system will:

- Validate SA ID
- Calculate NCA fees
- Assess affordability
- Assign risk grading
- Save to cloud database
- Generate WhatsApp message

---

# PDF Exports

The platform can generate:

- Loan receipts
- Portfolio reports
- Client summaries

Using:

```txt
html2pdf.js
```

---

# WhatsApp Integration

Client repayment schedules can be sent automatically using:

```txt
wa.me links
```

Optional upgrades:

- Twilio
- Meta WhatsApp API
- UltraMsg

---

# Analytics

Includes:

- Portfolio value tracking
- Loan status charts
- Approval ratios
- Risk segmentation

Powered by:

```txt
Chart.js
```

---

# Security Notes

This project is designed as:

```txt
MVP / Internal Operations Software
```

Current architecture exposes frontend API keys.

For enterprise deployment:

Recommended upgrades:

- Node.js backend
- JWT authentication
- PostgreSQL database
- Encrypted storage
- Role permissions
- HTTPS enforcement

---

# Roadmap

## Planned Features

- OCR document scanning
- AI risk scoring
- Digital signatures
- Collections automation
- SMS reminders
- Credit bureau integration
- Multi-user roles
- Audit logging
- Offline-first mobile mode

---

# Deployment Options

## Frontend

Recommended:

- GitHub Pages
- Netlify
- Vercel

---

## Backend

Current:

- Google Apps Script

Future:

- Node.js + PostgreSQL

---

# License

MIT License

---

# Disclaimer

This software provides estimated loan calculations and operational workflows.

It does not constitute legal, financial, or regulatory advice.

Users are responsible for ensuring compliance with:

- National Credit Act (NCA)
- POPIA
- SARS requirements
- NCR regulations

---

# Author

Equilibrio Elite  
5Clipa Command Centre PRO

Cloud Fintech Operations Platform
