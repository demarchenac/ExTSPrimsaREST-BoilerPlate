# ExTSPrimsaREST-BoilerPlate

This is a template repository with a REST Express API build with:

-   [Typescript](https://www.typescriptlang.org/tsconfig).
-   [TSOA](https://tsoa-community.github.io/docs/getting-started.html#initializing-our-project).
-   [Prisma 2](https://www.prisma.io/docs/getting-started/quickstart-typescript).

## Setup

The steps to properly use this template as base should be:

1. Clone this template.
2. Install the dependencies _via_ `yarn install`.
3. Add the prisma folder _via_ `npx prisma init`.
4. Build the routes and spec for the documentation _via_ `yarn tsoa:build`. **_Note:_** This will be later replaced by `docker-compose up`.
5. Start the API _via_ `yarn start`. **_Note:_** This will be later replaced by `docker-compose up`.

## To Add Later

Take into consideration the following:

-   This API is missing dockerization for the moment, this will be added later on.
-   This API is missing migrations for the database, this will be added later on.
