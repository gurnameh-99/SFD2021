const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/callForPapers"],
    exact: true,
    component: "CFP"
  },
  {
    path: ["/Archive"],
    exact: true,
    component: "Archive"
  },
  {
    path: ["/Schedule"],
    exact: true,
    component: "Schedule"
  }
];

export default routes;
