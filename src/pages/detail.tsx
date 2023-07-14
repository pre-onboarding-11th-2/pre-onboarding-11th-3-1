import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApiContext } from "../contexts/ApiContext";
import { IssueDetail } from "../types/issue";
import Content from "../components/Content";
import UserAvatar from "../components/UserAvatar";
import Loading from "../components/Loading";
import ListItem from "../components/ListItem";
import { StyledMain } from "../styles/pages";

const Detail = () => {
  const { id } = useParams();
  const { getIssueDetail } = useApiContext();
  const [issue, setIssue] = useState<IssueDetail>({} as IssueDetail);
  const isLoaded = !!Object.keys(issue).length;

  useEffect(() => {
    (async () => {
      if (id) {
        const data = await getIssueDetail(parseInt(id));
        data && setIssue({ ...data });
      }
    })();
  }, [id, getIssueDetail]);

  return (
    <>
      {isLoaded ? (
        <StyledMain>
          <UserAvatar url={issue.user_avatar_url || ""} />
          <ListItem item={issue} />
          <Content data={issue.content || ""} />
        </StyledMain>
      ) : (
        <Loading visible={true} />
      )}
    </>
  );
};

export default Detail;
