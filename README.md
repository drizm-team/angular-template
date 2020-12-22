# AngularTemplate

Angular Template repository.
- Set file structure
- Angular i18n
- Loading indicator with Router events and XHR requests listener (@drizm/loader)
- Rest Service
- Header Interceptor
- Unit testing stubs for HttpClient, RestService and some stub errors
- A few generic interfaces
- Shared Module
- Ng-bootstrap
- CSS(SCSS) boilerplate and a theme folder
- Default (Ubuntu) font
- Routing
- SCSS
- Default change detection strategy set to OnPush
- A new type of build and environment file 'stag'. It is the same as production but with the `debug` variable set to true and source maps enabled

## Initial setup
This template provides almost everything one would need to ship Proof of Concept applications really quickly,
 but it still needs some personalization before it is ready.
 
#### 1. Change the project name
Change project folder name if it is `angular-template` and not your project.

Go to `angular.json`, find every `angular-template` mention and change it to your project name.

Go to `package.json` and change the name.

Go to `karma.conf.js` and change the dir:
```js
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/<PROJECT_NAME>')
      // ...
    }
```

Go to `index.html` and change title.

If you have already installed the dependencies, remove `node_modules` (`rm -rf node_modules` or manually).

#### 2. Change the prefix

Go to `tslint.json` and modify following attributes:
```json
  "directive-selector": [
    true,
    "attribute",
    <PREFIX>,
    "camelCase"
  ],
  "component-selector": [
    true,
    "element",
    <PREFIX>,
    "kebab-case"
  ]
```

Go to angular.json and modify the attribute `prefix`.

Go to `app.component.ts` and change the selector name in Component metadata.

Go to `index.html` and change the selector name `<yourPrefix-root></yourPrefix-root>`.

#### 3. Install dependencies
There is probably nothing to talk about here, we've all done it. Run `npm install`.


## Want to remove some stuff?

This template is very biased and may not be fully satisfying to everyone.
 It was created for us at Drizm to save time creating boilerplate for projects with the architecture and style of Drizm devs.
 Note that you are free to fork this repository and modify it to your will,
  but in case you don't want to do it here are some tips on how to remove some of the more biased features:
  
#### Default change detection OnPush
Go to `angular.json` file and scroll down to the very bottom. Remove this snippet:
```json
  "schematics": {
    "@schematics/angular": {
      "component": {
        "changeDetection": "OnPush"
      }
    }
  }
```

#### Angular i18n
Run `npm uninstall @angular/localize`

Remove folder locale with its contents

Go to `angular.json` file
- Find and remove `"localize": true` from options
- Find and remove following configurations:
```json
  "pl": {
    "localize": [
      "pl"
    ]
  },
  "en": {
    "localize": [
      "en"
    ]
  },
  "de": {
    "localize": [
      "de"
    ]
  }
```
- Find and remove the i18n generation script `extract-i18n`

Go to package.json and remove script `generate i18n`

#### Stag environment
Go to `angular.json` file and find the `stag` configuration. Remove it.

Go to environments folder:
- Remove `environment.stag.ts`
- Remove `debug` and `stag` from `environment.ts` and `environment.prod.ts`

Go to `app.component.ts` and remove this snippet from ngOnInit:
```typescript
if (environment.production && environment.debug) {
  console.warn('WARNING: Debug mode turned on in a production environment.');
}
```

Go to `package.json` and remove script `build:stag`.

#### Loading indicator
Run `npm uninstall @drizm/loader`

Go to `app.module.ts` and remove `LoaderModule.forRoot()` from imports

Go to `app.component.html` and remove `<drizm-loader-linear></drizm-loader-linear>` 
