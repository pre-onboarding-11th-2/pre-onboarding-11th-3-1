import { createContext, useContext } from "react";
import { IssueServiceType } from "../types/issue";
import { IssueService } from "../service/IssueService";

type ProviderProps = {
  children: React.ReactElement;
  issueService: InstanceType<typeof IssueService>;
};

const ApiContext = createContext<IssueServiceType | null>(null);

export const useApiContext = () => {
  const context = useContext(ApiContext);
  if (!context)
    throw new Error(
      "useApiContext has to be used within <ApiContext.Provider>"
    );
  return context;
};

const ApiProvider = ({ children, issueService }: ProviderProps) => {
  const getIssueList = issueService.getIssueList.bind(issueService);
  const getIssueDetail = issueService.getIssueDetail.bind(issueService);

  const value = {
    getIssueList,
    getIssueDetail,
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export default ApiProvider;
