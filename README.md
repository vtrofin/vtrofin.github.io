One pager CV, printer friendly.
Print on A4. Letter tested on Safari, Chrome, Firefox.

## Env

```
PHONE=your phone number
EMAIL=your email address
```

## Develop

```
pnpm dev
```

Night view is the bulb in the top corner. It is stored in the browser.

## Deploy

GitHub Pages hosts the site at https://vtrofin.github.io. Do not deploy this repo to Vercel. Vercel cannot serve that hostname.

In the repo settings, Pages must stay on **Deploy from a branch**, branch `gh-pages`, folder `/`. Do not switch the source to GitHub Actions. Do not delete the `gh-pages` branch.

`master` holds the source. `gh-pages` holds the built files. Deploy from `master` after you merge.

1. Put `PHONE` and `EMAIL` in `.env.production`. The build writes those values into the HTML and the PDFs.
2. Merge the change into `master` and check out `master`.
3. Run `pnpm deploy`.

`pnpm deploy` builds a static site in `out/`, prints `cv.pdf` and `cv-western.pdf`, and pushes `out/` to `gh-pages`. When the Pages build finishes, https://vtrofin.github.io serves that commit.
