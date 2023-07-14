import { Link } from "react-router-dom";
import { StyledLi } from "../styles/components";
import { IssueItem } from "../types/issue";

type ListItemProps = {
  item: IssueItem;
};

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  return (
    <StyledLi>
      <Link to={`/detail/${item.id}`}>
        <div>{`#${item.id} ${item.title}`}</div>
        <div>{`작성자: ${item.user}, 작성일: ${item.created_at}`}</div>
        <div>{`코멘트: ${item.comments}`}</div>
      </Link>
    </StyledLi>
  );
};

export default ListItem;
