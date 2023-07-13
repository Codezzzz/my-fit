import { rest } from "msw";
import { Workspace } from "~/libs/apis/workspace";

const workspaces: Workspace[] = [
  { id: 1, name: "Workspace 1" },
  { id: 2, name: "Workspace 2" },
];

const getWorkspaceList = rest.get(
  "http://example.com/api/workspaces",
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(workspaces));
  },
);

const getWorkspaceById = rest.get(
  "http://example.com/api/workspace/:id",
  (req, res, ctx) => {
    const workspaceId = req.params.id;
    const workspace = workspaces.find(
      workspace => workspace.id === Number(workspaceId),
    );
    if (!workspace) {
      return res(ctx.status(404));
    }
    return res(ctx.status(200), ctx.json(workspace));
  },
);

const addWorkspace = rest.post(
  "http://example.com/api/workspaces",
  (req, res, ctx) => {
    const { name } = req.body as { name: string };
    const newWorkspace: Workspace = {
      id: workspaces.length + 1,
      name,
    };
    workspaces.push(newWorkspace);
    return res(ctx.status(200), ctx.json(newWorkspace));
  },
);

export const handlers = [getWorkspaceList, getWorkspaceById, addWorkspace];
