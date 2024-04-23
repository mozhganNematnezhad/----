import { useState, useEffect } from "react";

// api
import { GetNewsText } from "src/Core/services/public/api-newstext";
// components
import NewsCard from "src/Ui/Components/NewsList/NewsCard/NewsCard";
import TopNewsList from "src/Ui/Components/NewsList/topNewsList/topNewsList";
import Pagination from "../Common/Pagination/Pagination";
// react-icons
import { AiOutlineLoading } from "react-icons/ai";
import { GetVideo } from "src/Core/services/public/api-video";
import { useGetPhotoNews } from "src/Core/services/public/api-photonews";
import { newsEnum } from "src/Core/enum/newsEnum.enum";

const NewsList = () => {
  const [currentPage, setcurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState("");
  const [newsType, setNewsType] = useState(1);

  const [newsCard, setNewsCard] = useState<any | []>({
    totalCount: 0,
    news: [],
  });

  //for search
  const [filteredSearch, setFilteredSearch] = useState<any>([]);

  // pagination
  const round = Math.ceil(newsCard.totalCount / pageSize);

  // api newsText
  const getNewsText = GetNewsText();
  const getVidoe = GetVideo();
  const getPhotoNews = useGetPhotoNews();

  // api dropdown news-photo-video-textNews
  useEffect(() => {
    if (newsType === newsEnum.TextNews) {
      getNewsText.mutate({ page, pageSize: pageSize });
    } else if (newsType === newsEnum.VideoNews) {
      getVidoe.mutate({ page, pageSize: pageSize });
    } else {
      getPhotoNews.mutate({ page, pageSize: pageSize });
    }
  }, [newsType]);


  useEffect(() => {
    getNewsText.mutate({
      page: page,
      pageSize: pageSize,
      isActive: true,
    });
  }, [page, pageSize]);

  // textNews
  useEffect(() => {
    if (getNewsText.isSuccess) {
      const news = getNewsText.data.data.result.newsList;
      const totalCount = getNewsText.data.data.result.totalCount;

      setNewsCard({
        totalCount: totalCount,
        news: news,
      });

      setFilteredSearch(news);
    }
  }, [getNewsText.isSuccess]);

  // getVidoe
  useEffect(() => {
    if (getVidoe.isSuccess) {
      const video = getVidoe?.data?.data?.result.newsList;
      const totalCount = getVidoe.data.data.result.totalCount;
      setNewsCard({
        totalCount: totalCount,
        news: video,
      });

      setFilteredSearch(video);
    }
  }, [getVidoe.isSuccess]);

  //PhotoNews 
  useEffect(() => {
    if (getPhotoNews.isSuccess) {
      const photoNews = getPhotoNews.data.data.result.newsList;
      const totalCount = getPhotoNews.data.data.result.totalCount;
      setNewsCard({
        totalCount: totalCount,
        news: photoNews,
      });

      setFilteredSearch(photoNews);
    }
  }, [getPhotoNews.isSuccess]);

  // filterData
  const filtereData = () => {
    setFilteredSearch([])
    if (newsType === newsEnum.TextNews) {
      getNewsText.mutate({ title: search, pageSize });
    } else if (newsType === newsEnum.VideoNews) {
      getVidoe.mutate({ title: search, pageSize });
    } else {
      getPhotoNews.mutate({ title: search, pageSize });
    }
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    filtereData();
  };

  return (
    <>
      <TopNewsList
        search={search}
        setSearch={setSearch}
        setPageSize={setPageSize}
        pageSize={pageSize}
        submitHandler={submitHandler}
        filtereData={filtereData}
        setNewsType={setNewsType}
        newsType={newsType}
      />

      <div
            className="container min-h-[500px] grid xl:grid-cols-4 xl:justify-evenly lg:flex 
                        flex-wrap lg:items-center md:grid-cols-2 md:items-center
                          md:flex justify-evenly grid-col items-center mt-4"
      >
        {getNewsText.isLoading ||
        getVidoe.isLoading ||
        getPhotoNews.isLoading ? (
          <AiOutlineLoading className="text-2xl" />
        ) : filteredSearch.length ? (
          filteredSearch.map((newsCard: any) => {
            return (
              <>
                <NewsCard key={newsCard.id} {...newsCard} />
              </>
            );
          })
        ) : (
          <p>
            خبر{" "}
            {newsType === newsEnum.TextNews
              ? "متنی"
              : newsType === newsEnum.VideoNews
              ? "ویدویی"
              : newsType === newsEnum.PhotoNews
              ? "تصویری"
              : "ERR"}{" "}
            وجود ندارد
          </p>
        )}
      </div>

      {round > 1 ? (
        <Pagination
          totalCount={newsCard.totalCount}
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



// search
// useEffect(() => {
//   getNewsText.mutate({
//     title: search,
//     page: page,
//     pageSize: pageSize,
//     isActive: true,
//   });
// }, [pageSize, pageSize, search]);
