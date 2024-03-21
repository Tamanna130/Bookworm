# Bookworm E-commerce Project

Bookworm is a basic e-commerce project built with React. It allows users to browse through a collection of books, add them to their cart, and proceed to checkout. This README provides an overview of the project structure, installation instructions, and how to run the application.

## Features

- Browse through a collection of books
- View book details including title, author, price, and description
- Add books to the shopping cart
- Adjust the quantity of books in the cart
- Remove books from the cart
- Calculate the total bill at checkout
- Sign up and log in with phone number authentication
- Place orders and clear the cart

## Installation

To run the Bookworm project locally, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/Tamanna130/Bookworm.git
    ```

2. Navigate to the project directory:

    ```bash
    cd bookworm
    ```

3. Install dependencies using npm:

    ```bash
    npm install
    ```

4. Set up Firebase for authentication and database services. Refer to Firebase documentation for more information: [Firebase Docs](https://firebase.google.com/docs)

5. Run the development server:

    ```bash
    npm start
    ```

6. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Project Structure

The project structure is organized as follows:

- **`src/`**: Contains the source code for the React application.
  - **`templates/`**: Contains reusable components used throughout the application.
  - **`pages/`**: Contains the main pages of the application such as homepage, product list view, cart view, login, signup, etc.
  - **`firebase/`**: Contains Firebase configuration and setup files.
  - **`App.js`**: Main component that defines the routes and structure of the application.
  - **`index.js`**: Entry point of the application where React is rendered to the DOM.
- **`public/`**: Contains static assets and the HTML template for the application.

## Technologies Used

- React: JavaScript library for building user interfaces
- React Router: Library for routing in React applications
- Firebase: Platform for building web and mobile applications
- Bootstrap: Front-end framework for responsive design
- HTML/CSS: Markup and styling languages for web development

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for using Bookworm! If you have any questions or feedback, feel free to contact me.
