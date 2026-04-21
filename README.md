<b><h1>🌱 SustainaBite - Saving food, serving hope</h1></b>
SustainaBite is a full-stack MERN application designed to reduce food waste and promote sustainability. The platform enables users to donate leftover food, explore leftover recipes, purchase eco-friendly fertilizers, write blogs, and more - all while earning and spending reward coins within the ecosystem.

<b><h2>✨ Features</h2></b>
🥘 Food Donation – Donate leftover vegetarian food with pickup address and details.</br>
🚚 Pickup Requests – Safe & timely pickup system with donation tracking.</br>
🌿 Fertilizer Purchase – Buy organic fertilizers using coins or currency.</br>
📝 Blogs & Recipes – Create, edit, delete, and explore blogs & recipes.</br>
⭐ Engagement – Blogs support likes (stars), views, and filtering.</br>
👤 Authentication – JWT-based login/signup for secure access.</br>
📍 Dashboard – Unified access to donations, pickups, blogs, fertilizers, and recipes.</br>
🎁 Reward System – Earn coins for donations, use them to buy fertilizers.

<b><h2>🛠 Tech Stack</h2></b>
<b><h3>Frontend</h3></b>
⚛️ React 19 (Vite for build & dev server)</br>
🌐 React Router v7</br>
🎨 TailwindCSS for styling</br>
📦 Redux Toolkit for state management</br>
🎭 FontAwesome icons</br>
📝 Axios for API requests

<b><h3>Backend</h3></b>
🚀 Express.js</br>
🍃 MongoDB with Mongoose</br>
🔑 JWT (JSON Web Tokens) for authentication</br>
🔒 bcrypt for password hashing</br>
☁️ Cloudinary + Multer for media handling</br>
📩 Nodemailer for emails</br>
🔧 dotenv for environment variables

<b><h2>🌐 Live Demo</h2></b>
👉 <a href="https://sustaina-bite.vercel.app/" target="_blank">Click here</a> to visit the live website.

<b><h2>📂 Project Structure</h2></b>
SustainaBite/</br>
│── frontend/  
│── backend/   

<b><h2>⚙️ Installation & Setup</h2></b>
<b><h3>Prerequisites</h3></b>
Node.js (>= 18)</br>
MongoDB (local or Atlas)

<b><h3>1️⃣ Clone the Repository</h3></b>
git clone https://github.com/your-username/sustainabite.git </br>
cd sustainabite

<b><h3>2️⃣ Setup Backend</h3></b>
cd backend</br>
npm install
<b><h4>Create a .env file inside backend/ with:</h4></b>
PORT=3000</br>
MONGO_URI=your_mongodb_connection_string</br>
JWT_SECRET=your_jwt_secret</br>
CLOUDINARY_CLOUD_NAME=your_cloud_name</br>
CLOUDINARY_API_KEY=your_api_key</br>
CLOUDINARY_API_SECRET=your_api_secret</br>
OPENROUTER_API_KEY=your_api_key</br>
EMAIL_USER=your_email@example.com</br>
EMAIL_PASS=your_email_password
<b><h4>Run backend:</h4></b>
npm run dev

<b><h3>3️⃣ Setup Frontend</h3></b>
cd frontend</br>
npm install</br>
npm run dev</br>
The frontend runs on http://localhost:5173 and backend on http://localhost:3000

<b><h2>🤝 Contributing</h2></b>
Contributions are welcome! Please open an issue or submit a pull request.
