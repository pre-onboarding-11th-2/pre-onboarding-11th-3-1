import { createContext, useCallback, useContext, useReducer } from "react";
import { IssueItem } from "../types/issue";

type State = {
  list: IssueItem[] | [];
  pageNum: number;
};

type Action = {
  type: string;
  data: IssueItem[];
};

interface DataContextType {
  issueList: IssueItem[] | [];
  issuePageNum: number;
  insertIssueList: React.Dispatch<IssueItem[]>;
}

const DataContext = createContext<DataContextType | null>(null);
export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context)
    throw new Error(
      "useDataContext has to be used within <DataContext.Provider>"
    );
  return context;
};

const INIT_STATE = {
  list: [],
  pageNum: 1,
};

const INSERT_LIST = "data/INSERT_LIST";

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case INSERT_LIST: {
      const data = action.data || [];
      const newList = [...state.list, ...data];
      return { ...state, list: newList, pageNum: state.pageNum + 1 };
    }
    default:
      return state;
  }
};

const DataProvider = ({ children }: { children: React.ReactElement }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const insertIssueList = useCallback(
    (data: IssueItem[]) => dispatch({ type: INSERT_LIST, data }),
    []
  );

  const value = {
    issueList: state.list,
    issuePageNum: state.pageNum,
    insertIssueList,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
