# PDuttaClinic - SaaS Healthcare Platform

![PDuttaClinic Banner](https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200&h=400)

> A premium, multi-specialty clinic management system built with **React 18, TypeScript, and Firebase**. Features a modern "Blue Theme" UI, secure OTP authentication, and a real-time provider dashboard.

[![React](https://img.shields.io/badge/React-18.2-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-Auth%20%26%20DB-orange?logo=firebase)](https://firebase.google.com/)

---

## 🚀 Key Features

### 🏥 For Patients (Public)
* **Professional Landing Page**: Responsive hero section, doctor carousel, and specialized treatment lists.
* **Advanced Search**: Filter doctors by specialty, experience, and availability.
* **Doctor Profiles**: Detailed bio, education history, languages spoken, and success rates.
* **Smart Booking System**: 
    * Sticky "Book Appointment" card.
    * Auto-fills returning user data (Local Storage).
    * **OTP Verification**: Secure login via Firebase Phone Auth before confirming slots.

### 👨‍⚕️ For Providers (Admin)
* **Secure Dashboard**: Protected route for doctors/clinic admins.
* **Analytics**: Real-time tracking of total bookings, revenue, and patient statistics.
* **Appointment Manager**: View upcoming schedules and patient details.

---

## 🛠️ Tech Stack

* **Frontend**: React (Vite), TypeScript
* **Styling**: Tailwind CSS, Lucide React (Icons), clsx
* **State Management**: Zustand (with Persistence)
* **Backend & Auth**: Firebase v9 (Authentication, Firestore)
* **Routing**: React Router DOM v6

---

## 📸 Screenshots

| Home Page | Doctor Profile |
|:---:|:---:|
| <img src="https://via.placeholder.com/400x200?text=Home+Page+UI" width="400" /> | <img src="https://via.placeholder.com/400x200?text=Doctor+Profile" width="400" /> |

| Booking & OTP | Provider Dashboard |
|:---:|:---:|
| <img src="https://via.placeholder.com/400x200?text=Booking+Flow" width="400" /> | <img src="https://via.placeholder.com/400x200?text=Admin+Dashboard" width="400" /> |

---

## ⚡ Getting Started

Follow these steps to set up the project locally.

### 1. Clone the Repository
```bash
git clone [https://github.com/PriyabrataDutta/ClinicAppointment-SAAS.git](https://github.com/PriyabrataDutta/ClinicAppointment-SAAS.git)
cd ClinicAppointment-SAAS