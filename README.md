One pager CV, printer friendly.
Print on A4, Letter tested on Safari, Chrome, Firefox

## Env configuration

See more [here](https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/#google-analytics-env-var-example)

.env.development

```
PHONE=your phone number
EMAIL=your email address
MAIN_SITE= url to the referring website
```

Need to create an .env file for production as well

## Deploy

- Attention! Webpack builds the static files server side => no access to window object. Need to access window only after page renders. => use in lifecycle methods for classes (e.g. componentDidMount) or hooks for function components (e.g. useEffect). See more [here](https://github.com/gatsbyjs/gatsby/issues/309#issuecomment-223360361) and [here for hooks](https://www.ibrahima-ndaw.com/blog/replace-component-lifecycle-with-useEffect/)

### For the first time

- See all the lengthy details [here](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/)
- GIST: Will run deploy script from master branch but will publish site from gh-pages branch

1. go to master branch
2. Do not delete gh-pages branch on github!!
3. `npm install -g gh-pages --save-dev` (if not present on device)
4. Set up gh-pages as publishing branch in Github repo settings [![Image from Gyazo](https://i.gyazo.com/220155689821d4641e45d8b37160dd8c.png)](https://gyazo.com/220155689821d4641e45d8b37160dd8c)
5. Add `module.exports = { pathPrefix: '/vtrofin.github.io', ... }` to `gatsby-config.js`
6. `npm run deploy`

### After initial config and first deploy

1. merge all changes to master
2. go to master branch
3. `npm run deploy`
