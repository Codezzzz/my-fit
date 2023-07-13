import { client } from "../client";

export type Workspace = {
  id: number;
  name: string;
};

const getWorkspaceList = async () => {
  const response = await client.get<Workspace[]>("/api/workspaces");

  return response;
};

const addWorkspace = async (name: string) => {
  const response = await client.post<Workspace>("/api/workspaces", { name });

  return response;
};

export { getWorkspaceList, addWorkspace };
