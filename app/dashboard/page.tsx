import { Button } from "@/components/ui/button";
import {
  ArrowLeftRight,
  CircleUser,
  DollarSign,
  GitPullRequest,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cookies } from "next/headers";
import axios from "axios";
import { truncateToFourWords } from "@/lib/utils";
import { DashboardData, Project, Issue } from "@/types/dashboard";

async function fetchDashboardData(
  userId: string,
  token: string
): Promise<DashboardData> {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/users/${userId}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return data;
}

const DashboardCard = ({
  title,
  value,
  icon: Icon,
  subtext,
}: {
  title: string;
  value: number | string;
  icon: React.ElementType;
  subtext: string;
}) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-primary2">
        {title}
      </CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground">{subtext}</p>
    </CardContent>
  </Card>
);

const ProjectsTable = ({ projects }: { projects: Project[] }) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Last Updated</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {projects.map((project) => (
        <TableRow key={project.id}>
          <TableCell>{project.title}</TableCell>
          <TableCell>{project.status}</TableCell>
          <TableCell>
            {new Date(project.updatedAt).toLocaleDateString()}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const IssuesTable = ({ issues }: { issues: Issue[] }) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Issue</TableHead>
        <TableHead>Priority</TableHead>
        <TableHead>Assigned To</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {issues.map((issue) => (
        <TableRow key={issue.id}>
          <TableCell className="max-w-xs">
            <span className="block truncate" title={issue.title}>
              {truncateToFourWords(issue.title)}
            </span>
          </TableCell>
          <TableCell>{issue.priority}</TableCell>
          <TableCell>{issue.assignee?.name}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const Dashboard = async () => {
  const token = cookies().get("token")?.value;
  const userId = cookies().get("userid")?.value;

  if (!token || !userId) {
    throw new Error("Authentication required");
  }

  const data = await fetchDashboardData(userId, token);

  return (
    <div className="flex flex-col">
      <header className="flex h-14 justify-between items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        <h3 className="text-lg dark:text-white">Dashboard</h3>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-opacity-50"
        >
          <CircleUser className="h-5 w-5" />
        </Button>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="grid gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          <DashboardCard
            title="Issues"
            value={data.developerFields?.issues?.length || 0}
            icon={GitPullRequest}
            subtext="+180.1% from last month"
          />
          <DashboardCard
            title="Balance"
            value={data.wallet}
            icon={DollarSign}
            subtext="+19% from last month"
          />
          <DashboardCard
            title="Total Payments"
            value={data.developerFields?.totalPayment || 0}
            icon={ArrowLeftRight}
            subtext="+20.1% from last month"
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <ProjectsTable projects={data.projects || []} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Issues</CardTitle>
            </CardHeader>
            <CardContent>
              <IssuesTable issues={data.developerFields?.issues || []} />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
