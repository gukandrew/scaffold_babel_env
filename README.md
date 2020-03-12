# scaffold_babel_env
An easy-to-use tiny babel scaffold

Scripts:
- `start` - regular run app with babel only and without webpack
- `start:inspect` - same as regular, buth with inspect option to debug app code
- `dist:build` - build dist files using webpack, withut run server
- `dist:watch` - continious (watching) build using webpack, withut run server
- `dist:start` - regular run built app, that is in dist after building using webpack
- `dist:start:watch` - run and watch app from dist folder
- `dist:start:inspect` - run and watch app from dist folder with inspector
- `dev` - build dist using webpack then serve from dist folder and watch
- `dev:inspect` - build dist using webpack then serve from dist folder and watch with inspector
