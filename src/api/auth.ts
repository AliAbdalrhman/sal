import axiosInstance from ".";

function login(loginData: LoginData) {
  axiosInstance.post("/login", loginData);
}

const authApi = { login };

export default authApi;
