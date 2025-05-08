💡 Utility Bill Payment Web App
A modern, responsive utility bill payment platform built using React + Vite. Users can securely log in, view bills by category, and complete payments for electricity, gas, water, internet, and more. Inspired by ekpay.gov.bd.

🌐 Live Site
🔗 https://stirring-cascaron-0898bd.netlify.app/




🚀 Features
🔐 Firebase Authentication – Secure login/register with email and password

🧾 Bill Management – Pay Electricity, Gas, Water, Internet, Credit Cards, and more

🗂 JSON-Based Bill Data – Dynamic rendering of bill types and providers from JSON files

📱 Responsive Design – Mobile-first layout with Tailwind CSS & DaisyUI

🖼 SwiperJS Slider – Animated logo carousel on the homepage for visual appeal

🛡 Protected Routes – Only authenticated users can access bill-related pages and user profile

📄 User Profile Page – View and manage account info like name, email, and photo

📦 Tech Stack
Tech	Purpose
React + Vite	Frontend & development environment
Tailwind CSS	Utility-first styling
DaisyUI	UI components with Tailwind integration
React Router	Routing & navigation
Firebase Auth	User authentication with secure login
SwiperJS	Carousel for displaying organization logos
JSON Data	Simulated backend for bill categories

🔑 Protected Routes
Pages like /bills, /bill-details/:id, and /profile are protected. If the user is not logged in, they will be redirected to the login page. This ensures that only authorized users can view and manage their bills.

🧭 Pages Overview
Route	Description
/	Homepage with hero, slider, and bill categories
/login	Firebase email login
/register	Firebase email registration
/bills	View all bills (auth required)
/bill-details/:id	Detailed bill info + payment (auth required)
/profile	User profile (auth required)
/404	Custom 404 Not Found page

🛠 Installation & Running Locally
To get started with this project locally, follow the steps below:

Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/utility-bill-app.git
cd utility-bill-app
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file:
Ensure you have Firebase keys stored securely in your .env file to avoid exposing them publicly. Example:

ini
Copy
Edit
VITE_FIREBASE_API_KEY=your-firebase-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
VITE_FIREBASE_PROJECT_ID=your-firebase-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
VITE_FIREBASE_APP_ID=your-firebase-app-id
Start the development server:

bash
Copy
Edit
npm run dev
💻 Project Structure
graphql
Copy
Edit
src/
│
├── assets/             # Images, logos, etc.
├── components/         # Reusable UI components (Navbar, BillCard, etc.)
├── data/               # JSON files for bills & categories
├── layout/             # Layout files (Navbar, Footer, etc.)
├── pages/              # Page components for different routes
├── routes/             # Routing logic and protected routes
├── utils/              # Helper functions (e.g., authentication, localStorage)
├── App.jsx             # Main App wrapper
└── main.jsx            # React DOM render entry
🔑 GitHub Commits
Include at least 10 meaningful commits with descriptive messages. Commit frequently as you develop the app to keep track of changes.

📝 Design and Responsiveness
Responsiveness: This website is fully responsive, ensuring that it works seamlessly across mobile, tablet, and desktop devices.

Unique Design: The UI is inspired by EkPay, but with a modern and unique twist to suit the app’s purpose in the local context. The design encourages local support for utility payments.

🛠 Hosting
The app is hosted on Netlify. Visit the live site here.

📧 Contact
📧 Email: soniahira48@gmail.com

🙏 Acknowledgements

EkPay Bangladesh – Design inspiration

Tailwind CSS – For utility-first styling

Firebase Authentication – For user authentication

SwiperJS – For the carousel on the homepage

DaisyUI – For ready-to-use UI components

🧑‍💻 Developer

Developed by Sonia Akter Hira

