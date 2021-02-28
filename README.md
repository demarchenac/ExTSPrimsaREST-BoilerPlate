# ExTSPrimsaREST-BoilerPlate

This is a template repository with a REST Express API build with:

-   [Typescript](https://www.typescriptlang.org/tsconfig).
-   [TSOA](https://tsoa-community.github.io/docs/getting-started.html#initializing-our-project).
-   [Prisma 2](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project-typescript-postgres).

## Folder Structure

``` bash
.
├── dist
├── node_modules
├── prisma
│ └── schema.prisma
├── src
│ ├── api
│ │ ├── components
│ │ │ ├── new_controller
│ │ │ │ ├── new_controller.controller.ts
│ │ │ │ ├── new_controller.service.ts
│ │ │ │ └── new_controller.types.ts
│ │ ├── middlewares
│ │ │ └── index.ts
│ │ ├── routes.ts
│ │ ├── server.ts
│ ├── config
│ │ ├── docs
│ │ │ └── swagger.json
│ │ └── globals.ts
│ ├── services
│ └── index.ts
├── .env
├── .env.example
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
├── tsoa.json
└── yarn.lock
```

## Setup

The steps to properly use this template as base should be:

1. Clone this template.
2. Install the dependencies _via_ `yarn install`.
3. Add the prisma folder _via_ `npx prisma init`.
4. Run as DEV mode with hot reload _via_ `yarn run dev`, this will launch nodemon to watch files a trigger the hot reload, re build the routes, docs, transpile typescript into javascript and lastly run the server listening for changes.

## To Add Later

Take into consideration the following:

-   This API is missing dockerization for the moment, this will be added later on.
-   This API is missing migrations for the database, this will be added later on.
