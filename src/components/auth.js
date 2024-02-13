import axios from "axios";

const isAuthenticated = async () => {
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="));
  if (token) {
    const tokenValue = token.split("=")[1];

    const response = await axios.post("/token", {
      token: tokenValue,
    });
    if (response.status === 200) {
      return true;
    }
  }

  return false;
};
export default isAuthenticated;
