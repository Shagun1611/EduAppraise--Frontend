/**
 * Function to check whether a key exists or not in the local storage
 * @param {string} key - The key to be checked.
 * @returns {boolean} - True, if the key exists.
 */
export const contains = (key) => {
    return localStorage.getItem(key) !== null;
};

/**
 * Function to get the value corresponding to a key in the local storage
 * @param {string} key - The key whose corresponding value is needed.
 * @returns - The value corresponding to the key or null if not present.
 */
export const get = (key) => {
    return localStorage.getItem(key);
};

/**
 * Function to create/update a key in the local storage
 * @param {string} key - The key to be created/updated.
 * @returns {void}
 */
export const put = (key, value) => {
    localStorage.setItem(key, value);
};