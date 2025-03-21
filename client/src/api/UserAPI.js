import { useState, useEffect } from "react";
import axios from "axios";

export const UserAPI = (token) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const response = await axios.get("http://localhost:9999/user/info", {
            headers: { Authorization: token },
          });

          setIsLogged(true);
          response.data.isAdmin === true ? setIsAdmin(true) : setIsAdmin(false);
        } catch (error) {
          alert(error.response.data.message);
        }
      };

      getUser();
    }
  }, [token]);

  return {
    isLogged: [isLogged, setIsLogged],
    isAdmin: [isAdmin, setIsAdmin],
  };
};
