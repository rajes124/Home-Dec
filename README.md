# 🍃 GreenNest – Indoor Plant Care & Store

🌐 **Live Website:** https://fascinating-torte-32ae71.netlify.app  
📁 **GitHub Repository:** https://github.com/rajes124/Home-Dec.git

---

## 🌱 Project Overview

**GreenNest** is a modern single-page web application designed for indoor plant lovers.  
The platform helps users explore indoor plants, learn plant care tips, and book expert consultations to create a healthier and greener living space.

This project is built with a calming UI, smooth navigation, and secure Firebase authentication while maintaining full SPA functionality.

---

## 🎯 Project Goals

- Build a responsive and visually appealing plant care platform
- Implement Firebase authentication (Login, Signup, Google Sign-In, Forgot Password)
- Fetch plant data from local JSON files
- Protect routes for plant details and user profile
- Ensure smooth SPA navigation without reload errors

---

## 🧩 Core Features

- Indoor plant listings with ratings and pricing
- Protected plant details page with consultation booking
- User authentication and profile management
- Real-time profile updates using Firebase `updateProfile()`
- Clean, minimalist, and nature-inspired UI design

---

## 🧭 Layout Structure

### 🔝 Navbar
- Logo: **GreenNest**
- Navigation Links:
  - Home
  - Plants
  - My Profile
- Conditional Rendering:
  - Logged in → User avatar with dropdown (Name + Logout)
  - Logged out → Login & Register buttons

### 🔻 Footer
- Quick Links: About, Contact, Privacy Policy
- Social Media Icons: Instagram, Facebook, Pinterest
- Copyright:
  - © 2025 GreenNest. All rights reserved.

> Navbar and Footer remain visible on all routes.

---

## 📦 JSON Data Structure

Plant data is fetched from a local `plants.json` file containing at least 6 indoor plant objects.

Each plant includes:
- plantId
- plantName
- category
- price
- rating
- description
- image
- availableStock
- careLevel
- providerName

---

## 🏠 Home Page Sections

### 🌿 Hero Section
- Nature-inspired slider using Swiper.js / Framer Motion
- Plant-focused slogans and visuals

### ⭐ Top Rated Indoor Plants
- Cards displaying:
  - Image
  - Name
  - Price
  - Rating
  - “View Details” button

### 🌼 Plant Care Tips
- Tips on watering, sunlight, and fertilizing
- Static or JSON-based data

### 👩‍🌾 Meet Our Green Experts
- 3–4 experts with:
  - Image
  - Name
  - Specialization

### 🌱 Extra Section
- “Plant of the Week” / Eco decor inspiration section

---

## 🌿 Plant Details Page (Protected Route)

- Accessible only for logged-in users
- Redirects unauthenticated users to Login, then back
- Displays:
  - Large image
  - Plant name
  - Description
  - Price
  - Rating
  - Available stock

### 📅 Book Consultation
- Form fields:
  - Name
  - Email
- “Book Now” button
- On submit:
  - Shows success toast
  - Clears the form

---

## 🔐 Authentication System

### 🔑 Login Page
- Email & Password login
- Google Sign-In
- Forgot Password with Gmail redirect
- Error & success messages shown using toast
- Redirects user to intended route after login

### 📝 Signup Page
- Fields:
  - Name
  - Email
  - Photo URL
  - Password
- Password validation rules:
  - At least one uppercase letter
  - At least one lowercase letter
  - Minimum 6 characters
- Google Sign-Up supported
- Redirects to Home on success

### 👁 Password Toggle
- Show/Hide password feature on Login & Signup pages

---

## 👤 My Profile Page (Protected Route)

- Displays:
  - User Name
  - Email
  - Profile Photo
- “Update Profile” button
- Updates displayName and photoURL using Firebase `updateProfile()`

---

## 🎨 UI & UX Highlights

- Minimalist and calming color palette
- Consistent heading styles and spacing
- Equal-height cards with grid layout
- Responsive design for mobile, tablet, and desktop
- Smooth animations and transitions

---

## 🛠 Technology Stack

### Frontend
- React.js
- JavaScript (ES6+)
- Tailwind CSS
- HTML5 & CSS3

### Authentication & Tools
- Firebase Authentication
- React Router DOM
- Toast Notifications

### Hosting
- Client-side hosted on **Netlify**

---

## ✅ Assignment Compliance Checklist

- SPA navigation without reload errors
- Protected routes with redirect handling
- Firebase authentication fully implemented
- JSON-based data fetching
- Password validation rules applied
- No default alert used (toast notifications only)
- Responsive design across all devices

---

## 👨‍💻 Developer Info

👨‍💻 Author

Anonto Rishi
MERN Stack Developer
📍 Sylhet, Moulvibazar, Bangladesh
📧 rajesray307@gmail.com

📞 Phone: 01407539879
