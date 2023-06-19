import axios from "axios";
import { GITHUB_API } from "./api";
import { useQuery } from "react-query";

const getUserInfo = async () => {
  try {
    const data = await axios.get(`${GITHUB_API}/user`, {
      headers: {
        Authorization: process.env.REACT_APP_GITHUB_TOKEN,
        "Content-Type": "application/json",
      },
    });
    return data.data;
  } catch (err) {
    console.error(err);
  }
};

export const useUser = () => {
  return useQuery(["userInfo"], () => getUserInfo, { staleTime: "Infinity" });
};
