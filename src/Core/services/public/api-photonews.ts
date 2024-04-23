import { useMutation } from "react-query";
import { API } from "../api/api";


const getPhotoNews = async (value: any) => {
  return await API.post("/api/News/PhotoNews/GetNews", value);
};

export const useGetPhotoNews = () => {
  return useMutation(getPhotoNews);
};
