export const AppRouteKeys = {
  home: "/",
  snippets: {
    newSnippet: "/snippets/new",
    showSnippet: (id: number) => `/snippets/${id}`,
    editSnippet: (id: number) => `/snippets/${id}/edit`,
  },
};
