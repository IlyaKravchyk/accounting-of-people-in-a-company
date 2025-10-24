export const setLocalStorage = (value) => localStorage.setItem("employees", JSON.stringify(value));
export const getLocalStorage = () => JSON.parse(localStorage.getItem("employees"));
