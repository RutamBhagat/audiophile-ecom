**Product Requirements Document for Audiophile E-commerce Website**

---

**1. Introduction**

The goal is to build a multi-page e-commerce website for Audiophile, selling high-end audio products. The website should closely match the provided designs and offer a seamless user experience across devices. The project utilizes Next.js, Tailwind CSS, tRPC, Drizzle ORM, NextAuth, PostgreSQL, and Shadcn UI components.

---

**2. Project Objectives**

- Create a responsive e-commerce website with multi-page functionality.
- Implement all required features as specified in the challenge.
- Ensure optimal layout and performance on various screen sizes.
- Utilize the provided images and data effectively in the project.

---

**3. Functional Requirements**

**3.1 Pages Needed**

- **Homepage**

  - Hero section with featured products.
  - Navigation to product categories.
  - Sections showcasing different products.

- **Category Pages**

  - **Headphones**
  - **Speakers**
  - **Earphones**
  - Each category page lists relevant products.

- **Product Detail Pages**

  - Detailed view of each product.
  - Images, descriptions, features, and included items.

- **Cart Page**

  - Overview of selected products.
  - Ability to edit quantities or remove items.

- **Checkout Page**

  - Form to collect user information and payment details.
  - Input validation and error handling.

- **Order Confirmation Modal**

  - Summary of the order.
  - Confirmation message.

- **Shared Components**
  - Header with navigation links and cart icon.
  - Footer with company information and social media links.

**3.2 Functionality Requirements**

- **Responsive Design**

  - Layout adjusts for mobile, tablet, and desktop.

- **Navigation**

  - Accessible from all pages.
  - Mobile menu for smaller screens.

- **Cart Management**

  - Add/remove products.
  - Edit product quantities.
  - Persistent state (bonus using `localStorage`).

- **Checkout Process**

  - Form fields for billing, shipping, and payment details.
  - Shipping adds $50 to the order total.
  - VAT calculated at 20% of product total (excluding shipping).
  - Form validation with feedback.

- **Order Confirmation**

  - Modal displaying order summary.
  - Confirmation of successful checkout.

- **Hover States**

  - Visual feedback on interactive elements.

- **Data Handling**
  - Use

data.json

for product information.

- **Accessibility**
  - Compliant with accessibility standards.

---

**4. Technical Requirements**

- **Frameworks & Libraries**

  - Next.js for server-side rendering and routing.
  - Tailwind CSS for styling.
  - tRPC for type-safe API communication.
  - Drizzle ORM for database interactions.
  - NextAuth for authentication.
  - Shadcn UI components for consistent UI.

- **Database**

  - PostgreSQL for storing user data and orders.

- **State Management**

  - Use React Context or a state management library for cart state.

- **Development Environment**
  - Linux machine with Visual Studio Code IDE.

---

**5. Steps to Build the Project**

**Step 2: Set Up the Development Environment**

- **Initialize Project**

  - Set up a new Next.js application using `create-next-app`.
  - Configure TypeScript support if not enabled.

- **Dependencies**

  - Use necessary packages:
    - `tailwindcss` for styling.
    - `@trpc/server` and `@trpc/client` for tRPC.
    - `drizzle-orm` for database interactions.
    - `next-auth` for authentication.
    - `@shadcn/ui` for UI components.
    - `react-hook-form` and `zod` for form handling and validation.
    - Any other utilities like `clsx` for conditional classNames from utils folder.

**Step 3: Organize Project Structure**

- **Folder Structure**

  - Create directories for components, pages, hooks, contexts, and utilities.
  - Organize components into reusable UI elements and page-specific components.

- **Assets**

  - Use all static images and assets in the public folder.

- Organize assets into subfolders corresponding to their usage.

**Step 4: Implement Routing**

- **Next.js File-based Routing**

  - Set up pages using Next.js conventions.
    - `pages/index.tsx` for the homepage.
    - `pages/category/[category].tsx` for category pages.
    - `pages/product/[slug].tsx` for product detail pages.
    - `pages/cart.tsx` for the cart page.
    - `pages/checkout.tsx` for the checkout page.
  - Implement dynamic routes for categories and products.

- **API Routes**
  - Create API routes under `pages/api` if necessary.
  - Set up tRPC endpoints for server-side data fetching.

**Step 5: Build Shared Components**

- **Header Component**

  - Logo linking to the homepage.
  - Navigation links to categories.
  - Cart icon with item count.
  - Mobile navigation menu with a hamburger icon.

- **Footer Component**

  - Company information.
  - Links to other pages and policies.
  - Social media icons and links.

- **UI Elements**

  - Buttons, inputs, modals, and form components.
  - Use Shadcn UI for consistent styling.

- **Product Components**
  - Product cards for listing.
  - Product detail components for displaying detailed information.

**Step 6: Develop Pages**

- **Homepage**

  - **Hero Section**
    - Feature a top product with an engaging image and a call-to-action button.
    - Responsive design ensuring the image and text are well-positioned on all devices.
  - **Category Sections**
    - Display categories with images and links to category pages.
    - Ensure accessibility with proper alt text and labels.
  - **Featured Products**
    - Highlight select products with images, brief descriptions, and 'See Product' buttons.
    - Use a grid or carousel layout for better user engagement.
  - **About Us**
    - Include a section with information about the company.
    - Use imagery and text to convey brand values.

- **Category Pages**
  - **Product Listings**
    - Fetch products based on category from

data.json

or database. - Display product images, names, brief descriptions, and 'See Product' buttons. - Alternate the layout of product information for visual interest.

- **Pagination or Filtering** (Optional)

  - Implement pagination if there are many products.
  - Allow users to filter or sort products.

- **Product Detail Pages**

  - **Product Overview**
    - High-resolution images suitable for different screen sizes.
    - Product name, price, detailed description, and 'Add to Cart' functionality.
    - Quantity selector for adding multiple items.
  - **Features Section**
    - Detailed product features and specifications.
    - Use proper formatting for readability.
  - **In the Box**
    - List included items with quantities.
    - Present as a styled list or table.
  - **Image Gallery**
    - Additional images showcasing different angles or uses of the product.
    - Implement a lightbox or carousel if necessary.
  - **Related Products**
    - Showcase other products the user might be interested in.
    - Include images and links to their product detail pages.

- **Cart Page**

  - **Cart Items**
    - List items with images, names, prices, quantities, and total price per item.
    - Ability to update quantities or remove items.
  - **Summary Section**
    - Display subtotal, shipping cost, VAT, and total price.
    - 'Continue to Checkout' button to proceed.

- **Checkout Page**

  - **Billing Details**
    - Form fields for name, email, phone number.
  - **Shipping Info**
    - Address fields including street, city, country, and ZIP code.
  - **Payment Details**
    - Payment method selection.
    - If 'Cash on Delivery', display additional instructions.
    - If 'Credit Card', display card number, expiry date, and CVV fields.
  - **Form Validation**
    - Use `react-hook-form` and `zod` for form handling and validation.
    - Show error messages and highlight invalid fields.

- **Order Confirmation Modal**

  - **Confirmation Message**
    - Thank the user for their purchase.
    - Brief summary of the order.
  - **Order Summary**
    - Display the first few items and indicate if more items are included.
    - Show the total amount charged.
  - **Actions**
    - 'Back to Home' button or option to view more products.

- **Additional Pages**
  - **Authentication Pages**
    - Login and registration pages if implementing user accounts.
    - Password reset functionality.
  - **User Profile** (Optional)
    - Allow users to view and edit their profile information.
    - Display past orders and order details.
  - **Static Pages**
    - About Us, Contact, FAQ, and Terms of Service pages.

**Step 7: Implement State Management**

- **Global State**

  - Use React Context or a library like Zustand for managing cart state.
  - Ensure state updates trigger re-renders where necessary.

- **Persisting Cart Data**
  - Implement persistence using `localStorage`.
  - On application load, initialize state from `localStorage`.
  - Subscribe to state changes to update `localStorage`.

**Step 8: Add Interactivity**

- **Hover and Active States**

  - Use Tailwind CSS pseudo-class variants for styling interactive states.
  - Ensure that hover states are accessible (e.g., also using focus states for keyboard navigation).

- **Form Interactions**

  - Provide instant feedback on form inputs.
  - Disable form submission until all fields are valid.

- **Modals and Notifications**
  - Use state to control the visibility of modals.
  - Implement transition effects for modals and other interactive elements.

**Step 9: Ensure Responsiveness**

- **Mobile-First Approach**

  - Start styling components for small screens and scale up.
  - Use responsive units like `rem` and percentages.

- **Media Queries**

  - Utilize Tailwind CSS breakpoints to adjust layout and styling.
  - Test on multiple devices or emulators.

- **Image Optimization**
  - Use Next.js Image component for automatic image optimization.
  - Serve appropriately sized images based on device screen size.

---

**6. Database Considerations**

Here is the proposed PostgreSQL DBML (Database Markup Language) for the Audiophile e-commerce website:

```markdown
// Users and Auth Tables
Table users {
id uuid [pk, default: `uuid_generate_v4()`]
name varchar
email varchar [not null, unique]
password varchar
email_verified timestamptz
image varchar
created_at timestamptz [default: `now()`]
updated_at timestamptz [default: `now()`]

indexes {
email
}
}

Table accounts {
id serial [pk]
user_id uuid [not null]
provider varchar [not null]
provider_account_id varchar [not null]
refresh_token text
access_token text
expires_at integer
token_type varchar
scope varchar
id_token text
session_state varchar
created_at timestamptz [default: `now()`]
updated_at timestamptz [default: `now()`]

indexes {
(provider, provider_account_id) [unique]
}
}

Ref: accounts.user_id > users.id

Table sessions {
id serial [pk]
session_token varchar [not null, unique]
user_id uuid [not null]
expires timestamptz [not null]
created_at timestamptz [default: `now()`]
updated_at timestamptz [default: `now()`]
}

Ref: sessions.user_id > users.id

Table verification_tokens {
identifier varchar [pk]
token varchar [pk]
expires timestamptz [not null]
}

// Product Related Tables
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

Table product_includes {
id serial [pk]
product_id integer
item varchar [not null]
quantity integer [not null]
}

Ref: product_includes.product_id > products.id [delete: cascade]

Table product_images {
id serial [pk]
product_id integer
mobile_url varchar
tablet_url varchar
desktop_url varchar
image_type varchar(50) [not null] // 'main', 'gallery', 'category'
}

Ref: product_images.product_id > products.id [delete: cascade]

Table gallery_images {
id serial [pk]
product_id integer
mobile_url varchar
tablet_url varchar
desktop_url varchar
}

Ref: gallery_images.product_id > products.id [delete: cascade]

Table related_products {
id serial [pk]
product_id integer
related_product_id integer
}

Ref: related_products.product_id > products.id [delete: cascade]
Ref: related_products.related_product_id > products.id

// Order Related Tables
Table orders {
id serial [pk]
user_id uuid
total numeric(10,2) [not null]
shipping_fee numeric(10,2) [not null, default: 50]
vat numeric(10,2) [not null]
created_at timestamptz [default: `now()`]
updated_at timestamptz [default: `now()`]
}

Ref: orders.user_id > users.id

Table order_items {
id serial [pk]
order_id integer
product_id integer
quantity integer [not null]
price numeric(10,2) [not null]
}

Ref: order_items.order_id > orders.id [delete: cascade]
Ref: order_items.product_id > products.id

// Cart Related Tables
Table carts {
id serial [pk]
user_id uuid
created_at timestamptz [default: `now()`]
updated_at timestamptz [default: `now()`]
}

Ref: carts.user_id > users.id

Table cart_items {
id serial [pk]
cart_id integer
product_id integer
quantity integer [not null]
}

Ref: cart_items.cart_id > carts.id [delete: cascade]
Ref: cart_items.product_id > products.id
```

**Relationships:**

- **Users**

  - Can have multiple **accounts** (for social authentication).
  - Can have multiple **sessions**.
  - Can have multiple **orders**.
  - Can have a **cart** (if server-side cart is used).

- **Products**

  - Belong to a **category**.
  - Have multiple **product includes**, **product images**, and **gallery images**.
  - Can be related to other **products**.

- **Orders**

  - Belong to a **user**.
  - Have multiple **order items**.

- **Order Items**

  - Belong to an **order**.
  - Reference a **product**.

- **Carts** (Optional)

  - Belong to a **user**.
  - Have multiple **cart items**.

- **Cart Items**
  - Belong to a **cart**.
  - Reference a **product**.

---

**10. Additional NPM Packages**

Here are some additional npm packages that might help with this project:

- **`react-hook-form`**: For building forms with easy validation.
- **`zod`**: TypeScript-first schema validation with static type inference.
- **`axios`**: Promise-based HTTP client for the browser and Node.js.
- **`clsx`**: Utility for constructing `className` strings conditionally.
- **`date-fns`**: Modern JavaScript date utility library.
- **`zustand`**: Fast and scalable state management solution.
- **`lucide-react`**: Beautiful and customizable SVG icons.
- **`tanstack router`**: React Hooks library for data fetching.

---
