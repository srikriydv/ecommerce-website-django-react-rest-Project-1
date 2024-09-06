# E-Commerce Project

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

## Setup and Installation

### Backend Setup

1. **Clone the repository**

    ```bash
    git clone https://github.com/srikriydv/ecommerce-website-django-react.git
    cd ecommerce-website-django-react/backend_api
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
