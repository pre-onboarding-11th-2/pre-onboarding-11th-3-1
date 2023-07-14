import HttpClient from "./HttpClient";
import { IssueServiceType } from "../types/issue";
import { extractIssueDetail, extractIssueList } from "../utils/extractIssue";
import { alertStatus } from "../utils/alertStatus";
import {
  GET_ISSUE_LIST_STATUS,
  GET_ISSUE_STATUS,
} from "../constants/statusDesc";

export class IssueService extends HttpClient implements IssueServiceType {
  async getIssueList(pageNum: number) {
    return await this.axiosInstance
      .get(
        `/repos/facebook/react/issues?state=open&sort=comments&direction=desc&per_page=12&page=${pageNum}`
      )
      .then((response) => {
        const status = response.status;
        if (status === 200) {
          const isEmpty = response.data.length === 0;
          return !isEmpty ? extractIssueList(response.data) : false;
        }
        alertStatus(status, GET_ISSUE_LIST_STATUS);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  async getIssueDetail(id: number) {
    return await this.axiosInstance
      .get(`/repos/facebook/react/issues/${id}`)
      .then((response) => {
        const status = response.status;
        if (status === 200) return extractIssueDetail(response.data);
        alertStatus(status, GET_ISSUE_STATUS);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}
