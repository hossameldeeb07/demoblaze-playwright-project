# 🧪 Demoblaze Playwright Automation Project

This project automates end-to-end user flows on [https://www.demoblaze.com] using **Playwright + TypeScript** and follows the **Page Object Model (POM)** design pattern.

---

## ✅ Scenarios Covered

1. **Register New User** (randomized username/password)
2. **Login with valid credentials** (`hess` / `1234567`)
3. **Logout**
4. **Order Apple Monitor 24** (full purchase flow)

---

## 📁 Project Structure

.
├── pages/ → Page Object Model classes (HomePage, LoginPage, CartPage)
├── tests/ → Test specs for each scenario
├── utils/ → Random user generator
├── playwright.config.ts → Headed, fullscreen, serial mode setup
└── README.md

---

## 🚀 How to Run

### 📦 Install Dependencies

```
npm install
npx playwright install
🧪 Run All Tests (Serial, Headed, Fullscreen)

npx playwright test
📊 View HTML Test Report

npx playwright show-report
📹 Video Evidence
Watch full test run: https://drive.google.com/file/d/1wyyclrLzMtB0vArbrSbRtyNgNm3YBnNB/view?usp=drive_link


🔗 GitHub Repository
All code and test scenarios:
https://github.com/hossameldeeb07/demoblaze-playwright-project

🛠 Dependencies
Node.js

Playwright

TypeScript

Git

✅ Notes
All tests run in serial mode (not parallel)

Browser opens in full screen