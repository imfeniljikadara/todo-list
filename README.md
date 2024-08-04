# To-Do List

A simple To-Do List application built with Flask and ReactJS. This project demonstrates a basic full-stack application with a RESTful API backend and a responsive frontend.

## Features

- **Add Tasks:** Add new tasks to the list with input validation to ensure task titles are not empty or purely numeric.
- **Delete Tasks:** Remove tasks from the list.
- **View Tasks:** Display all tasks in the list.

## Technologies Used

- **Backend:** Flask
- **Frontend:** ReactJS
- **HTTP Client:** Axios
- **Middleware:** Flask-CORS

## Setup and Installation

### Backend (Flask)

1. Clone the repository:
    ```sh
    git clone https://github.com/imfeniljikadara/todo-list.git
    cd todo-list-flask-react/backend
    ```

2. Create and activate a virtual environment:
    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3. Install the required dependencies:
    ```sh
    pip install Flask Flask-CORS
    ```

4. Run the Flask application:
    ```sh
    python app.py
    ```
   The backend should now be running at `http://127.0.0.1:5000`.

### Frontend (ReactJS)

1. Navigate to the frontend directory:
    ```sh
    cd ../frontend
    ```

2. Install the required dependencies:
    ```sh
    npm install
    ```

3. Start the React application:
    ```sh
    npm start
    ```
   The frontend should now be running at `http://localhost:3000`.

## Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. Use the input field to add new tasks. Ensure that the task title is not empty or purely numeric.
3. View the list of tasks displayed below the input field.
4. Delete tasks using the "Delete" button next to each task.

## Code Structure

### Backend (Flask)

- `app.py`: Contains the Flask application with routes for adding, deleting, and viewing tasks.

### Frontend (ReactJS)

- `src/App.js`: Main React component that handles the user interface and state management.
- `src/App.css`: CSS file for styling the frontend components.

## Acknowledgements

- Flask Documentation: https://flask.palletsprojects.com/
- ReactJS Documentation: https://reactjs.org/
- Axios Documentation: https://axios-http.com/
