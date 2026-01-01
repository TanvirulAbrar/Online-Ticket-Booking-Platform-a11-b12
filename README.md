# 🎫 Ticket Booking Web Application

## 📄 Project Description
A full-stack ticket booking platform where users can browse and request tickets, vendors manage ticket listings and booking requests, and admins oversee the entire system with revenue insights and analytics dashboards.  
The application is built with role-based access control to ensure secure and organized workflows.

🌍 **Live Project:**  
🔗 https://ticketzone-a11-b12-tan12345.netlify.app/

---

## ✨ Core Features

### 👤 User
- Register & login
- Browse available tickets
- Search tickets by **From → To** location
- Request ticket bookings
- View booking status:
  - Requested
  - Approved
  - Rejected
- Manage profile information

### 🧑‍💼 Vendor
- Add tickets with:
  - From location
  - To location
  - Price
  - Available quantity
  - Optional perks
- View booking requests
- Approve or reject bookings
- Track ticket status from vendor dashboard

### 🛡️ Admin
- View all users, vendors, and tickets
- Approve or block vendors
- Monitor platform performance
- Revenue overview dashboard:
  - Total revenue
  - Total tickets sold
  - Total tickets added
- Interactive analytics using charts

---

## 📊 Dashboard & Analytics
- Revenue data visualization using:
  - Pie charts
  - Radial bar charts
- Real-time data fetched from backend APIs
- Clear UI indicators for system status

---

## 🧾 Ticket Booking Flow
- User submits booking → **Requested**
- Vendor reviews request:
  - Approves → **Approved**
  - Rejects → **Rejected**

---
## 💱 Payment method
- User can pay with stripe.

---

## 💱 Currency 
- All ticket prices and revenue values are calculated and displayed in **Bangladeshi Taka (BDT)**.

---

## 🛠️ Technologies Used

### Frontend
- React
- React Router
- Tailwind CSS
- Recharts
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Firebase Authentication

---

## 📦 Main Dependencies
- react
- react-router-dom
- axios
- recharts
- firebase
- express
- mongoose
- cors
- dotenv

---

## 🔐 Authentication & Authorization
- Role-based authentication:
  - User
  - Vendor
  - Admin
- Protected routes
- Secure API endpoints

---

## 🚀 How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/TanvirulAbrar/Online-Ticket-Booking-Platform-a11-b12.git
   
2. Install dependencies:
   ```bash
   npm install

3. Create a .env file and add:

   Firebase configuration keys


4. Start the development server:
   ```bash
   npm run dev
## 🖥️ Server Side – Run Locally

 1. Clone the server repository
      ```bash
      git clone <SERVER_REPOSITORY_URL>

2. Install server dependencies
   ```bash
   npm install
   
3. Create environment variables
   Create a .env file in the server root and add the following variables:
   MONGODB_URI=your_mongodb_connection_string
   FIREBASE_API_KEY=your_firebase_api_key
   URI=MongoDB connection URI
   IMGBB_API_KEY=your_imgbb_api_key
   Adjust keys according to your project needs.

4. Start the server with nodemon (recommended for development)
   ```bash
   node index.js
   
Make sure you have nodemon installed globally or as a dev dependency.

5. copy paste the url to browser
   ```bash
   http://localhost:3000

You should see a success message or a JSON response from your API.

6. 🔗 Connect Frontend with Backend
   Make sure your frontend API URLs point to the local server during development, e.g.:
   ```bash
   http://localhost:3000/

## ⚠️ Notes
   Use MongoDB Atlas or local MongoDB for your database.

   Never commit your .env file to public repositories.

   Ensure CORS is enabled on the backend for your frontend origin.



## 📸 Screenshot

   Not added yet.
