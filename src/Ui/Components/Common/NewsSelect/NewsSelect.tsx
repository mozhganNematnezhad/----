import { Input } from "reactstrap";

import style from "../InputSelect/InputSelect.module.css"

type NewsProps = {
  setNewsType?: any;
  newsType?: number;
};

const NewsSelect = ({ setNewsType, newsType }: NewsProps) => {
  const handleChange = (e: any) => {
    setNewsType(+e.target.value);
  };
  return (
    <div className="flex flex-col md:flex md:flex-row text-sm items-center ml-6">
      <div>
        <p> نوع خبر:</p>
      </div>
      <Input
        type="select"
        defaultValue={newsType}
        name="typeOfNews"
        value={newsType}
        onChange={handleChange}
        className={`!w-[100px] !h-[36px] mr-2 shadow-none focus:border-[#ccc] !py-[0.3rem] !px-4 ${style.formselect}`}
      >
        <option value="1">متنی</option>
        <option value="2">ویدئویی</option>
        <option value="3">تصویری</option>
      </Input>
    </div>
  );
};

export default NewsSelect;

