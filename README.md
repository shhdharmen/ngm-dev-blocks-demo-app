# Sample Angular Workspace Configured for "Angular Material Blocks"

## Getting started

### 1. Clone the repo

```bash
git clone https://github.com/shhdharmen/ngm-dev-blocks-demo-app
cd ngm-dev-blocks-demo-app
```

### 2. Install dependencies

```bash
npm i
```

### 3. Start dev server

```bash
npm start
```

## Changing Colors

To change colors, take a look at [tokens.scss](./src/tokens.scss) file. Or if you want to use pre-built themes, remove `tokens.scss` from `styles` array in [anglar.json](./angular.json) file.

## Changing typography

To change font-families, take a look at [_variables.scss](./src/_variables.scss) file. Or if you want to use `Roboto` font, simply make changes in [styles.scss](./src/styles.scss) and [index.html](./src/index.html).

## What's included?

- Initial setup done using `npx @ngm-dev/cli init`.
  - `@angular/material` with custom theme
  - `tailwindcss` with all the needed configuration
  - [Material symbols](https://fonts.google.com/icons) configured ready to use with `mat-icon` component
  - Required [styles](./src/app/ngm-dev-blocks/styles) included for Angular Material Blocks to run properly
- **Inter** and **Poppins** configured for `plain` and `brand` typographies
- Added below blocks to try out, present at [📁 ngm-dev-blocks](./src/app/ngm-dev-blocks/) folder
  - [Login with email & password](https://ui.angular-material.dev/blocks/application/forms/authentication#login-email-password)
  - [Badge 1](https://ui.angular-material.dev/blocks/application/elements/badges#badge-1)
  - [Dialog 1](https://ui.angular-material.dev/blocks/application/overlays/dialogs#dialog-1)
  - [Onboarding feed 1](https://ui.angular-material.dev/blocks/application/lists/onboarding#onboarding-feed-1)
  - [Simple with icons list](https://ui.angular-material.dev/blocks/application/lists/feeds#simple-with-icons)
  - [Grid List 1](https://ui.angular-material.dev/blocks/application/lists/grid-lists#grid-list-1)
  - [Page Shell 1](https://ui.angular-material.dev/blocks/application/application-shells/page-shells#page-shell-1)
  - [Nav With Page Header](https://ui.angular-material.dev/blocks/application/application-shells/stacked-layouts#nav-with-page-header)
  - [Full Width Three Column](https://ui.angular-material.dev/blocks/application/application-shells/multi-column#full-width-three-column)
  - [Page Heading With meta and actions](https://ui.angular-material.dev/blocks/application/headings/page-headings#page-heading-1)

## What's next?

You can explore blocks from <https://ui.angular-material.dev/> and start adding them using `npx @ngm-dev/cli add` command.

## Ready for more?

[![](./cover.png)](https://ui.angular-material.dev/)
