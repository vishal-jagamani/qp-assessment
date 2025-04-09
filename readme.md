# 🛒 Grocery Booking API

This is a RESTful Grocery Booking API built with **Node.js**, **TypeScript**, and **PostgreSQL**. It supports two roles: **Admin** and **User**, offering features like inventory management and multi-item order booking.


## 📦 Tech Stack

- **Backend:** Node.js, Express, TypeScript
- **Database:** PostgreSQL (hosted on Supabase)
- **Deployment:** Render (Free tier)
- **Other Tools:** Supabase client SDK, Docker (optional), ESLint + Prettier


## 🚀 Features
### 👤 User

- View available groceries
- Place an order with multiple grocery items in a single request

### 🔐 Admin

- Add, update, delete grocery items
- Update stock quantity
- View all grocery items


## 🧪 Sample API Payloads
### Create Order (User)

```http
POST /orders
Headers:
  x-user-id: 1

Body:
{
  "items": [
    { "grocery_item_id": 1, "quantity": 2 },
    { "grocery_item_id": 2, "quantity": 1 }
  ]
}
```

### Add Grocery (Admin)
```http
POST /admin/groceries
Body:
{
  "name": "Tomatoes",
  "price": 25,
  "quantity": 100
}

```


## 🛠️ Setup Locally
### 1. Clone the Repo

```bash
git clone https://github.com/vishal-jagamani/qp-assessment.git
cd qp-assessment
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set up `.env`
```env
PORT=8080
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_key
```
💡 You can find these credentials from your Supabase dashboard.


## 🐳 Docker (Optional)
### Build and run with Docker:

```bash
docker build -t grocery-api .
docker run -p 3000:3000 grocery-api
```


## 📁 Folder Structure

```css
src/
├── controllers/
├── routes/
├── services/
├── models/
├── middlewares/
├── types/
├── utils/
└── app.ts
```


## 🔐 Auth
- For this test, basic auth is simulated using the `x-user-id` header in requests.
- Admin routes can be protected via a simple header-based middleware.


## 📌 Deployment Details

### 🔹 Backend — Render (Free Tier)
- Free instance sleeps after 15 minutes of inactivity
- Cold start takes up to 50 sec – 1 min

### 🔹 Database — Supabase
- PostgreSQL instance with RESTful access
- Easy Supabase functions for CRUD ops


## 👨‍💻 Author
**Vishal Jagamani**  
[Portfolio](https://vishaljagamani.vercel.app) |
[GitHub](https://github.com/vishal-jagamani) | [LinkedIn](https://www.linkedin.com/in/vishaljagamani)
