# Your new application

## Building and deploying an application

When you want to deploy the application, you should first build it:

```sh
npm run build
```

Make sure that the article ID matches the package name before building, as this
is used in the paths in the build folder.

To be able to deploy the application, you need to have the article checked out
in the app designer (`https://dev.obet.no/appdesigner?hostname/articleId`). Then
run the following command:

```sh
npm run deploy
```

## Folder structure

These are the recommended folders to have in the src folder:

- `components`: Components not directly linked to a feature or page. Should be reusable, potentially across multiple applications.
- `features`: Features are the core functions of the application. They are usually data bound, or execute procedures. Can potentially be reused across multiple pages. Avoid nesting too deep.
- `layout`: Base layouts for desktop and mobile and the menu if the application has multiple pages.
- `pages`: Page component are linked to URLs. Can adapt to small and big screens, and use multiple features. For simple pages, the whole page can be defined in the page file, while for bigger pages, features should be put in the `features` folder. Files and folders in this folder should be named according to the URL.

Example of a pages folder:

```
pages/
  project/
    root.js: # Page component that lists all projects (/article-id/project)
    project.js: # Page component for the selected project. Could match a parameter in the url (/article-id/project/$id)
  index.js: # Page component for the root URL (/article-id)
  about.js: # Page component for the URL `/article-id/about`
```

## Typescript (TS) definitions

Typescript definitions are generated from the data objects and procedures
defined in the article. The generation is run before starting the development
environment.

If you want to refresh the typescript definitions, run this command:
`af cra generate-types`

### Type overrides: Procedure parameters, and data object fields

You can override the types used for procedure parameters and data object fields
by modifying types.json in the project root. Add the name of the procedure or
data object as a key to the `parameterTypes` property, with a value that is a map
from parameter/field name to type.

This can be useful to fix when parameters or fields are incorrectly typed.
For example, all procedure parameters are usually nullable according to the
procedure definition.

An example overriding the type of the `Name` field of `dsPersons`, and the
`ID` parameter of procDeletePerson:

```json
// types.json
{
  "parameterTypes": {
    "procDeletePerson": {
      "ID": "number"
    },
    "dsPersons": {
      "Name": "string"
    }
  },
  }
}
```

### Type overrides: Procedure return values

It's not possible to automatically generate return types for procedures.
To add manual types, add the name of the procedure as a key to the
`procedureReturnTypes` property, with a value that a string containing
the Typescript type.

### Type overrides: customTypes.d.ts

Declaring types as strings in types.json can be cumbersome. Especially for
procedure return values. Instead you can export the type in customTypes.d.ts,
and use it in types.json with a prefix of `Custom.`.

An example adding return types to the `procGetPersons` procedure:

```ts
// customTypes.d.ts
export type CreatePersonReturnValue = {
  ID: number;
  Name: string;
}

// types.json
// Remember that procedure return values are always nested arrays (first tables, then rows)
{
  "procedureReturnTypes": {
    "procCreatePerson": "[[Custom.CreatePersonReturnValue]]"
  }
}
```

## `npm start`

Runs the app in the development mode.<br /> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br /> You will also see any lint errors
in the console.

## Deploying the application

To deploy the application to an Appframe article, use @olenbetong/appframe-cli.
When you run the `af cra deploy` command, the application will be deployed to
the article defined in the `appframe` property in `package.json`.

To publish the deployed article to production, use the `af cra publish` command.
This will take the deployed application all the way to the production server,
but will not apply the updates. You can then run `af apply -s test.obet.no` to
apply the updates.
