# 💡 Utility Bill Payment Web App – *WinterPay*

A modern, responsive utility bill payment platform built using **React + Vite**. Users can securely log in, view categorized bills, and complete payments for electricity, gas, water, internet, and more. Inspired by [ekpay.gov.bd](https://ekpay.gov.bd/).

🔗 **Live Site:** (https://my-bill-app.vercel.app/)

---

## 🚀 Features

- 🔐 **Firebase Authentication** – Secure login/register via email and password  
- 🧾 **Bill Management** – Pay electricity, gas, water, internet, credit cards, etc.  
- 🗂 **Dynamic Bill Data** – All bill types and providers rendered from JSON  
- 📱 **Responsive UI** – Mobile-first layout using Tailwind CSS and DaisyUI  
- 🖼 **SwiperJS Slider** – Animated logo carousel on homepage  
- 🛡 **Protected Routes** – Only authenticated users can access bills & profile  
- 👤 **User Profile Page** – View and manage user info (name, email, photo)

---

## 📦 Tech Stack

| Technology        | Purpose                                     |
|-------------------|---------------------------------------------|
| React + Vite      | Frontend framework and dev environment      |
| Tailwind CSS      | Utility-first CSS styling                   |
| DaisyUI           | Pre-styled Tailwind component library       |
| React Router      | Routing and navigation                      |
| Firebase Auth     | Secure user authentication                  |
| SwiperJS          | Homepage carousel for organization logos    |
| JSON Data         | Simulated backend for bill categories       |

---

## 🔑 Protected Routes

| Route                  | Access Control |
|------------------------|----------------|
| `/bills`               | Authenticated  |
| `/bill-details/:id`    | Authenticated  |
| `/profile`             | Authenticated  |

If the user is **not logged in**, they are redirected to the `/login` page to ensure only authorized users can view and manage bills.

---

## 🧭 Pages Overview

| Route              | Description                                  |
|--------------------|----------------------------------------------|
| `/`                | Homepage with hero, slider, and bill types   |
| `/login`           | Firebase email login                         |
| `/register`        | Firebase email registration                  |
| `/bills`           | Browse all bills (protected)                 |
| `/bill-details/:id`| Bill details + payment form (protected)      |
| `/profile`         | User profile page (protected)                |
| `*`                | Custom 404 - Not Found page                  |

---

## 🛠 Installation & Running Locally

### 📥 Clone the Repository
```bash
git clone https://github.com/Hira703/WinterPay
cd utility-bill-app
```
📦 Install Dependencies
```bash
npm install
```
###🧪 Environment Setup
Create a .env file in the root and add your Firebase credentials:

```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```
###▶️ Start the Development Server
```bash
npm run dev
```
📁 Project Structure
```bash
src/
├── assets/           # Logos, images, etc.
├── components/       # UI components (Navbar, BillCard, etc.)
├── data/             # JSON files for bills & providers
├── layout/           # Shared layout (Navbar, Footer)
├── pages/            # Route components (Home, Login, etc.)
├── routes/           # Route definitions and protection
├── utils/            # Helpers like auth/localStorage
├── App.jsx           # Main App component
└── main.jsx          # React entry point
```
##🧑‍💻 Developer
Built with ❤️ by Sonia Akter Hira

📧 Email: soniahira48@gmail.com

##🙏 Acknowledgements
🔗 EkPay Bangladesh – UI inspiration

🧩 Tailwind CSS – Fast and flexible styling

🔐 Firebase – Authentication service

🖼 SwiperJS – Carousel integration

🎨 DaisyUI – Easy Tailwind UI components