import { useEffect } from "react";
import { useStateContext } from "../context/ContextProvider";

const useFetchUser = (url) => {
    const {  user, setUser} = useStateContext();
    

  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        setUser(data);

        localStorage.setItem("user", JSON.stringify(data));
      });
  }, [url, setUser]);

  return [user];
};

export default useFetchUser;