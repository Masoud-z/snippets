export const AppRouteKeys = {
  home: "/",
  snippets: {
    newSnippet: "/snippets/new",
    snippet: (id: number) => `/snippets/${id}`,
    edit: (id: number) => `/snippets/${id}/edit`,
  },
};
