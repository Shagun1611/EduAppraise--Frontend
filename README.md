# Code Conventions for Tech Alchemists' MERN App

To ensure consistency and readability in our project, all team members are expected to follow these conventions when contributing to the codebase.

## 1. Variable Naming
- Use **camelCase** for variable and function names.
  - Example: `let userName = "John Doe";`

## 2. Commenting
- All functions should include comments to explain their purpose, preferably using **JSDoc** format.
  - Example:
    ```js
    /**
     * Function to add two numbers.
     * @param {number} a - The first number.
     * @param {number} b - The second number.
     * @returns {number} - The sum of a and b.
     */
    function addNumbers(a, b) {
      return a + b;
    }
    ```

## 3. Indentation
- Indentation should use **tabs**, with a tab size of **4** spaces.
  - Ensure consistency across all files.
- Steps:
  - Head over to the bottom bar on VS Code
  - Look for `Spaces`/`Tab Size`
  - After clicking, select `Indent Using Tabs`
  - Then select, `4` as the size
- Use `Alt + Shift + F` or right click and format the code

## 4. File Naming
- For **React Components**, the file name should be `index.js` inside a folder named after the component.
  - Example:
    ```
    /components
      /Header
        index.js
        Header.module.scss
    ```

## 5. CSS/SCSS
- Use **SCSS** for styling, with files named as `*.module.scss` to avoid `className` conflicts across different components.
  - Example: `Header.module.scss`
- Structure SCSS files in modules when applicable for better reusability and encapsulation.
