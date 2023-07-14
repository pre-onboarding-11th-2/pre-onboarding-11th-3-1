import React from "react";
import ListItem from "./ListItem";
import Ad from "./Ad";
import { IssueItem } from "../types/issue";
import { StyledUl } from "../styles/components";

type ListProps = {
  data: IssueItem[];
};

const A_HREF = "https://www.wanted.co.kr/";
const IMG_SRC =
  "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100";

const List: React.FC<ListProps> = ({ data }) => {
  const getList = data.map((item, index) => {
    return (
      <React.Fragment key={item.id}>
        {index !== 0 && index % 4 === 0 && (
          <Ad aHref={A_HREF} imgSrc={IMG_SRC} />
        )}
        <ListItem item={item} />
      </React.Fragment>
    );
  });

  return <StyledUl>{getList}</StyledUl>;
};

export default List;
