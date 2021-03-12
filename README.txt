# Improve the on-campus tracker – oblig 2
**How to run**
To run the application open a new terminal session and navigate to the root directory. Then run the `npm install` command. The command will install all the modules listed as `dependencies` and `devDependencies` in the `package.json file`. The result should be a `node_modueles` folder.

When the`node_modueles` folder is downloaded, the application is ready to run. Use the `npm start` command to start a local server and run the appication. The single page application can how be seen at http://localhost:3000/

**Test the forms**
The forms that have been implemented in the project are:
 - Forgot-password (src/components/forms/forgot-password.jsx)
 - Sign-up (src/components/forms/forgot-password.jsx)
 - Log-in (src/components/forms/log-in.jsx)

The forgot-password form has native HTML form validation. The `input` tag has `required` and `type=email` attributes.

The sign-up form also heavily relies on native HTML form validation. All input fields have a `required` tag. The email input field is of `type=email` It therefore only accepts an input that includes a string before and after an At sign (@) representing an email in the format 'username@domain'.

The input field for the password has the `required`, `pattern` and `title` attribute. The `pattern` attribute ensures that every password entered contains a number, a letter, and is 8 characters or longer. If the password does not meet these criteria the value from the `title` attribute will show up.

The log-in form also contains the mentioned attributes for email and password.

## How the component were designed
The components are designed to be used independently. The different types of input fields are also designed as components, making them reusable across all three forms. The input fields can be found in '`src/components/forms/form-elements`'

**Stateless**
When possible I have lifted the state to `app.js`. This makes my component stateless. For example, I have done this for the log-in form. By lifting the state to app.js we can feed the `<nav/>` component with the appropriate links as props depending on if a user is logged in or not.

**Stateful**
I have made my sign-up component stateful. I have done this because the state is used as temporary storage for validating the password against the repeated password, and for saving the values entered to local storage (local storage is used to simulate a fake back end).

**Controlled**
Quoting the React documentation (https://reactjs.org/docs/forms.html)

> With a controlled component, the input’s value is always driven by the
> React state. While this means you have to type a bit more code, you
> can now pass the value to other UI elements too, or reset it from
> other event handlers.

We can say that all three components are uncontrolled since the value attribute is not set on our form element.
In this project, I have decided to not include the value in our form elements as I did not feel the need to display the value outside of the input field nor reset the values inside the fields.

## Other comments
In this version of the project, the back-end is made up. The forms all include action="#" essentially making them useless.# Improve the on-campus tracker – oblig 2
**How to run**
To run the application open a new terminal session and navigate to the root directory. Then run the `npm install` command. The command will install all the modules listed as `dependencies` and `devDependencies` in the `package.json file`. The result should be a `node_modueles` folder.

When the`node_modueles` folder is downloaded, the application is ready to run. Use the `npm start` command to start a local server and run the appication. The single page application can how be seen at http://localhost:3000/

**Test the forms**
The forms that have been implemented in the project are:
 - Forgot-password (src/components/forms/forgot-password.jsx)
 - Sign-up (src/components/forms/forgot-password.jsx)
 - Log-in (src/components/forms/log-in.jsx)

The forgot-password form has native HTML form validation. The `input` tag has `required` and `type=email` attributes.

The sign-up form also heavily relies on native HTML form validation. All input fields have a `required` tag. The email input field is of `type=email` It therefore only accepts an input that includes a string before and after an At sign (@) representing an email in the format 'username@domain'.

The input field for the password has the `required`, `pattern` and `title` attribute. The `pattern` attribute ensures that every password entered contains a number, a letter, and is 8 characters or longer. If the password does not meet these criteria the value from the `title` attribute will show up.

The log-in form also contains the mentioned attributes for email and password.

## How the component were designed
The components are designed to be used independently. The different types of input fields are also designed as components, making them reusable across all three forms. The input fields can be found in '`src/components/forms/form-elements`'

**Stateless**
When possible I have lifted the state to `app.js`. This makes my component stateless. For example, I have done this for the log-in form. By lifting the state to app.js we can feed the `<nav/>` component with the appropriate links as props depending on if a user is logged in or not.

**Stateful**
I have made my sign-up component stateful. I have done this because the state is used as temporary storage for validating the password against the repeated password, and for saving the values entered to local storage (local storage is used to simulate a fake back end).

**Controlled**
Quoting the React documentation (https://reactjs.org/docs/forms.html)

> With a controlled component, the input’s value is always driven by the
> React state. While this means you have to type a bit more code, you
> can now pass the value to other UI elements too, or reset it from
> other event handlers.

We can say that all three components are uncontrolled since the value attribute is not set on our form element.
In this project, I have decided to not include the value in our form elements as I did not feel the need to display the value outside of the input field nor reset the values inside the fields.

## Other comments
In this version of the project, the back-end is made up. The forms all include `action="#"` essentially making them useless. Local storage may act as a back end, but the information stored after signing up is never deleted nor used.

## Things I would like to improve
For a next time, I would like to move the login component into the components folder. I also would like to improve the CSS as there are now multiple CSS files that are alike for the different components. (I currently don't know where to place the CSS file(s) to reach every component in the entire application).