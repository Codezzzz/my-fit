import { rest } from "msw";
import { Project } from "~/libs/apis/project";

const projects: Project[] = [
  { id: 1, name: "Project 1", workspaceId: 1 },
  { id: 2, name: "Project 2", workspaceId: 1 },
  { id: 3, name: "Project 3", workspaceId: 2 },
  { id: 4, name: "Project 4", workspaceId: 0 }, // project에 종속되지 않는 workspace
];

const getProjectList = rest.get(
  "http://example.com/api/projects",
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(projects));
  },
);

const getProjectById = rest.get(
  "http://example.com/api/project/:id",
  (req, res, ctx) => {
    const projectId = req.params.id;
    const project = projects.find(project => project.id === Number(projectId));
    if (!project) {
      return res(ctx.status(404));
    }
    return res(ctx.status(200), ctx.json(project));
  },
);

const getProjectByWorkspaceId = rest.get(
  "http://example.com/api/project/workspace/:id",
  (req, res, ctx) => {
    const workspaceId = req.params.id;
    const filteredProjects = projects.filter(
      project => project.workspaceId === Number(workspaceId),
    );
    return res(ctx.status(200), ctx.json(filteredProjects));
  },
);

const addProject = rest.post(
  "http://example.com/api/projects",
  (req, res, ctx) => {
    const { name, workspaceId } = req.body as {
      name: string;
      workspaceId: number;
    };
    const newProject: Project = {
      id: projects.length + 1,
      name,
      workspaceId,
    };
    projects.push(newProject);
    return res(ctx.status(200), ctx.json(newProject));
  },
);

export const handlers = [
  getProjectList,
  getProjectById,
  getProjectByWorkspaceId,
  addProject,
];
