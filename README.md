# Asset Management System (MERN)

A full-stack **Asset Management System** built using the **MERN stack** to manage organizational assets such as laptops, phones, software licenses, and accessories.

---

## 👥 Team Name
**HiveMind**

---

## 🚀 Tech Stack

### Frontend
- React.js
- Axios
- React Router

### Backend
- Node.js
- Express.js

### Database
- MongoDB (Mongoose)

---

## 🎯 Features

### Admin
- Add and manage assets
- Create employees and interns
- Assign assets to employees
- View asset statistics (total, available, assigned)
- Dynamic dashboard cards

### Employee / Intern
- Login using Employee ID
- View assigned assets only

---

## 🧩 System Architecture


---

## 🗄️ Database Models

### User
- employeeId (unique)
- name
- role (employee / intern)

### Asset
- assetId
- name
- type
- status (Available / Assigned)
- condition (Good / Repair / Damaged)

### Assignment
- employeeId
- assetId
- assetType
- assignedAt
- duration

---

## 🔄 Application Flow

1. Admin adds assets and employees
2. Admin assigns assets to employees
3. Asset status updates in database
4. Employee logs in using Employee ID
5. Employee dashboard displays assigned assets

---

## 📊 Key Highlights

- Fully database-driven (no static data)
- Persistent storage using MongoDB
- Clean separation of frontend and backend
- Scalable and industry-relevant design

---

## 🔮 Future Enhancements

- JWT-based authentication
- Asset return and reassignment
- Assignment history tracking
- Role-based access control
- Cloud deployment

---

## 📁 Project Structure


---

## 📌 How to Run

### Backend
```bash
cd backend
npm install
node server.js

cd frontend
npm install
npm run dev


---
```
## ✅ Step 7: Push README to GitHub

```bash
git add README.md
git commit -m "Add README documentation"
git push
