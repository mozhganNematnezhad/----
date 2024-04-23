import InputSelect from "../../Common/InputSelect/InputSelect";
import Search from "../../NewsList/Search/searchNewsList";
type paginateProps = {
    search?: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    submitHandler?: any;
    filtereData?: any;
    setNewsType?: any;
    setPageSize?: any;
    pageSize?: number;
    newsType?: number;
  };
const TopStatementsList = ({
    setPageSize,
    setSearch,
    search,
    submitHandler,
    pageSize,
  }: paginateProps) => {
    return ( 
        <div className="container flex flex-col-reverse !w-[19.5rem] md:flex md:flex-row md:!w-[90rem] items-center justify-between rounded-md shadow-sm p-4 border border-solid border-[#ecf0f4] mt-10">
        <div className="flex items-center">
          <InputSelect setPageSize={setPageSize} pageSize={pageSize} />
  
        </div>
  
        <Search
          setSearch={setSearch}
          search={search}
          submitHandler={submitHandler}
        />
      </div>
     );
}
 
export default TopStatementsList;