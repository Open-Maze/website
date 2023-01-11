![OpenMaze](https://github.com/Open-Maze/website/blob/ba5457beb0b3d9a7d977548fe9160714872885e7/public/meta.png?raw=true)

# OpenMaze website

<br />

This project was built with [Vite](https://vitejs.dev) and [Tailwind CSS](https://tailwindcss.com).

<br />

## Table of Contents

<details>
  <summary>Expand table of contents</summary>
<p>
<ul>
  <li><a href="#table-of-contents">Table of Contents</a></li>
  <li><a href="#design">Design</a></li>
  <li><a href="#deployment--testing">Deployment &amp; testing</a>
    <ul>
      <li><a href="#system-status">System status:</a></li>
      <li><a href="#build-outputs">Build outputs</a></li>
    </ul>
  </li>
  <li><a href="#version-control">Version control</a></li>
  <li><a href="#getting-started">Getting started</a></li>
  <li><a href="#directory-structure">Directory structure</a>
    <ul>
      <li><a href="#public">public</a></li>
      <li><a href="#src">src</a></li>
      <li><a href="#srcassets">src/assets</a></li>
      <li><a href="#srcblocks">src/blocks</a></li>
      <li><a href="#srccomponents">src/components</a></li>
      <li><a href="#srccore">src/core</a></li>
      <li><a href="#srcpages">src/pages</a></li>
      <li><a href="#srcstyles">src/styles</a></li>
    </ul>
  </li>
  <li><a href="#available-scripts">Available Scripts</a>
    <ul>
      <li><a href="#npm-install">npm install</a></li>
      <li><a href="#npm-run-dev">npm run dev</a></li>
      <li><a href="#npm-run-build">npm run build</a></li>
    </ul>
  </li>
  <li><a href="#learn-more">Learn more</a></li>
</ul>
</details>

<br />

## Design

The latest version of the design prototype is available via [this Figma link](https://www.figma.com/proto/bLCTGGAnhdqgre8cchLqQK/Website-design?page-id=0%3A1&node-id=1%3A151&viewport=6835%2C968%2C0.43&scaling=scale-down-width&starting-point-node-id=1%3A792)

<br />

## Deployment & testing

### System status:

[![CI](https://github.com/Open-Maze/website/actions/workflows/ci.yml/badge.svg?branch=development)](https://github.com/Open-Maze/website/actions/workflows/ci.yml)
[![CodeQL](https://github.com/Open-Maze/website/actions/workflows/codeql.yml/badge.svg?branch=development)](https://github.com/Open-Maze/website/actions/workflows/codeql.yml)
[![Deploy Main](https://github.com/Open-Maze/website/actions/workflows/deploy_main.yml/badge.svg?branch=main)](https://github.com/Open-Maze/website/actions/workflows/deploy_main.yml)
[![Deploy Staging](https://github.com/Open-Maze/website/actions/workflows/deploy_staging.yml/badge.svg?branch=staging)](https://github.com/Open-Maze/website/actions/workflows/deploy_staging.yml)
[![Prettier](https://github.com/Open-Maze/website/actions/workflows/prettier.yml/badge.svg?branch=development)](https://github.com/Open-Maze/website/actions/workflows/prettier.yml)

<br />

### Build outputs

| Branch    |                                          Build URL |
|:----------|---------------------------------------------------:|
| `main`    |                 [openmaze.io](https://openmaze.io) |
| `staging` | [staging.openmaze.io](https://staging.openmaze.io) |

<br />

## Version control

You need to version the project to ensure cache is automatically renewed for end users. Commit your changes like you normally do, but before pushing run one of the following commands depending on your changes:

- `npm version patch` for releases with only bug fixes;
- `npm version minor` for releases with new features with or without bug fixes
- `npm version major` for major releases or breaking features

Next run `git push origin development --tags` to push all created tags to the repository.

<br />

## Getting started

1. Install [NodeJS](https://nodejs.org/en) on your system
2. Make sure Husky is installed globally. If not already, run `npm install -g husky`
3. Run the following commands in the terminal:

```bash
git clone https://github.com/Open-Maze/website.git`
npm install
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

<br />

## Directory structure

### public

This directory holds all static file as well as some app icons, favicon and the app's manifest. You probably never have to edit these files.\
Only edit the `index.html` file to load external stylesheets.

### src

This directory holds the `main.jsx` file which initializes all top-level components and renders them to the `index.html` file when building.\

### src/assets

This directory holds all fonts and local images used by the OpenMaze website. Most images are imported from the OpenMaze API.

### src/blocks

All importable blocks are stored in this directory. These blocks are used to build the website's pages.

### src/components

All reusable components are stored in this directory. Each component has its own subfolder containing a `.jsx` file for the component itself, and a `.css` file for styling rules specific to this component.

### src/core

All `.jsx` files in this directory form the logic needed for the website to work properly. Page routing and API requests are initialized in here.

### src/pages

This directory holds all pages or views of the OpenMaze website.

### src/styles

Only global stylesheets are located in this directory. Most styling is done through Tailwind CSS classes. But Tailwind CSS utility classes are initialized in these files.

<br />

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the dependencies needed for this project.

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
OpenMaze website is ready to be deployed!

See the section about [deployment](https://vitejs.dev/guide/static-deploy.html) for more information.

<br />

## Learn more

To learn React, check out the [React documentation](https://reactjs.org/) or follow [this Udemy course](https://udemy.com/course/react-redux).
