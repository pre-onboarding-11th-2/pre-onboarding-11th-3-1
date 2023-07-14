import { useCallback, useState } from "react";
import { useApiContext } from "../contexts/ApiContext";
import { useDataContext } from "../contexts/DataContext";
import List from "../components/List";
import Loading from "../components/Loading";
import useObserver from "../hooks/useObserver";

const Home = () => {
  const { getIssueList } = useApiContext();
  const { issueList, issuePageNum, insertIssueList } = useDataContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const isListEmpty = issueList.length === 0;
  const isCanLoad = !isLastPage && !isLoading;

  const loadMoreItem = useCallback(async () => {
    if (isLastPage) return;
    setIsLoading(true);
    const data = await getIssueList(issuePageNum);
    if (Array.isArray(data)) {
      insertIssueList([...data]);
      setIsLoading(false);
    }
    if (!data) setIsLastPage(true);
  }, [getIssueList, insertIssueList, isLastPage, issuePageNum]);

  const { loadMoreRef } = useObserver(loadMoreItem);

  return (
    <>
      {isListEmpty ? <Loading visible={true} /> : <List data={issueList} />}
      {!isLastPage && <Loading visible={!isListEmpty} />}
      {isCanLoad && <div ref={loadMoreRef} />}
    </>
  );
};

export default Home;
