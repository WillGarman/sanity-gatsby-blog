export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62cf20ff9951cf30cb283f53",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-f6wmu183",
                  apiId: "f49c869f-4984-4077-b5b0-00ac0a0edb2e",
                },
                {
                  buildHookId: "62cf20ff80ae69305186afca",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-xut41fi3",
                  apiId: "04c9b3a0-310e-4609-ac62-e1de85c699bd",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/WillGarman/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-xut41fi3.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
