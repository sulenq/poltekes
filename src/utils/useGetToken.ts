import { Cookies } from "typescript-cookie";

const useGetToken = () => {
  const token = Cookies.get("token");
  if (token) {
    return token;
  }
};

export default useGetToken;
