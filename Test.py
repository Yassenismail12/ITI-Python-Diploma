import csv
from faker import Faker
import random
from datetime import datetime, timedelta

# Initialize Faker for generating realistic data
fake = Faker()

# Define the number of rows for each table. Adjust these numbers for different test sizes.
NUM_CUSTOMERS = 1000
NUM_PRODUCTS = 1200
NUM_ORDERS = 1500
NUM_ORDER_ITEMS = 1700
NUM_CUSTOMER_PHONES = 1100

# File paths
CUSTOMERS_FILE = 'customers.csv'
CATEGORY_FILE = 'category.csv'
PRODUCTS_FILE = 'products.csv'
ORDERS_FILE = 'orders.csv'
PAYMENTS_FILE = 'payments.csv'
ORDER_ITEMS_FILE = 'order_items.csv'
CUSTOMER_PHONE_FILE = 'customer_phone.csv'

def generate_customers():
    """Generates customer data and saves to a CSV file."""
    print(f"Generating {NUM_CUSTOMERS} customers...")
    with open(CUSTOMERS_FILE, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['CustomerID', 'Name', 'Email', 'Address'])
        for i in range(1, NUM_CUSTOMERS + 1):
            writer.writerow([i, fake.name(), fake.email(), fake.address().replace('\n', ', ')])
    print(f"Customers data saved to {CUSTOMERS_FILE}")

def generate_categories():
    """Generates static category data and saves to a CSV file."""
    print("Generating categories...")
    categories = [
        (1, 'Electronics', 'Gadgets and electronics.'),
        (2, 'Clothing', 'Apparel and accessories.'),
        (3, 'Books', 'All types of books.'),
        (4, 'Home & Kitchen', 'Home and kitchen appliances.')
    ]
    with open(CATEGORY_FILE, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['Category_ID', 'Name', 'Description'])
        writer.writerows(categories)
    print(f"Categories data saved to {CATEGORY_FILE}")

def generate_products():
    """Generates product data and saves to a CSV file."""
    print(f"Generating {NUM_PRODUCTS} products...")
    with open(PRODUCTS_FILE, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['Product_ID', 'Name', 'Price', 'Description', 'Available_STK', 'Category_ID'])
        for i in range(1, NUM_PRODUCTS + 1):
            writer.writerow([
                i,
                f"Product {i} - {fake.word()}",
                round(random.uniform(5, 500), 2),
                fake.text(max_nb_chars=100),
                random.randint(0, 1000),
                random.randint(1, 4)
            ])
    print(f"Products data saved to {PRODUCTS_FILE}")

def generate_orders():
    """Generates order data and saves to a CSV file."""
    print(f"Generating {NUM_ORDERS} orders...")
    start_date = datetime.now() - timedelta(days=365)
    with open(ORDERS_FILE, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['OrderID', 'Date_Placed', 'Total', 'CustomerID'])
        for i in range(1, NUM_ORDERS + 1):
            date_placed = start_date + timedelta(days=random.randint(0, 365), seconds=random.randint(0, 86400))
            total = round(random.uniform(10, 1000), 2)
            customer_id = random.randint(1, NUM_CUSTOMERS)
            writer.writerow([i, date_placed.strftime('%Y-%m-%d %H:%M:%S'), total, customer_id])
    print(f"Orders data saved to {ORDERS_FILE}")

def generate_payments():
    """Generates payment data and saves to a CSV file."""
    print(f"Generating payments for {NUM_ORDERS} orders...")
    payment_methods = ['Credit Card', 'Debit Card', 'PayPal', 'Stripe']
    with open(PAYMENTS_FILE, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['Payment_ID', 'Date', 'Amount', 'Method', 'OrderID'])
        # Simplified: one payment per order. In a real scenario, you'd handle partial payments.
        for i in range(1, NUM_ORDERS + 1):
            payment_date = datetime.now() - timedelta(days=random.randint(0, 30), seconds=random.randint(0, 86400))
            writer.writerow([
                i,
                payment_date.strftime('%Y-%m-%d %H:%M:%S'),
                round(random.uniform(10, 1000), 2),
                random.choice(payment_methods),
                i
            ])
    print(f"Payments data saved to {PAYMENTS_FILE}")

def generate_order_items():
    """Generates order items data and saves to a CSV file."""
    print(f"Generating {NUM_ORDER_ITEMS} order items...")
    # This loop generates a large number of unique (OrderID, ProductID) pairs
    unique_pairs = set()
    with open(ORDER_ITEMS_FILE, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['OrderID', 'Product_ID', 'Quantity', 'Price_at_Purchase'])
        while len(unique_pairs) < NUM_ORDER_ITEMS:
            order_id = random.randint(1, NUM_ORDERS)
            product_id = random.randint(1, NUM_PRODUCTS)
            if (order_id, product_id) not in unique_pairs:
                unique_pairs.add((order_id, product_id))
                quantity = random.randint(1, 5)
                # Note: Price at purchase is a simplified random value here
                price_at_purchase = round(random.uniform(5, 500), 2)
                writer.writerow([order_id, product_id, quantity, price_at_purchase])
    print(f"Order items data saved to {ORDER_ITEMS_FILE}")

def generate_customer_phone():
    """Generates phone numbers for customers and saves to a CSV file."""
    print(f"Generating {NUM_CUSTOMER_PHONES} customer phones...")
    with open(CUSTOMER_PHONE_FILE, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['Phone', 'CustomerID'])
        for _ in range(NUM_CUSTOMER_PHONES):
            phone_number = fake.phone_number()
            customer_id = random.randint(1, NUM_CUSTOMERS)
            writer.writerow([phone_number, customer_id])
    print(f"Customer phone data saved to {CUSTOMER_PHONE_FILE}")

if __name__ == "__main__":
    generate_customers()
    generate_categories()
    generate_products()
    generate_orders()
    generate_payments()
    generate_order_items()
    generate_customer_phone()

    print("\nAll data generation complete!")

