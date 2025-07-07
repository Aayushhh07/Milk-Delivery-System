# 🥛 Milk Delivery System

## 🚀 Overview
This is a **full-stack milk delivery system** where users can order milk and dairy products through a **subscription-based model**, inspired by [Country Delight](https://countrydelight.in/). The platform provides fresh dairy products directly from farms, ensuring purity and convenience.

## 🌟 Features
- **User Authentication** (Signup/Login with OTP verification via Email)
- **Subscription-Based Orders** (Daily/Weekly/Monthly plans)
- **Product Catalog** (Milk, Curd, Paneer, Cheese, Butter, etc.)
- **Cart & Checkout** (Seamless ordering process)
- **Delivery Management** (Track & manage deliveries)
- **Admin Dashboard** (Manage users, products, and subscriptions)
- **Secure Payments** (Online transactions integration)

## 🛠️ Tech Stack
### **Frontend** (React + Tailwind CSS)
- React.js (Component-based UI)
- Tailwind CSS (Custom Styling)
- React Router (Navigation)

### **Backend** (Node.js + Express)
- Node.js (Server-side logic)
- Express.js (API development)
- JWT Authentication (Secure user login)

### **Database** (MongoDB)
- MongoDB (User, Product, and Subscription data)
- Mongoose (Schema modeling)

## 🔧 Installation & Setup
1. **Clone the Repository**
   ```bash
   git clone https://github.com/Aayushhh07/Milk-Delivery-System.git
   cd Milk-Delivery-System
   ```

2. **Backend Setup**
   ```bash
   cd Backend
   npm install
   npm start
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. **Environment Variables**
   Create a `.env` file in the backend directory and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   SMTP_EMAIL=your_smtp_email
   SMTP_PASSWORD=your_smtp_password
   ```

## 🚀 Deployment
- **Frontend:** Vercel
- **Backend:** Render
- **Database:** MongoDB Atlas


## 🤝 Contributions
Contributions are welcome! Feel free to fork and submit pull requests.

## 📧 Contact
For any queries, reach out via email: **aayushvishwakarma93@gmail.com**

