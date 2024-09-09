# E-commerce Website Django React REST Project #1

This project is an e-commerce application with a Django backend and a React frontend. The Django backend handles the API endpoints and data management, while the React frontend provides a responsive user interface.

## Features

- **User Authentication**: Register, login, and manage vendor and customer accounts.
- **Product Management**: Browse products, view details, wishlist product and search by category.
- **Cart and Checkout**: Add products to the cart and complete purchases.
- **Order Management**: View and manage order of customers.

## Tech Stack

- **Backend**: Django, Django REST framework
- **Frontend**: React
- **Database**: PostgreSQL

## Screenshots

Below are some screenshots of the  application:

### 1. Home Page
![1  Home](https://github.com/user-attachments/assets/549c43fd-1eec-448a-8939-ac90115657e6)

### 2. Catagories Page
![4  Categories](https://github.com/user-attachments/assets/6163d660-c931-4d6a-9d56-f0392fffd034)

### 3. Product Details Page
![21  ProductDetail](https://github.com/user-attachments/assets/2c2ed473-9972-4a70-adf6-4fe96de094c2)

### 4. Vendor Details Page
![23  VendorDetails](https://github.com/user-attachments/assets/de191459-6dd3-4d85-9273-dc69db6929b3)

### 5. Tag Product Page
![22  TagProduct](https://github.com/user-attachments/assets/ab05696d-4c5c-4cfc-bce4-74c85b830165)

### 6. Customers Pages 

#### 6.1 Customer Dashboard
![5  CusDashboard](https://github.com/user-attachments/assets/7cf14d73-b1c9-4081-be57-759d9fb95980)

#### 6.2 Customer Orders
![6  CusOrders](https://github.com/user-attachments/assets/bbed3194-9927-4641-8205-ea97e7e835cc)

#### 6.3 Customer Wishlist
![7  CusWishlist](https://github.com/user-attachments/assets/3ab0946b-95b7-41b0-a955-823ee93c9065)

#### 6.4 Customer Profile
![8  CusProfile](https://github.com/user-attachments/assets/f64c4fbe-d16b-4f67-97c3-0fac86835154)

#### 6.5 Customer Password
![9  CusPassword](https://github.com/user-attachments/assets/da3d0273-492f-45e0-b4f7-c4aa60e78798)

#### 6.6 Customer Address
![10  CusAddresss](https://github.com/user-attachments/assets/ee232a67-c2ca-44c1-ab5e-33b96efdbd47)

#### 6.7 Customer Cart
![11  CusCart](https://github.com/user-attachments/assets/ffd590fc-d3f9-41c7-bdae-82dd7b9e43a7)

#### 6.8 Customer Checkout
![12  CusCheckout](https://github.com/user-attachments/assets/f6f1d192-909a-4744-b007-0b1e1a088714)

### 7. Vendor Pages 

#### 7.1 Vendor Dashboard
![13  VenDashboard](https://github.com/user-attachments/assets/454a5fbc-7291-4827-b000-c4cb1b49272f)

#### 7.2 Vendor Products
![14 VenProducts](https://github.com/user-attachments/assets/af85cec0-70d6-4aa0-b6ad-396394799f0d)

#### 7.3 Vendor Add-Product
![15  VenAddProduct](https://github.com/user-attachments/assets/26cf0dfb-c19d-4b91-abd7-4694e654be79)

#### 7.4 Vendor Customer Orders
![16  VenCusOrders](https://github.com/user-attachments/assets/0328969a-2a74-4785-869c-b229257dc4be)

#### 7.5 Vendor Report
![17  VenReport](https://github.com/user-attachments/assets/3822365a-67bb-4b41-be1c-6a6e6de04745)

#### 7.6 Vendor Daily Report
![18  VenDailyReport](https://github.com/user-attachments/assets/c04f9eb5-d0bd-400a-a9dc-a7691d75a753)

#### 7.7 Vendor Profie
![19  VenProfile](https://github.com/user-attachments/assets/b6204015-db61-4ed1-b413-cd9310f11bca)

#### 7.8 Vendor Change-Password
![20  VenChangePassword](https://github.com/user-attachments/assets/59a25f96-5787-4e26-acf0-4bb9348ed269)

## Setup and Installation

### Backend Setup

1. **Clone the repository**

    ```bash
    git clone https://github.com/srikriydv/ecommerce-website-django-react-rest-Project-1.git
    cd ecommerce-website-django-react-rest-Project-1
    ```

2. **Create and activate a virtual environment**

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. **Install requirements**

    ```bash
    pip install -r requirements.txt
    ```

4. **Apply database migrations**

    ```bash
    python manage.py migrate
    ```

5. **Create a superuser (optional, for admin access)**

    ```bash
    python manage.py createsuperuser
    ```

6. **Run the development server**

    ```bash
    python manage.py runserver
    ```

### Frontend Setup

1. **Navigate to the frontend directory**

    ```bash
    cd ../frontend
    ```

2. **Install npm packages**

    ```bash
    npm install
    ```

3. **Start the React development server**

    ```bash
    npm start
    ```

## Project Structure

- **backend_api/**: Contains the Django project files and configuration.
- **frontend/**: Contains the React project files and configuration.

## Requirements

### `requirements.txt`

```text
asgiref==3.8.1
Django==5.0.7
django-cors-headers==4.4.0
djangorestframework==3.15.2
djangorestframework-simplejwt==5.3.1
pillow==10.4.0
psycopg2-binary==2.9.9
PyJWT==2.8.0
pytz==2024.1
sqlparse==0.5.0
```

### `package.json`

```json
{
  "name": "frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@fortawesome/fontawesome-free": "^6.6.0",
    "@paypal/react-paypal-js": "^8.5.0",
    "apexcharts": "^3.53.0",
    "axios": "^1.7.3",
    "bootstrap": "^5.3.3",
    "jquery": "^3.7.1",
    "popper.js": "^1.16.1",
    "react": "^18.3.1",
    "react-apexcharts": "^1.4.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.25.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "eslint": "^8.57.0",
    "eslint-plugin-react": "^7.34.3",
    "eslint-plugin-react-hooks": "^4.6.2",
    "eslint-plugin-react-refresh": "^0.4.7",
    "vite": "^5.3.4"
  }
}
```

## Acknowledgments

- [Django](https://www.djangoproject.com/)
- [Django REST framework](https://www.django-rest-framework.org/)
- [React](https://reactjs.org/)

### Notes:

- **`requirements.txt`**: Includes basic packages for Django and Django REST framework. Add any additional packages you use.
- **`package.json`**: Lists essential npm packages. Add any additional frontend dependencies you use.
- Adjust paths and package versions according to your actual setup.
