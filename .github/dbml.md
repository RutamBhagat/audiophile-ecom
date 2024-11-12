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
