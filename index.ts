import sdk from '@stackblitz/sdk';
import type { Project } from '@stackblitz/sdk';

const packageJson = `{
  "name": "node-starter",
  "version": "0.0.0",
  "scripts": {
    "start": "serve public"
  },
  "dependencies": {
    "serve": "^14.0.0"
  }
}`;

const project: Project = {
  title: 'Node serve demo',
  description: 'Node.js server demo using the "serve" package',
  template: 'node',
  /**
   * When you create a new project with WebContainers,
   * `project.dependencies` will be ignored
   * (if you look at the `package.json` file in the Preview,
   * only `serve` is listed as dependencies).
   * you need to provide your dependencies in the `package.json` file.
   */
  dependencies: {
    express: '^4.17.1',
    'express-graphql': '^0.12.0',
    graphql: '^15.5.0',
    nodemon: '^2.0.7',
  },
  files: {
    'package.json': packageJson,
    'public/index.html': '<h1>Hello world!</h1>',
  },
};

sdk.embedProject('embed', project, {
  openFile: 'package.json',
  height: 600,
});
