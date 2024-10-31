# OYA-elevate-task

Overview
This project is an Angular-based e-commerce application that showcases products by categories and provides detailed views for each product. It leverages a structured component and service-based architecture for managing product data and routing.

Approach
The application is structured into several Angular components:
.Navbar - Displays navigation links.
.All Products - Lists all products fetched from the backend or a mock service.
.Product Details - Displays details of a single product when selected.

Services
Services are used to separate the logic for fetching data from components:
.GetAllProductsService - Fetches a list of all products.
.GetProductsByCategoryService - Fetches products based on the selected category and individual product details.

Routing
Routing is implemented to enable navigation across different components:
./products route for viewing all products.
./products/:id route for viewing details of a selected product.

Challenges Faced
.Handling API Errors: Managing errors gracefully and displaying appropriate messages if data fails to load.
.Routing and Parameter Extraction: Ensuring the proper handling of dynamic route parameters for viewing individual product details.

How to Run the Application Locally
To set up and run this application locally, follow these steps:

Clone the Repository:
.git clone https://github.com/Doniaahmed22/OYA-elevate-task.git
.cd OYA-elevate-task

Install Dependencies: Install the necessary npm packages:
.npm install

Run the Application: Start the Angular development server:
.ng serve

Access the Application: Open your browser and go to http://localhost:4200 to view the application.

Additional Notes
Make sure Node.js and Angular CLI are installed on your machine.
The backend service URLs may need to be configured based on your environment.
This project is designed to demonstrate an e-commerce storefront's basic structure and routing in Angular.






