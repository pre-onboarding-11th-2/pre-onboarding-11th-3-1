import { RouterProvider } from "react-router-dom";
import { routers } from "./router";
import ApiProvider from "./contexts/ApiContext";
import DataProvider from "./contexts/DataContext";
import { IssueService } from "./service/IssueService";

const App = () => {
  const issueService = new IssueService();

  return (
    <ApiProvider issueService={issueService}>
      <DataProvider>
        <RouterProvider router={routers} />
      </DataProvider>
    </ApiProvider>
  );
};

export default App;
