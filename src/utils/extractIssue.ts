interface RawIssueData {
  number: number;
  title: string;
  user: { login: string; avatar_url: string };
  created_at: string;
  comments: number;
  body: string;
}

const extractData = (item: RawIssueData, type: "list" | "item") => {
  const isItem = type === "item";
  const _created_at = item.created_at;
  const regex = /(\w+)-(\w+)-(\w+)T/;
  const created_at = _created_at.replace(regex, "$1년 $2월 $3일").slice(0, 13);
  return {
    id: item.number,
    title: item.title,
    user: item.user.login,
    created_at: created_at,
    comments: item.comments,
    ...(isItem && { user_avatar_url: item.user.avatar_url }),
    ...(isItem && { content: item.body }),
  };
};

export const extractIssueList = (list: RawIssueData[]) =>
  list.map((item: any) => extractData(item, "list"));

export const extractIssueDetail = (item: RawIssueData) =>
  extractData(item, "item");
