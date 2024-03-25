# Headless-js


Headless Js Does Exist Now !!!



## Overview
The `headless-js` library provides a set of headless components for React applications, offering developers more control and flexibility over their UI logic. Headless components are decoupled from specific UI implementations, allowing for easier customization and reuse.

## Key Features
- **Headless Navigation Component:** Manage navigation state without being tied to any specific routing library or UI components.
- **Headless Form Component:** Handle form logic such as validation, submission, and state management independently of UI components.
- **Headless Modal Component:** Control modal dialogs without being restricted to any particular modal UI implementation.
- **Headless Data Fetching Component:** Fetch and manage data from APIs or other sources, separate from any UI components.
- **Headless State Management Component:** Manage application state independently of UI components.

## Installation
You can install the `headless-js` library via npm or yarn:


```bash
npm install k.headless-js
# or
yarn add k.headless-js
```

## Usage
Here's an example of how to use the `useForm` hook from `headless-js` for form handling:

```jsx
import React from 'react';
import { useForm } from 'k.headless-js';

const FormComponentExample = () => {
  // Define submitForm function
  const submitForm = (values) => {
    console.log('Form submitted with values:', values);
  };

  // Initialize useForm hook with initial values and submitForm function
  const { formValues, handleChange, handleSubmit } = useForm(
    {
      username: '',
      password: '',
    },
    submitForm // Pass submitForm as the onSubmit function
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formValues.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={formValues.password}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponentExample;
```

## Contributing
Contributions to `headless-js` are welcome! If you have any ideas, suggestions, or bug fixes, please open an issue or create a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
