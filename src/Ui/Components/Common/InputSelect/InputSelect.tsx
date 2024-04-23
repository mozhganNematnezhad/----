import { Input } from "reactstrap";

import style from "./InputSelect.module.css"

type SelectProps = {
  setPageSize?: any;
  pageSize?: number;
};
const InputSelect = ({ setPageSize, pageSize }: SelectProps) => {
  return (
    <div className="flex flex-col md:flex md:flex-row text-sm items-center ml-6">
      <div>
        <p>تعداد نمایش:</p>
      </div>
      <Input
        type="select"
        className={`!w-[100px] !h-[36px] mr-2 shadow-none focus:border-[#ccc] !py-[0.3rem] !px-4 ${style.formselect}`}
        value={pageSize}
        onChange={(e) => {
          const newCount = +e.target.value;
          setPageSize(newCount);
        }}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="50">50</option>
      </Input>
    </div>
  );
};

export default InputSelect;
