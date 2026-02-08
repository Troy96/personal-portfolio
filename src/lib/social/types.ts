export interface GitHubEvent {
  id: string;
  type: string;
  repo: {
    name: string;
    url: string;
  };
  created_at: string;
  payload: {
    action?: string;
    ref?: string;
    ref_type?: string;
    description?: string;
    commits?: Array<{ message: string }>;
  };
}
