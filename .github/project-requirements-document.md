Got it! Here’s a refined PRD that keeps the **Database Markup Language (DBML)**, **Packages**, **Tech Stack**, and expands on **Pages and Features** for a more detailed outline.

---

# Product Requirements Document (PRD) - Audiophile E-Commerce Website

---

## 1. Introduction

The Audiophile E-Commerce Website will provide a premium shopping experience for high-end audio products. The project involves building a responsive, multi-page e-commerce website using provided designs to deliver an immersive user experience.

### Tech Stack

The website will leverage the following technologies:

- **Next.js**: For server-side rendering and routing.
- **Tailwind CSS**: For utility-first, responsive styling.
- **tRPC**: For type-safe API communication.
- **Drizzle ORM**: For efficient database operations.
- **NextAuth**: For secure authentication.
- **PostgreSQL**: As the primary relational database.
- **Shadcn UI Components**: For a cohesive UI framework.

---

## 2. Goals

### Business Goals

- Provide a high-end, seamless shopping experience that enhances customer engagement and brand perception.
- Encourage repeat purchases by simplifying product discovery, checkout, and follow-up interactions.
- Create an optimized checkout process to improve conversion rates.

### User Goals

- Enable users to explore products, view detailed specifications, and make purchases seamlessly.
- Support device adaptability, providing a streamlined experience across mobile, tablet, and desktop.
- Simplify the cart and checkout experience, with clear visual feedback, navigation, and order confirmation.

---

## 3. Functional Requirements

### Pages and Features

#### 1. **Homepage**

- **Hero Section**: Display a featured product with an eye-catching image and CTA (e.g., “Shop Now”).
- **Category Navigation**: Provide clear navigation to key product categories (Headphones, Speakers, Earphones).
- **Featured Products**: Showcase popular or new products with high-quality images, brief descriptions, and “See Product” buttons.
- **About Us**: Introduce Audiophile with brand messaging, establishing trust and credibility with users.

#### 2. **Category Pages** (Headphones, Speakers, Earphones)

- **Product Listings**: Display relevant products in each category, including images, descriptions, prices, and “See Product” buttons.
- **Alternate Layout**: Use varying layouts for product information to create a visually appealing page, avoiding repetitive design.
- **Responsive Grid**: Use a responsive grid layout to accommodate different screen sizes and orientations.

#### 3. **Product Detail Pages**

- **Product Overview**: Display a large product image, name, price, and detailed description.
- **Quantity Selector**: Include a quantity selector to allow users to add multiple items to the cart.
- **Features Section**: List product features and specifications clearly.
- **In the Box**: Display items included with the product in a styled list format.
- **Image Gallery**: Showcase additional images from different angles or settings (optional carousel or lightbox).
- **Related Products**: Display similar or complementary products that might interest the user.

#### 4. **Cart Page**

- **Cart Overview**: Display selected items with images, names, prices, and quantity controls.
- **Update Options**: Allow users to edit item quantities, remove items, and see real-time price updates.
- **Summary Section**: Show the subtotal, shipping costs, VAT, and the total price.
- **Proceed to Checkout**: Prominent button for users to proceed to the checkout page.

#### 5. **Checkout Page**

- **Billing Details**: Collect basic information (name, email, phone number).
- **Shipping Info**: Collect shipping address details (street, city, country, ZIP).
- **Payment Details**: Include a selection for payment method (Cash on Delivery or Credit Card).
- **Credit Card Form**: Display card number, expiry date, and CVV fields if credit card is selected.
- **Order Summary**: Display a final order summary with product details, shipping, VAT, and total.
- **Form Validation**: Real-time validation to ensure all fields are correctly filled before submission.

#### 6. **Order Confirmation Modal**

- **Confirmation Message**: Thank the user for their purchase with an order summary.
- **Order Summary**: Display a list of purchased items, including product details and total amount charged.
- **Actions**: Option to return to the homepage or continue shopping.

#### Additional Pages (Optional):

- **User Authentication**: Login, registration, and password recovery.
- **User Profile**: Account page where users can view and edit personal information, track order history, and update preferences.
- **Static Pages**: About Us, Contact, FAQ, and Terms of Service.

### Shared Components

1. **Header**:

   - Logo that links to the homepage.
   - Navigation links for each category.
   - Cart icon with an item count indicator.
   - Mobile menu with a hamburger icon on smaller screens.

2. **Footer**:

   - Company information and links to policy pages.
   - Social media icons for external linking.

3. **UI Elements**:
   - Buttons, inputs, modals, form components for consistency.
   - Use Shadcn UI for coherent design and Tailwind for responsive styling.

---

## 4. Technical Requirements

### State Management

- Use **React Context** or **Zustand** for managing the cart state and user session.
- Cart state should persist across page refreshes using `localStorage`.

### Database Structure (DBML)

Here is the proposed **PostgreSQL DBML** for the Audiophile E-Commerce Website:

```markdown
// User-Related Tables
Table users {
id varchar [pk] // OAuth provider's user ID
name varchar
email varchar [not null, unique]
image varchar
created_at timestamptz [default: `now()`]
updated_at timestamptz [default: `now()`]
indexes {
email
}
}

Table sessions {
id varchar [pk] // Session token as ID
user_id varchar [not null]
expires timestamptz [not null]
created_at timestamptz [default: `now()`]
indexes {
expires
}
}

Ref: sessions.user_id > users.id

// Product-Related Tables
Table categories {
id serial [pk]
name varchar [not null, unique]
}

Table products {
id serial [pk]
slug varchar [not null, unique]
name varchar [not null]
category_id integer
price numeric(10,2) [not null]
description text
features text
is_new boolean [default: false]
created_at timestamptz [default: `now()`]
updated_at timestamptz [default: `now()`]
indexes {
slug
}
}

Ref: products.category_id > categories.id

Table product_images {
id serial [pk]
product_id integer [not null]
url varchar [not null]
image_type varchar(50) // 'mobile', 'tablet', 'desktop'
usage_type varchar(50) // 'main', 'gallery', 'category'
}

Ref: product_images.product_id > products.id [delete: cascade]

Table product_includes {
id serial [pk]
product_id integer [not null]
item varchar [not null]
quantity integer [not null]
}

Ref: product_includes.product_id > products.id [delete: cascade]

Table related_products {
product_id integer
related_product_id integer
indexes {
(product_id, related_product_id) [pk]
}
}

Ref: related_products.product_id > products.id [delete: cascade]
Ref: related_products.related_product_id > products.id

// Order-Related Tables
Table orders {
id serial [pk]
user_id varchar [not null]
total numeric(10,2) [not null]
shipping_fee numeric(10,2) [not null, default: 50]
vat numeric(10,2) [not null]
created_at timestamptz [default: `now()`]
}

Ref: orders.user_id > users.id

Table order_items {
id serial [pk]
order_id integer [not null]
product_id integer [not null]
quantity integer [not null]
price numeric(10,2) [not null]
}

Ref: order_items.order_id > orders.id [delete: cascade]
Ref: order_items.product_id > products.id

// Cart-Related Tables
Table carts {
id serial [pk]
user_id varchar [not null]
created_at timestamptz [default: `now()`]
updated_at timestamptz [default: `now()`]
}

Ref: carts.user_id > users.id

Table cart_items {
id serial [pk]
cart_id integer [not null]
product_id integer [not null]
quantity integer [not null]
}

Ref: cart_items.cart_id > carts.id [delete: cascade]
Ref: cart_items.product_id > products.id
```

### Relationships:

- **Users**: Can have multiple **orders**, **sessions**, and optionally a **cart**.
- **Products**: Belong to a **category**, can have multiple **images**, and have **related products**.
- **Orders**: Include multiple **order items**, each linked to a **product**.
- **Cart** (Optional): Linked to **users** and includes multiple **cart items**.

---

## 5. Additional Packages

The following additional npm packages are used for specific functionalities:

- \*\*`react-hook-form

`\*\*: For form handling and validation.

- **`zod`**: Type-safe schema validation with TypeScript support.
- **`axios`**: HTTP client for making API requests.
- **`clsx`**: Conditional utility for className strings.
- **`date-fns`**: JavaScript date utility library.
- **`zustand`**: Lightweight state management.
- **`lucide-react`**: SVG icons.
- **`tanstack router`**: Enhanced data fetching for React apps.

---

## 6. Implementation Steps

1. **Setup**: Initialize the repository, install dependencies, and configure Tailwind and NextAuth.
2. **Develop Components**: Build core UI components (header, footer, modals, etc.).
3. **Create Pages**: Implement main pages and test layout and functionality.
4. **Data Integration**: Fetch product data from `data.json` or PostgreSQL.
5. **Add Interactivity**: Manage cart state and form validation.
6. **Responsive Design**: Optimize layouts across devices.
7. **Testing & QA**: Verify usability, accessibility, and fix issues.
8. **Deployment**: Deploy using Vercel, Netlify, or GitHub Pages.

This refined PRD should provide clarity and a step-by-step approach to delivering a fully functional, user-friendly e-commerce experience for Audiophile. Let me know if there’s anything more to add!

## 7. Current folder strcture

```
.
├── .env.example
├── .eslintrc.cjs
├── .github
│   └── project-requirements-document.md
├── .gitignore
├── README.md
├── README_CHALLENGE.md
├── bun.lockb
├── components.json
├── data.json
├── drizzle.config.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── prettier.config.js
├── src
│   ├── app
│   │   ├── _components
│   │   │   └── post.tsx
│   │   ├── api
│   │   │   ├── auth
│   │   │   │   └── [...nextauth]
│   │   │   │       └── route.ts
│   │   │   └── trpc
│   │   │       └── [trpc]
│   │   │           └── route.ts
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   └── ui
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── select.tsx
│   │       └── sonner.tsx
│   ├── env.js
│   ├── lib
│   │   └── utils.ts
│   ├── server
│   │   ├── api
│   │   │   ├── root.ts
│   │   │   ├── routers
│   │   │   │   └── post.ts
│   │   │   └── trpc.ts
│   │   ├── auth
│   │   │   ├── config.ts
│   │   │   └── index.ts
│   │   └── db
│   │       ├── index.ts
│   │       └── schema.ts
│   ├── styles
│   │   └── globals.css
│   └── trpc
│       ├── query-client.ts
│       ├── react.tsx
│       └── server.ts
├── start-database.sh
├── tailwind.config.ts
└── tsconfig.json

20 directories, 41 files
```
