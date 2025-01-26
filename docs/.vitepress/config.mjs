import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Material UI Boilerplate",
  description: "Created By JoshLeatherland",
  base: "/react-vite-mui-storybook-boilerplate/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Get Started", link: "/introduction/get-started" },
    ],
    sidebar: [
      {
        text: "Introduction",
        items: [{ text: "Getting Started", link: "/introduction/get-started" }],
      },
      {
        text: "Workspace",
        items: [{ text: "Introduction", link: "/workspace/workspace-guide" }],
      },
      {
        text: "Components",
        items: [
          { text: "Overview", link: "/components/overview" },
          { text: "AppBar", link: "/components/appbar" },
          { text: "Button", link: "/components/button" },
          { text: "Dialog", link: "/components/dialog" },
          { text: "TextField", link: "/components/textfield" },
          { text: "Modal", link: "/components/modal" },
          { text: "Select", link: "/components/select" },
          { text: "Snackbar", link: "/components/snackbar" },
          { text: "Switch", link: "/components/switch" },
          { text: "Table", link: "/components/table" },
          { text: "Tabs", link: "/components/tabs" },
          { text: "Typography", link: "/components/typography" },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/JoshLeatherland/react-vite-mui-storybook-boilerplate",
      },
    ],
  },
});
