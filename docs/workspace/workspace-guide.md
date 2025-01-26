# NPM Workspace Introduction

This document explains the structure and usage of the NPM workspace and provides instructions for adding new projects to the `packages` folder.

## Overview

An **NPM workspace** is a set of related NPM packages that are managed in a single repository. It simplifies dependency management and makes it easy to work across multiple packages simultaneously.

In this workspace:

- All packages are stored in the `packages/` directory.
- Shared dependencies can be managed in the root `package.json`.
- Each package in `packages/` has its own `package.json`.

## Folder Structure

The workspace directory structure typically looks like this:

```

root/
├── package.json
├── docs/
├── packages/
│ ├── components/
│ │ ├── package.json
│ │ └── ...
│ ├── modules/
│ │ ├── package.json
│ │ └── ...
│ └── ...

```

- **`root/package.json`**: Contains the `workspaces` field and shared configurations.
- **`packages/`**: Holds all the individual projects (or packages).

## Creating a New Project in `packages/`

To create a new project under the `packages/` folder:

1. Navigate to the `packages` directory:

   ```bash
   cd packages
   ```

2. Create a project using vite:

   ```bash
   npm create vite@latest package-name
   ```

3. Initial install:

   ```bash
   npm install
   ```

4. Add dependencies as needed:

   ```bash
   npm install <dependency-name>
   ```

5. Ensure the `name` field in the `package.json` is unique across the workspace. For example:

   ```json
   {
     "name": "package-name",
     "version": "1.0.0"
   }
   ```

6. If this package depends on other workspace packages, you can reference them directly:
   ```bash
   npm install @workspace/components
   ```

## Benefits of NPM Workspaces

- **Unified Dependency Management**: Shared dependencies can be managed centrally.
- **Ease of Development**: Changes to one package can be directly tested in other packages without publishing to a registry.
- **Efficient Builds**: Tools like `lerna` or `turbo` can optimize builds across workspaces.

## Notes

- **Peer Dependencies**: When adding peer dependencies, ensure they're installed in the root `node_modules`.
- **Scripts**: Add shared scripts in the root `package.json` for easier execution:
  ```json
  {
    "scripts": {
      "build": "npm run build --workspaces",
      "test": "npm run test --workspaces"
    }
  }
  ```
