import { createContext, useState, useEffect } from "react";
import { UseGetSetting } from "../services/public/api-footer";
type childrenProps = {
  children: React.ReactNode;
};
export const helmetContext = createContext<any>(null);
const HelmetProvider = ({ children }: childrenProps) => {
  const [Footername, setFootername] = useState<any>();
  const { data, isLoading } = UseGetSetting();
  useEffect(() => {
    const footerData = data?.data?.result?.name;
    console.log("footerData44444---", footerData);
    setFootername(footerData);
  }, [isLoading]);
  return (
    <helmetContext.Provider value={{ Footername }}>
      {children}
    </helmetContext.Provider>
  );
};

export default HelmetProvider;
