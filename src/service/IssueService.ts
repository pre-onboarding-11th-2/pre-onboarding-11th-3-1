import {
  GET_ISSUE_LIST_STATUS,
  GET_ISSUE_STATUS,
} from "../constants/statusDesc";
import { extractIssueDetail, extractIssueList } from "../utils/extractIssue";
import { alertStatus } from "../utils/alertStatus";
import HttpClient from "./HttpClient";

export interface IssueItem {
  id: number;
  title: string;
  user: string;
  created_at: string;
  comments: number;
}

export interface IssueDetail extends IssueItem {
  user_avatar_url?: string;
  content?: string;
}

export interface IssueServiceType {
  getIssueList: (pageNum: number) => Promise<IssueItem[] | boolean | void>;
  getIssueDetail: (id: number) => Promise<IssueDetail | void>;
}

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
