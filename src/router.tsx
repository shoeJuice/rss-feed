import { createBrowserRouter, createMemoryRouter } from "react-router-dom";
import MainLayout from "./routes/MainLayout";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/settings", element: <div>Settings</div> },
      { path: "/search", element: <div>Search</div> },
    ],
  },
];

const router = createBrowserRouter(routes);
const memRouter = createMemoryRouter(routes, {initialEntries: ['/']})

export { routes, memRouter };
export default router;