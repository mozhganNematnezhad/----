import { useMutation, useQuery } from "react-query";
import { API } from "../api/api";

const getCategory = async () => {
  return await API.get("/api/News/Category/GetCategory");
};

export const GetCategory = (onSuccess: any, onError: any) => {
  return useQuery("category", getCategory, {
    onSuccess,
    onError,
  });
};


// get all news
const getNewsText = async (value: any) => {
  return await API.post("/api/News/TextNews/GetNews", value);
};

export const GetNewsText = () => {
  return useMutation(getNewsText);
};
