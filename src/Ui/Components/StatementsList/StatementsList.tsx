import { useState, useEffect } from "react";
// api
import { GetStatement } from "src/Core/services/public/api-statement";
// components
import StatementsCard from "./StatementsCard/StatementsCard";
import Pagination from "../Common/Pagination/Pagination";
// react-icons
import { AiOutlineLoading } from "react-icons/ai";
import TopStatementsList from "./topStatementsList/topStatementsList";

const NewsList = () => {
  const [currentPage, setcurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState("");

  const [newsStatement, setNewsStatement] = useState<any | []>({
    totalCount: 0,
    statementList: [],
  });

  //  for search
  const [filteredSearch, setFilteredSearch] = useState<any>([]);

  // pagination
  const round = Math.ceil(newsStatement.totalCount / pageSize);

  const getMutation = GetStatement();
  useEffect(() => {
    getMutation.mutate({
      page: page,
      pageSize: pageSize,
      isActive: true,
    });
  }, [pageSize, page]);

  useEffect(() => {
    if (getMutation.data && getMutation.data.data) {
      const statement = getMutation.data.data.result.statementList;
      const totalCount = getMutation.data.data.result.totalCount;
      setNewsStatement({
        totalCount: totalCount,
        statementList: statement,
      });

      setFilteredSearch(statement);
    }
  }, [getMutation.data]);

  // api all news ==serach
  const filtereData = () => {
    getMutation.mutate({ title: search, pageSize });
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    filtereData();
  };

  return (
    <>
      <TopStatementsList
        search={search}
        setSearch={setSearch}
        setPageSize={setPageSize}
        pageSize={pageSize}
        submitHandler={submitHandler}
        filtereData={filtereData}
      />
      {/* <TopNewsList
        search={search}
        setSearch={setSearch}
        setPageSize={setPageSize}
        pageSize={pageSize}
        submitHandler={submitHandler}
        filtereData={filtereData}
        setNewsType={setNewsType}
        newsType={newsType}
      /> */}
      <div className="container min-h-[500px] grid xl:grid-cols-4 xl:justify-evenly lg:flex flex-wrap lg:items-center md:grid-cols-2 md:items-center md:flex justify-evenly grid-col items-center mt-4">
        {getMutation.isLoading ? (
          <AiOutlineLoading className="text-2xl" />
        ) : filteredSearch.length ? (
          filteredSearch.map((newsStatement: any) => {
            return (
              <>
                <StatementsCard key={newsStatement.id} {...newsStatement} />
              </>
            );
          })
        ) : (
          <p>بیانیه ای وجود ندارد</p>
        )}
        {/* {getMutation.isLoading ? (
          <AiOutlineLoading />
        ) : (
          filteredSearch &&
          filteredSearch.map(
            (newsStatement: any) => (
              <StatementsCard key={newsStatement.id} {...newsStatement} />
            )
          )
        )} */}
      </div>

      {round > 1 ? (
        <Pagination
          totalCount={newsStatement.totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          setcurrentPage={setcurrentPage}
          setPage={setPage}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default NewsList;
