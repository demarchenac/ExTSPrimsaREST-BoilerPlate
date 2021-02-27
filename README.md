# ExTSPrimsaREST-BoilerPlate

This is a template repository with a REST Express API build with:
- [Typescript](https://www.typescriptlang.org/tsconfig).
- [TSOA](https://tsoa-community.github.io/docs/getting-started.html#initializing-our-project).
- [Prisma 2](https://www.prisma.io/docs/getting-started/quickstart-typescript).

## Setup

The steps to properly use this template as base should be:
1. Clone this template.
2. Install the dependencies *via* ``` yarn install ```.
3. Add the prisma folder *via* ``` npx prisma init ```.
4. Build the routes and spec for the documentation *via* ``` yarn tsoa:build ```, this will be later replaced by ``` docker-compose up ```.
4. Start the API *via* ``` yarn start ```, this will be later replaced by ``` docker-compose up ```.

## To Add Later 
Take into consideration the following:
- This API is missing dockerization for the moment, this will be added later on.
- This API is missing migrations for the database, this will be added later on.
