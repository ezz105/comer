# E-Commerce Database Design Documentation

This document describes the structure of the database for an e-commerce application, detailing tables for user management, product management, and shopping and orders. Each section contains SQL table definitions, attribute explanations, and example data where applicable.

---

## Part 1: User Management System

### 1. **Users Table**
Defines registered users, including basic information, roles, and account status.

```sql
Table users {
  id bigint [pk, increment]
  name varchar(255)
  email varchar(255) [unique]
  password varchar(255)
  phone_number varchar(20)
  role_id bigint [ref: > roles.id]
  email_verified_at timestamp
  status enum('active', 'inactive', 'suspended')
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}
```
### Explanation:
- Primary key: Auto-incrementing ID
- Email must be unique
- Soft deletes implemented (deleted_at)
- Status types:
  * active: Normal user access
  * inactive: Account not yet activated
  * suspended: Account temporarily blocked

### Example Records:
```sql
INSERT INTO users VALUES
(1, 'John Smith', 'john@email.com', 'hashed_password', '+1234567890', 1, '2024-01-01 12:00:00', 'active', NOW(), NOW(), NULL),
(2, 'Sarah Crafts', 'sarah@artisan.com', 'hashed_password', '+1987654321', 2, '2024-01-01 12:00:00', 'active', NOW(), NOW(), NULL),
(3, 'Admin User', 'admin@platform.com', 'hashed_password', '+1122334455', 3, '2024-01-01 12:00:00', 'active', NOW(), NOW(), NULL);
```
---
### 2. **Roles Table**
Defines roles assigned to users, allowing for different permission levels.
- **id**: Role ID.
- **name**: Name of the role (e.g., `customer`, `artisan`, `admin`).

```sql
Table roles {
  id bigint [pk, increment]
  name varchar(50)
  created_at timestamp
  updated_at timestamp
}
```

### Example Records:
Default Roles:
```sql
INSERT INTO roles VALUES
(1, 'customer', NOW(), NOW()),
(2, 'artisan', NOW(), NOW()),
(3, 'admin', NOW(), NOW());
```

----
### 3. **User Profiles Table**
Stores additional profile details for users, such as bio and address information.
- **user_id**: Foreign key reference to `users.id`.
- **bio**: User biography or description.

```sql
Table user_profiles {
  id bigint [pk, increment]
  user_id bigint [ref: > users.id]
  avatar varchar(255)
  bio text
  address_line1 varchar(255)
  address_line2 varchar(255)
  city varchar(100)
  state varchar(100)
  postal_code varchar(20)
  country varchar(100)
  created_at timestamp
  updated_at timestamp
}
```

#### Example Profile:
```sql
INSERT INTO user_profiles VALUES
(1, 2, 'avatars/sarah.jpg', 'Artisan specializing in handmade jewelry', '123 Craft Street', 'Unit 4B', 'Portland', 'Oregon', '97201', 'United States', NOW(), NOW());
```
---

## Part 2: Product Management

### 1. **Categories Table**
Defines product categories, supporting a hierarchical structure for parent-child relationships.
- **parent_id**: Allows for hierarchical categorization (e.g., Jewelry > Necklaces).
- **status**: Indicates if the category is active or inactive.
```sql
Table categories {
  id bigint [pk, increment]
  parent_id bigint [ref: > categories.id]
  name varchar(100)
  slug varchar(100)
  description text
  image varchar(255)
  status enum('active', 'inactive')
  created_at timestamp
  updated_at timestamp
}
```
#### Example:
```sql
INSERT INTO categories VALUES
-- Parent Categories
(1, NULL, 'Jewelry', 'jewelry', 'Handcrafted jewelry items', 'categories/jewelry.jpg', 'active', NOW(), NOW()),
-- Sub Categories
(2, 1, 'Necklaces', 'jewelry-necklaces', 'Handmade necklaces', 'categories/necklaces.jpg', 'active', NOW(), NOW()),
(3, 1, 'Rings', 'jewelry-rings', 'Handcrafted rings', 'categories/rings.jpg', 'active', NOW(), NOW());
```
---

### 2. **Products Table**
Stores product information, including pricing, stock, and SEO metadata.

```sql
Table products {
  id bigint [pk, increment]
  artisan_id bigint [ref: > users.id]
  category_id bigint [ref: > categories.id]
  name varchar(255)
  slug varchar(255)
  description text
  price decimal(10,2)
  discount_price decimal(10,2)
  stock_quantity int
  sku varchar(100) [unique]
  status enum('draft', 'active', 'inactive', 'out_of_stock')
  is_featured boolean
  meta_title varchar(255)
  meta_description text
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}
```
- **sku**: Unique stock-keeping unit identifier.
- **is_featured**: Marks products as featured for special display.
- **status**: Indicates product availability (`draft`, `active`, `inactive`, `out_of_stock`) :
    - draft: Product not yet published
    - active: Available for purchase
    - inactive: Temporarily unavailable
    - out_of_stock: No stock available
--

#### Example:
```sql
INSERT INTO products VALUES (1, 2, 2, 'Handmade Silver Necklace', 'handmade-silver-necklace', 'Beautiful handcrafted silver necklace with moonstone pendant', 99.99, 89.99, 10, 'SLV-NCK-001', 'active', true, 'Handmade Silver Necklace with Moonstone', 'Unique handcrafted silver necklace featuring a genuine moonstone pendant', NOW(), NOW(), NULL);
```

---

### 3. **Product Images Table**
Stores multiple images for each product, allowing a primary image to be specified.
  - **is_primary**: Marks the main image to be shown first.
  - **sort_order**: Defines the display order of images.

#### Example:
```sql
Table product_images {
  id bigint [pk, increment]
  product_id bigint [ref: > products.id]
  image_path varchar(255)
  is_primary boolean
  sort_order int
  created_at timestamp
  updated_at timestamp
}
```

### Example Images:
```sql
INSERT INTO product_images VALUES
(1, 1, 'products/necklace-main.jpg', true, 1, NOW(), NOW()),
(2, 1, 'products/necklace-angle1.jpg', false, 2, NOW(), NOW()),
(3, 1, 'products/necklace-detail.jpg', false, 3, NOW(), NOW());
```

---

### 4. **Product Attributes Table**
Stores specific attributes for products, allowing additional customization options.

```sql
Table product_attributes {
  id bigint [pk, increment]
  product_id bigint [ref: > products.id]
  name varchar(100)
  value text
  created_at timestamp
  updated_at timestamp
}
```

#### Example Attributes:
```sql
INSERT INTO product_attributes VALUES
(1, 1, 'Material', 'Sterling Silver', NOW(), NOW()),
(2, 1, 'Chain Length', '18 inches', NOW(), NOW()),
(3, 1, 'Gemstone', 'Moonstone', NOW(), NOW());
```
---

## Part 3: Shopping and Orders

### 1. **Carts Table**

Manages user shopping carts, with status to track the cart's lifecycle.
  - **Status**: Tracks if the cart is currently active, abandoned, or converted to an order.
      - active: Current shopping session
      - abandoned: Cart inactive for extended period
      - converted: Converted to order

```sql
Table carts {
  id bigint [pk, increment]
  user_id bigint [ref: > users.id]
  status enum('active', 'abandoned', 'converted')
  created_at timestamp
  updated_at timestamp
}
```
---
### 2. **Orders Table**
Stores order details, including payment and shipping information.
  - **status**: Order lifecycle status (`pending`, `processing`, `shipped`, `delivered`, `cancelled`).
  - **payment_status**: Tracks payment status (`pending`, `paid`, `failed`, `refunded`).

```sql
Table orders {
  id bigint [pk, increment]
  user_id bigint [ref: > users.id]
  order_number varchar(100) [unique]
  status enum('pending', 'processing', 'shipped', 'delivered', 'cancelled')
  total_amount decimal(10,2)
  shipping_amount decimal(10,2)
  tax_amount decimal(10,2)
  discount_amount decimal(10,2)
  payment_status enum('pending', 'paid', 'failed', 'refunded')
  payment_method varchar(50)
  shipping_address_id bigint [ref: > addresses.id]
  billing_address_id bigint [ref: > addresses.id]
  notes text
  created_at timestamp
  updated_at timestamp
}
```
#### Order Statuses:
  - pending: Order placed but payment not confirmed
  - processing: Payment confirmed, order being prepared
  - shipped: Order sent to customer
  - delivered: Order received by customer
  - cancelled: Order cancelled

Payment Statuses:
- pending: Awaiting payment
- paid: Payment successful
- failed: Payment failed
- refunded: Amount refunded to customer

Example Order:
```sql
INSERT INTO orders VALUES
(1, 1, 'ORD-2024-0001', 'processing', 
199.98, 10.00, 20.00, 0.00, 
'paid', 'credit_card', 1, 1, 
'Please handle with care', NOW(), NOW());
```

---

## Part 4: REVIEWS AND RATINGS SYSTEM
---

### 1. **REVIEWS TABLE:**

```sql
Table reviews {
  id bigint [pk, increment]
  user_id bigint [ref: > users.id]
  product_id bigint [ref: > products.id]
  order_item_id bigint [ref: > order_items.id]
  rating int
  title varchar(255)
  comment text
  status enum('pending', 'approved', 'rejected')
  created_at timestamp
  updated_at timestamp
}
```
The `reviews` table records customer feedback on products. Key fields include:
- **user_id**: References `users.id`, ensuring each review is tied to a valid user.
- **product_id**: Links to the `products` table, indicating the product being reviewed.
- **order_item_id**: Ensures reviews are only for purchased items, linked to `order_items`.
- **rating**: Integer (1-5) that captures the user's rating; constrained to ensure it falls within this range.
- **status**: Specifies if the review is `pending`, `approved`, or `rejected`, aiding moderation.
- **Statuses**:
      - pending: Awaiting moderation
      - approved: Visible on site
      - rejected: Failed moderation
  
- **Constraints and Implications**:
  -  **One review per order item** :Prevents multiple reviews on the same item in a single order.
  -  Rating must be between 1 and 5
  -  Review can only be created after order delivery
  - **Status Control**: Ensures only moderated reviews appear on the website.
 

#### Example Reviews:
```sql
INSERT INTO reviews VALUES
(1, 1, 1, 1, 5, 'Beautiful Necklace!', 
'The craftsmanship is outstanding. The silver work is delicate and the moonstone is gorgeous.', 
'approved', NOW(), NOW()),

(2, 3, 1, 2, 4, 'Nice but shipping was slow', 
'Product is great but took longer than expected to arrive.', 
'approved', NOW(), NOW());
```

---
## Part 5: Inventory Management
---

### 1. **INVENTORY_TRANSACTIONS TABLE**

Tracks changes in stock levels with:
- **product_id**: References the `products` table to identify the affected product.
- **type**: indicates if the transaction is `in` (addition), `out` (reduction), or `adjustment` (correction).
- **quantity**: Tracks quantity change; a constraint enforces non-zero values.
- **reference_type & reference_id**: Specifies the reason for the transaction (e.g., order, return) with a link to relevant tables.

```sql
Table inventory_transactions {
  id bigint [pk, increment]
  product_id bigint [ref: > products.id]
  type enum('in', 'out', 'adjustment')
  quantity int
  reference_type varchar(50)
  reference_id bigint
  notes text
  created_at timestamp
  updated_at timestamp
}
```
#### Constraints and Implications:
- **Quantity Non-zero Check**: Prevents invalid transactions.
- **Types and Reference**: Ensures transactions align with valid actions, like adjustments or restocking.

Transaction Types:
- in: Stock addition
- out: Stock reduction
- adjustment: Inventory correction

Reference Types:
- order: For order-related transactions
- return: For customer returns
- manual: For manual adjustments
- supplier: For new stock arrivals

#### Example Transactions:
```sql
-- Initial stock addition
INSERT INTO inventory_transactions VALUES
(1, 1, 'in', 20, 'supplier', 1, 'Initial stock from supplier', NOW(), NOW()),

-- Order reduction
(2, 1, 'out', -1, 'order', 1, 'Order #ORD-2024-0001', NOW(), NOW()),

-- Inventory adjustment
(3, 1, 'adjustment', -2, 'manual', NULL, 'Damaged items removal', NOW(), NOW());
```

---
## Part 6: Wishlist and Address Management
---
### 1. **WISHLISTS TABLE**

Stores products that users add to their wishlists. 
```sql
Table wishlists {
  id bigint [pk, increment]
  user_id bigint [ref: > users.id]
  product_id bigint [ref: > products.id]
  created_at timestamp
  updated_at timestamp
}
```
**Constraints and Implications**:
  - **User-Product Uniqueness**: Ensures each product appears only once in a user’s wishlist.
  - Product must be active
---
Example Wishlist:
```sql
INSERT INTO wishlists VALUES
(1, 1, 1, NOW(), NOW()),
(2, 1, 3, NOW(), NOW());
```

---

### 2. **ADDRESSES TABLE**

  Stores user addresses for shipping and billing:
  - **is_default**: Boolean indicating if this is the user’s primary address.
  - **type**: Enum differentiating between `shipping` and `billing`.

```sql
Table addresses {
  id bigint [pk, increment]
  user_id bigint [ref: > users.id]
  name varchar(255)
  phone varchar(20)
  address_line1 varchar(255)
  address_line2 varchar(255)
  city varchar(100)
  state varchar(100)
  postal_code varchar(20)
  country varchar(100)
  is_default boolean
  type enum('shipping', 'billing')
  created_at timestamp
  updated_at timestamp
}
```
Address Types:
- shipping: Used for delivery
- billing: Used for invoicing

**Constraints and Implications**:
- **Default Address**: Ensures clear designation of primary addresses, simplifying selection during checkout.

#### Example Addresses:
```sql
INSERT INTO addresses VALUES
(1, 1, 'John Smith', '+1234567890',
'123 Main St', 'Apt 4B', 'New York', 'NY', '10001', 'United States',
true, 'shipping', NOW(), NOW()),

(2, 1, 'John Smith', '+1234567890',
'123 Main St', 'Apt 4B', 'New York', 'NY', '10001', 'United States',
true, 'billing', NOW(), NOW());
```

---
## Part 7: Notifications 

### 1. **NOTIFICATIONS TABLE**
  Holds notifications for users, with fields:
  - **type**: Specifies the notification category (e.g., `order_status`, `low_stock`).
  - **is_read**: Boolean tracking whether the user has seen the notification.

```sql
Table notifications {
  id bigint [pk, increment]
  user_id bigint [ref: > users.id]
  type varchar(50)
  title varchar(255)
  message text
  is_read boolean
  data json
  created_at timestamp
  updated_at timestamp
}
```

Notification Types Can be:

  - order_status: Order status updates
  - review_approved: Review approval notification
  - low_stock: Low stock alert for artisans
  - price_change: Price change alerts
  - new_message: New message notification

Example Notifications:
```sql
INSERT INTO notifications VALUES
(1, 1, 'order_status', 'Order Shipped', 
'Your order #ORD-2024-0001 has been shipped', false,
'{"order_id": 1, "tracking_number": "1Z999AA1234567890"}',
NOW(), NOW()),

(2, 2, 'low_stock', 'Low Stock Alert', 
'Product "Handmade Silver Necklace" is running low on stock (2 remaining)',
false, '{"product_id": 1, "current_stock": 2}',
NOW(), NOW());
```

---
## Part 8: Analytics
---

### 1. **PRODUCT_VIEWS TABLE**

  Logs each view of a product:
  - **ip_address**: Tracks the user’s IP, helping identify trends and repeat views.

**Constraints and Implications**:
- **User Behavior Insights**: Enables analytics on product popularity and user engagement.

```sql
Table product_views {
  id bigint [pk, increment]
  product_id bigint [ref: > products.id]
  user_id bigint [ref: > users.id]
  ip_address varchar(45)
  created_at timestamp
}
```

#### Example Product Views:
```sql
INSERT INTO product_views VALUES
(1, 1, 1, '192.168.1.1', NOW()),
(2, 1, NULL, '192.168.1.2', NOW());
```
---

# Important Relationships and Constraints

1. **Referential Integrity **:
  - All foreign keys should have ON DELETE CASCADE or ON DELETE SET NULL
  - Example: When a product is deleted, all related images, attributes, and inventory records should be deleted

2. **Unique Constraints**
- users.email
- products.sku
- orders.order_number
- Composite unique: wishlists (user_id, product_id)

3. **Check Constraints**
```sql
ALTER TABLE reviews ADD CONSTRAINT valid_rating 
  CHECK (rating >= 1 AND rating <= 5);

ALTER TABLE products ADD CONSTRAINT valid_price 
  CHECK (price >= 0 AND (discount_price IS NULL OR discount_price <= price));

ALTER TABLE inventory_transactions ADD CONSTRAINT valid_quantity 
  CHECK (quantity != 0);
```


4. **Indexes** : 
   - Indexed fields optimize frequently queried data, improving performance on columns such as:
        - **status** in `products` to allow quick filtering of active items.
        - **user_id** in `orders`, enabling fast lookups of user orders.

```sql
CREATE INDEX idx_products_status ON products(status);
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_product_views_product_id ON product_views(product_id);
CREATE INDEX idx_notifications_user_id ON notifications(user_id, is_read);
```

This completes the detailed documentation of the database schema. Each table is designed to support specific features while maintaining data integrity and performance. The schema includes:
- Comprehensive user and role management
- Complete product lifecycle handling
- Order processing and fulfillment
- Review and rating system
- Inventory tracking
- Analytics and notification systems

