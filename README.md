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

Run the deploy script from `master`. GitHub Pages publishes the site from the `gh-pages` branch at https://vtrofin.github.io.

### First time

1. Check out `master`.
2. Do not delete the `gh-pages` branch.
3. In the repo settings, set Pages to publish from the `gh-pages` branch, folder `/`. [![Pages setting](https://i.gyazo.com/220155689821d4641e45d8b37160dd8c.png)](https://gyazo.com/220155689821d4641e45d8b37160dd8c)
4. Put `PHONE` and `EMAIL` in `.env.production`.
5. Run `pnpm install`.
6. Run `pnpm deploy`.

### Every time after that

1. Merge your changes into `master`.
2. Check out `master`.
3. Run `pnpm deploy`.
