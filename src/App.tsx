import { Helmet } from "react-helmet";
import { RouterProvider } from "react-router-dom";
import { router } from "./Configs/RoutConfig/Routes";
import { useState,useContext,useEffect } from "react";
import { UseGetSetting } from "./Core/services/public/api-footer";
import { helmetContext } from "./Core/Context/helmetProvider";
const App = () => {
  const {Footername}  = useContext(helmetContext)
  // const [Footername, setFootername] = useState<any>();
  // const { data, isLoading } = UseGetSetting();
  // useEffect(() => {
  //   const footerData = data?.data?.result?.name;
  //   console.log("footerData44444---", footerData);
  //   setFootername(footerData);
  // }, [isLoading]);
  return (
    <>
      <Helmet>
        <title>{Footername}</title>
        {/* <link
          rel="shortcut icon"
          type="image/x-icon"
          href={`https://adminapi.agroom.org/${Footer?.logoImageAddress}`}
        /> */}
      </Helmet>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
