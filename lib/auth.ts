import axios from "axios";

export async function loginUser(email: string, password: string) {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/users/login`, {
      email,
      password,
    });

    return {
      token: response.data.token,
      user: response.data.user,
    };
  } catch (error) {
    console.error("Login error:", error);
    throw new Error("Failed to log in");
  }
}