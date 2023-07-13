import { client } from "../client";

export interface Project {
  id: number;
  name: string;
  workspaceId: number;
}

const getProjectLists = async () => {
  const response = await client.get<Project[]>("/api/projects");
  return response;
};

const getProjectById = async (id: number) => {
  const response = await client.get<Project[]>(`/api/project/${id}`);
  return response;
};

const getProjectByWorkspaceId = async (id: number) => {
  const response = await client.get<Project[]>(`/api/project/workspace/${id}`);
  return response;
};

export type AddProjectParams = {
  name: string;
  workspaceId: number;
};

const addProject = async ({ name, workspaceId }: AddProjectParams) => {
  const response = await client.post<Project>("/api/projects", {
    name,
    workspaceId,
  });
  return response;
};

export { getProjectLists, getProjectById, getProjectByWorkspaceId, addProject };
