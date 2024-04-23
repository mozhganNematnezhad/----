import { Link } from "react-router-dom";
import { Card, CardBody, CardSubtitle, CardText } from "reactstrap";
// react-icons
import { TiAttachmentOutline } from "react-icons/ti";

import styleStatements from "../../../Components/StatementsList/StatementsCard/statementscard.module.css";

type statementsCardProp = {
  title: string;
  publishedDateTimeAsJalali: string;
  imagePath: string;
  id: string;
};

const StatementsCard = (newsStatement: statementsCardProp) => {
  return (
    <Card
      className={`shadow-sm cursor-pointer mb-4 ${styleStatements.cardAnim}`}
      style={{
        width: "19rem",
        height: "25rem",
      }}
    >
      <img
        alt="Sample"
        className={`!rounded-sm h-60 ${styleStatements.cardnewsImg}`}
        src={`https://api.dev.agroom.org/${newsStatement.imagePath}`}
      />
      <CardBody>
        <CardText className={styleStatements.textSummery}>
          {newsStatement.title}
        </CardText>
        <CardSubtitle className="flex items-center mb-2 text-muted" tag="h6">
          <span className="text-sm mr-1 my-3">
            {newsStatement.publishedDateTimeAsJalali}
          </span>
        </CardSubtitle>
        <Link
          to={`/news/textnew/${newsStatement.id}`}
          className="text-white rounded p-2 
        !bg-[#066E48] !text-xs !border-none
         hover:!text-[#066E48] hover:!font-bold hover:!bg-white"
        >
          مشاهده بیشتر
        </Link>
        <div
          className={`${styleStatements.pictureNewsOverlay} ${styleStatements.picBlur}`}
        >
          <TiAttachmentOutline className={styleStatements.iconBlur} />
        </div>
      </CardBody>
    </Card>
  );
};

export default StatementsCard;
