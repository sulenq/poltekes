import React, { useState, useEffect } from "react";
import FullPageLogo from "../components/FullPageLogo";
import { getCookie } from "typescript-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type Props = { children: JSX.Element };

export default function RequireAuth({ children }: Props) {
  const [page, setPage] = useState(<FullPageLogo />);
  // const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const userData = getCookie("userData");

  useEffect(() => {
    const options = {
      method: "get",
      baseURL: process.env.REACT_APP_BASE_URL,
      url: "api/user/logindata  ",
    };

    async function auth() {
      // setLoading(true);

      try {
        const response = await axios.request(options);
        console.log(response);
        if (response.status === 200) {
          setPage(children);
        } else {
          navigate("/customer");
        }
      } catch (error) {
        console.log(error);
      } finally {
        // setLoading(false);
      }
    }
    auth();
  }, [children, navigate, userData]);

  return page;
}
