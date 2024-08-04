export const AppRouteKey = {
  homePage: "/",
  snippets: {
    addNewSnippet: "/snippet/new",
    showSnippet: (id: number) => `/snippet/${id}`,
    editSnippet: (id: number) => `/snippet/${id}/edit`,
  },
};
