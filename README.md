# 🧑‍💻 User Dashboard (React + Vite)

A responsive and modern **User Dashboard** built with **React, Vite, React Router DOm, TailwindnCss, featuring API integration, search, filter, and detailed user view.

---

## 🚀 Setup Instructions

1. **Clone the Repository**
  copy the repo link from github
   ```bash
   git clone https://github.com/GauravRajpt/user-DashBoard-aiwati-project.git
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the App**
   ```bash
   npm run dev
   ```

4. Open your browser and go to the URL shown in the terminal (usually `http://localhost:5173`).

---

## 🧱 Tech Stack
- **React (Vite)** – Frontend Framework
- **React Router DOM** – Routing and navigation
- **Tailwind CSS** – Modern styling
- **Context API / LocalStorage** – State management

---

## ✨ Features

### 🖥️ Dashboard Page
- Fetches and displays users from the public API: [`https://jsonplaceholder.typicode.com/users`](https://jsonplaceholder.typicode.com/users)
- Shows each user's **Name**, **Email**, and **Company Name**.
- Includes **“View Details”** button for more info.

### 🔍 Search & Filter
- **Search Bar**: Filter users by name or email.
- **Company Filter**: Dropdown with unique company names.

### 📄 User Details Page
- Displays full user details (Name, Email, Phone, Website, Address, Company).
- Includes **“Back to Dashboard”** button.

### ⚙️ Bonus Features
- **Loading Spinner** while fetching data.
- **Error Handling** for failed requests.
- **LocalStorage** support to remember last visited user.
- Fully **Responsive** UI.

---

## 🕒 Time Taken
**Approximate Duration:** 2 Days  
- **Day 1:** UI, routing, and state setup  
- **Day 2:** API integration, search/filter, and final polish
