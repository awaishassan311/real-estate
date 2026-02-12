## 🌟 Overview
**Real Estate** is a **Full-Stack** real estate website built with **React, Next.js, TypeScript**, and a **Node.js (Express) backend**. The platform allows users to browse, list, and manage properties seamlessly.

## 🎯 Features
- 🔥 **Modern UI/UX** with smooth animations
- 🏠 **Property listing & management**
- 🏠 **BUY & Sell Property listing **
- 🔒 **User authentication** (Signup/Login)
- 📊 **Admin Dashboard** for managing users & listings
- 📡 **Backend API** built with Express & Sequelize
- 🎨 **Fully Responsive** on all devices

  ### Backend:
- **Authentication & Authorization** (JWT-based login/signup)
- **Profile Management** (Edit user details)
- **Real Estate Listings** (Add, update, delete properties)
- **Buying & Selling API**
- **Database Management with PostgreSQL & Sequelize**
  

## 🛠️ Tech Stack

### 🌐 Frontend
- **React.js** (Framework: Next.js)
- **TypeScript**
- **Tailwind CSS & CSS** (for styling)
- **SCSS**
- **Framer Motion** (for animations)
- **Three.js**
- **Axios** (for API calls)

### 🖥️ Backend (real-estate-backend)
- **Node.js** (Runtime)
- **Express.js** (Framework)
- **Sequelize** (ORM for PostgreSQL/MySQL)
- **JWT (JSON Web Token)** (for authentication)
- **bcrypt.js** (for password hashing)
- **Multer** (for handling file uploads)

## 📂 Project Structure
```
Real Estate-RealEstate-Fullstack/Real Estate-RealEstate
├── Real Estate-RealEstate/  # React + Next.js frontend
│   ├── .next/
│   ├── node_modules/
│   ├── public/
│   └── src/
|       ├── app/
│       ├── components/
│       ├── data/
|       ├── hooks/
│       ├── layouts/
│       ├── models/
│       ├── redux/
│       ├── styles/
│       ├── types/
│       └── utils/
│
├── real-estate-backend/  # Node.js Express.js backend
│   ├── config/
│   ├── migrations/
│   ├── models/
│   ├── node_modules/
│   ├── seeders/
│   └── src/
|       ├── config/
│       ├── controllers/
│       ├── middleware/
|       ├── models/
│       ├── routes/
│       ├── models/
│       ├── app.ts
│       ├── custom.d.ts
│       └── server.ts
│
└── README.md

```
## ⚙️ Installation & Setup

### 1️⃣ Install Node.js and npm
Ensure you have **Node.js** and **npm** installed. If not, install it from:
👉 [Download Node.js](https://nodejs.org/)

Check installation:
```sh
node -v
npm -v
```

### 2️⃣ Install PostgreSQL Database
Download and install **PostgreSQL**:
👉 [Download PostgreSQL](https://www.postgresql.org/download/)

After installation, create a new database:
```sh
psql -U postgres
CREATE DATABASE real-estate-backend;
```

### 3️⃣ Clone the Repository
```sh
git clone https://github.com/awaishassan311/real-estate.git
cd real-estate
```

### 2️⃣ Install dependencies:
```sh
# Install frontend dependencies
cd real-estate
npm install

# Install backend dependencies
cd ../real-estate-backend
npm install
```

### 3️⃣ Setup environment variables:
**Frontend (`.env.local`):**
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

**Backend (`.env`):**
```
PORT=5000
DATABASE_URL=postgres://user:password@localhost:5432/realestate
JWT_SECRET=your_jwt_secret
```

### 4️⃣ Run the project:
```sh
# Start backend server
cd real-estate-backend
npm run dev

# Start frontend
cd ../Real Estate-frontend

npx ts-node src/server.ts
or
npm run dev

```
## 🛠️ API Endpoints

| Method | Endpoint            | Description                 |
|--------|---------------------|-----------------------------|
| POST   | /api/signup         | User Signup                |
| POST   | /api/login          | User Login                 |
| GET    | /api/profile        | Get User Profile           |
| PUT    | /api/profile/edit   | Edit User Profile          |
| POST   | /api/property/add   | Add New Property           |
| GET    | /api/property/list  | List Properties            |
| POST   | /api/property/buy   | Buy Property               |
| DELETE | /api/property/sell  | Sell Property              |

#### 📌 Example API Request (Add Property):
```sh
curl -X POST "http://localhost:5000/api/properties" \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer YOUR_TOKEN" \
     -d '{"title":"Luxury Villa", "price":250000, "location":"Cairo", "description":"Spacious 3-bedroom villa"}'

```


## 📡 API Endpoints

### 🏠 Authentication (Auth Routes)
| Method | Endpoint       | Description           |
|--------|---------------|-----------------------|
| POST   | /signup       | Register a new user  |
| POST   | /login        | Authenticate user    |

### 📄 Profile Routes
| Method | Endpoint     | Description                |
|--------|-------------|----------------------------|
| GET    | /profile    | Fetch user profile        |
| PUT    | /profile    | Update user profile       |

### 🏠 Properties Routes
| Method | Endpoint        | Description                |
|--------|----------------|----------------------------|
| GET    | /properties    | Fetch all properties      |
| POST   | /properties    | Add a new property        |
| PUT    | /properties/:id| Update property details   |
| DELETE | /properties/:id| Delete a property        |

---

## 💡 Example API Request (Update Profile)
```js
fetch('http://localhost:5000/api/profile', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer YOUR_TOKEN`
    },
    body: JSON.stringify({
        firstName: "John",
        lastName: "Doe",
        phoneNumber: "123456789",
        about: "Real estate expert."
    })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));
```

---

## ✨ Contributing
Feel free to fork the repository and create a pull request! 😊

## 📜 License
This project is licensed under the **MIT License**.

🚀 **  Real Estate** | Built with ❤️ by [Awais Hassan](https://github.com/awaishassan311)




