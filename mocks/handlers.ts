import { handlers as ProjectHandlers } from "./project";
import { handlers as WorkspaceHandlers } from "./workspace";

export const handlers = [...ProjectHandlers, ...WorkspaceHandlers];
