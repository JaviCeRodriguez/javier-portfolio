export interface BookmarkLink {
  url: string;
  title: string;
}

export interface BookmarkCategory {
  key: string; // translation key for the category name
  links: BookmarkLink[];
}

export const bookmarksData: BookmarkCategory[] = [
  {
    key: "bookmarks.category.person",
    links: [
      {
        url: "https://leerob.com/",
        title: "leerob.com",
      },
    ],
  },
  {
    key: "bookmarks.category.concepts",
    links: [
      {
        url: "https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction",
        title: "The Wrong Abstraction",
      },
      {
        url: "https://dev.to/wuz/stop-trying-to-be-so-dry-instead-write-everything-twice-wet-5g33",
        title: "Stop trying to be so DRY, instead Write Everything Twice (WET)",
      },
    ],
  },
];
