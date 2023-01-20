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

export { routes };
