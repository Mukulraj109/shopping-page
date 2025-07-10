# 🛍️ Whatbytes - E-commerce Frontend Assignment

This is a responsive e-commerce frontend built with **Next.js 14**, **TypeScript**, and **Tailwind CSS** as part of the Whatbytes Frontend Assignment.

---

## 📺 Live Demo

👉 [View Deployed Site on Vercel](https://shopping-page-jet.vercel.app/)

---

## 📂 Project Structure

components/
└── ui/
├── Header.tsx
├── ProductCard.tsx
├── ProductGrid.tsx
└── Sidebar.tsx
contexts/
└── CartContext.tsx
data/
└── products.ts
hooks/
└── use-toast.ts
lib/
└── utils.ts
types/
└── product.ts


---

## ✅ Features

### 🏠 Home Page (`/`)
- 🔍 Centered search bar with real-time filtering
- 🧺 Cart icon with dynamic badge
- 📂 Sidebar with:
  - ✅ Category checkboxes
  - 💸 Price range slider
- 🛍️ Product grid:
  - 📷 Image
  - 🏷️ Title & Price
  - ➕ Add to Cart
  - ⭐ (Optional) Rating

### 📄 Product Detail Page (`/product/[id]`)
- 🖼️ Product image display
- ℹ️ Title, description, category
- 🔢 Quantity selector
- ➕ Add to Cart
- 💬 Reviews (optional)

### 🛒 Cart Page (`/cart`)
- 🧾 Product list with quantity controls
- ❌ Remove product option
- 💰 Price summary

---

## ⚙️ Core Logic Implemented

- ✅ Category and price filtering
- 🔍 Search string matching
- 🔗 URL-based filtering (`?category=electronics&price=100-500`)
- 🧠 Cart state via `React Context` (`contexts/CartContext.tsx`)
- 💾 Persist cart in `localStorage`
- 🔀 Dynamic routing (`pages/product/[id].tsx`)
- 😕 Show "No products found" message conditionally

---

## 🧑‍💻 Tech Stack

| Technology     | Purpose                           |
|----------------|-----------------------------------|
| **Next.js**    | App framework                     |
| **TypeScript** | Type safety                       |
| **Tailwind CSS** | Styling utility                  |
| **React Context** | Global cart state              |
| **Lucide-react** | Icons (Cart, Search, etc.)       |

---

## 📦 Installation

```bash
# Clone the repository
https://github.com/Mukulraj109/shopping-page.git
cd shopping-page

# Install dependencies
npm install

# Start development server
npm run dev

🚀 Deployment
Hosted on Vercel

Includes .vercel compatible structure


📝 License
This project is intended solely for academic and assessment use as per Whatbytes’ guidelines.


