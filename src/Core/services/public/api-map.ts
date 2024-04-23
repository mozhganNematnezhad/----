import { useQuery } from "react-query";
import { API } from "../api/api";


const getMap = async () => {
    return await API.get("/api/Map/GetProvince");
  };
  
  export const GetMap = () => {
    return useQuery("map", getMap);
  };

  // getProviencemap

  const getMapProvince = async () => {
    return await API.get("/api/Map/GetProvinceMap");
  };
  
  export const useGetMapProvince = () => {
    return useQuery("province", getMapProvince);
  };