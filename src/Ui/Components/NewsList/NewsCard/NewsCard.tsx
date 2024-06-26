import { Link } from "react-router-dom";
import { Card, CardBody, CardSubtitle, CardText } from "reactstrap";
// react-icons
import { TiAttachmentOutline } from "react-icons/ti";

import styleNews from "../../../Components/NewsList/NewsCard/newscard.module.css";

type newsCardProp = {
  title: string;
  publishedDateTimeAsJalali: string;
  imagePath: string;
  id: string;
};

const NewsCard = (newsCard: newsCardProp) => {
  return (
    <Card
      className={`-sm cursor-pointer mb-4 ${styleNews.cardAnim}`}
      style={{
        width: "19rem",
        height: "25rem",
      }}
    >
      <img
        alt="Sample"
        className={`!rounded-sm h-60 ${styleNews.cardnewsImg}`}
        src={`https://api.dev.agroom.org/${newsCard.imagePath}`}
      />
      <CardBody>
        <CardText className={styleNews.textSummery}>{newsCard.title}</CardText>
        <CardSubtitle className="flex items-center mb-2 text-muted" tag="h6">
          <span className="text-sm mr-1 my-3">
            {newsCard.publishedDateTimeAsJalali}
          </span>
        </CardSubtitle>
        {/* <div> */}
          <Link
            to={`/news/textnew/${newsCard.id}`}
            className="text-white rounded p-2  border-[2px] border-solid border-[#066E48]
        !bg-[#066E48] !text-xs 
         hover:!text-[#066E48] hover:!font-bold hover:!bg-white"
          >
            مشاهده بیشتر
          </Link>
        {/* </div> */}
        <div className={`${styleNews.pictureNewsOverlay} ${styleNews.picBlur}`}>
          <TiAttachmentOutline className={styleNews.iconBlur} />
        </div>
      </CardBody>
    </Card>
  );
};

export default NewsCard;
