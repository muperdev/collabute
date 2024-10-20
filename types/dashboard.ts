export interface Project {
  id: string;
  title: string;
  status: string;
  updatedAt: string;
}

export interface Issue {
  id: string;
  title: string;
  priority: string;
  assignee?: {
    name: string;
  };
}

export interface DashboardData {
  wallet: number;
  projects?: Project[];
  developerFields?: {
    issues?: Issue[];
    totalPayment?: number;
  };
}
