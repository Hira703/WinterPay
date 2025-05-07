# 💡 Utility Bill Payment Web App

A modern, responsive utility bill payment platform built using **React + Vite**. Users can securely log in, view bills by category, and complete payments for electricity, gas, water, internet, and more. Inspired by [ekpay.gov.bd](https://ekpay.gov.bd/#/home).

---

## 🌐 Live Site

🔗 [Visit the Live Site](https://euphonious-pothos-c804ca.netlify.app/)

---

## 📸 Screenshots

### ✅ Home Page
![Homepage Screenshot](./src/assets/screens/homepage.png)

### ✅ Bill Categories
![Categories Screenshot](./src/assets/screens/categories.png)

### ✅ Bill Details (Protected Route)
![Bill Details Screenshot](./src/assets/screens/bill-details.png)

---

## 🚀 Features

- 🔐 **Firebase Authentication** – Secure login/register
- 🧾 **Bill Management** – Pay Electricity, Gas, Water, Internet, Credit Cards, and more
- 🗂 **JSON-Based Bill Data** – Dynamic rendering of bill types and providers
- 📱 **Responsive Design** – Mobile-first layout with Tailwind CSS & DaisyUI
- 🖼 **SwiperJS Slider** – Animated logo carousel on homepage
- 🛡 **Protected Routes** – Only authenticated users can access bill-related pages
- 📄 **User Profile Page** – View and manage account info

---

## 📦 Tech Stack

| Tech             | Purpose                                 |
|------------------|------------------------------------------|
| **React + Vite** | Frontend & development environment       |
| **Tailwind CSS** | Utility-first styling                    |
| **DaisyUI**      | UI components with Tailwind integration  |
| **React Router** | Routing & navigation                     |
| **Firebase Auth**| User authentication                      |
| **SwiperJS**     | Carousel for organization logos          |
| **JSON Data**    | Simulated backend for bill categories    |

---

## 🔑 Protected Routes

Pages like `/bills`, `/bill-details/:id`, `/profile` are protected. If the user is not logged in, they will be redirected to the login page.

---

## 🧭 Pages Overview

| Route             | Description                             |
|-------------------|------------------------------------------|
| `/`               | Homepage with hero, slider, categories   |
| `/login`          | Firebase email login                     |
| `/register`       | Firebase email registration              |
| `/bills`          | View all bills (auth required)           |
| `/bill-details/:id` | Detailed bill info + payment (auth required) |
| `/profile`        | User profile (auth required)             |
| `/404`            | Custom Not Found page                    |

---

## 🛠 Installation & Running Locally

```bash
# Clone the repo
git clone https://github.com/yourusername/utility-bill-app.git
cd utility-bill-app

# Install dependencies
npm install

# Start the development server
npm run dev
src/
│
├── assets/             # Images, logos
├── components/         # Reusable UI components
├── data/               # JSON files for bills & categories
├── layout/             # Layout files (Navbar, Footer, etc.)
├── pages/              # Page components for routes
├── routes/             # Routing logic
├── utils/              # Helper functions (e.g. localStorage)
├── App.jsx             # Main App wrapper
└── main.jsx            # React DOM render entry
📬 Contact
📧 Email: soniahira48@gmail.com


🙏 Acknowledgements
EkPay Bangladesh – Design inspiration

Tailwind CSS

Firebase Authentication

SwiperJS

DaisyUI

🧑‍💻 Developer
Developed  by Sonia Akter Hira