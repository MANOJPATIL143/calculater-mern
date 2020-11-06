## Calculator App

# Developed using MERN stack

Everyone working on this Repository please follow the below rules:

<hr>

## <b>Steps to run the application</b>

1.  Clone your forked repository on your local machine using the following command:
    ```bash
    https://github.com/kirancg/FullStack_Calculator.git
    ```
2.  Once cloned cd into the folder and open the files in your favourite editor.
3.  Open a terminal in your folder and run the following command to install all the packages.
    ```bash
    npm i
    ```
4. Run the following command to start both the application(both client and server).
  ```bash
    npm run dev
    ```
<hr>

## <b>MongoDB Schema</b>

`Note`: Mandatory here means value that need to be passed from the Front end. There are certain values that are mandatory but need not be passed from the front end and is handled by the api itself.

### `Calculation Schema`

| SNo. | Field              | Description                                                                      | Mandatory | Field Type |
| ---- | ------------------ | -------------------------------------------------------------------------------- | --------- | ---------- |
| 1.   | calculation        | Calculation                                                                      | Yes       | String     |

<hr>

## <b>API Paths</b>

### 1. `Calculation API's`

| API's                | Functionality                                                                                                               | Example                                       | Method | Requires token authentication |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------ | ----------------------------- |
| /api               | Gets recent 10 calculations in the database                                                     | http://localhost:8000/api               | GET    | No                            |
| /api  | Adds the calculation information to the database                                                             | http://localhost:8000/api                | POST  | No                            |

