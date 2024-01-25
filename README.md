<div id="top"></div>

<div align="center">
  <a href="https://app.emergency.company">
    <img src="logo.png" alt="Logo" height="60">
  </a>
  <h2 align="center">Emergency Web App</h2>

  <p align="center">
   Saving Lives Through Technology.
    <br />
    <a href="https://app.emergency.company">Production</a>
    ·
    <a href="https://app-dev.emergency.company">Development</a>
  </p>
</div>

## About the Project

Emergency builds technology to connect and serve citizens, volunteers, and emergency managers in natural disasters. This web application is a situational awareness tool for citizens before, during, and after a natural disaster event.

### Built With

- [ReactJS](https://reactjs.org/docs/getting-started.html)
- [NodeJS 18](https://nodejs.org/en)
- [TailwindCSS 3](https://tailwindcss.com/docs)
- [MongoDB](https://www.mongodb.com/)
- [AWS](https://aws.amazon.com/)
- [ArcGIS 4.26](https://developers.arcgis.com/javascript/latest/es-modules/)
- [Webpack 5](https://webpack.js.org/)

## Getting Started

### Cloning the Repo

```bash
git clone git@github.com:EmergencyVentures/ev-webapp.git`
```

### Running the App

We use yarn instead of npm. For the root application, run `yarn` to install dependencies.

To run the app, simply run `yarn start` and use [http://localhost:3000](http://localhost:3000).

## Deployment

Deployment is automatic on PR merges:
- Merges to `develop` deploy to [https://app-dev.emergency.company](https://app-dev.emergency.company).
- Merges to `main` deploy to [https://app.emergency.company](https://app.emergency.company)

### Branching

Currently the branching strategy is to create a `DT-XX` ticket from `develop` and create a PR begining with `DT-XX` to merge. The merge will deploy to the dev site automatically after review.

Our team will create a PR to merge `develop` to `main` for deployments to production.

### Commits

All commits must follow the `semantic-release` format for proper versioning tp occur (Major.Minor.Patch):
- Major Release (ex. perf(Profile): This is a big freakin deal)
- Minor Release (ex. feat(Modal): Add new feature about stuff)
- Patch Release (ex. fix(Layers): Fix we should have caught earlier)

Beyond this table, reference the [ Angular Commit Message Conventions](https://github.com/angular/angular/blob/main/CONTRIBUTING.md)

```
  <Type>(<Scope>): <Short Summary>
    │       │             │
    │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
    │       │
    │       └─⫸ Commit Scope: The file(s), package, or functionality affected.
    │
    └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

<p align="right">(<a href="#top">back to top</a>)</p>
