# guftall.ir

Personal portfolio for oMid Guftall, built with the Vinext App Router and deployed to Cloudflare Workers.

## Local development

Requires Node.js 22 or newer.

```sh
npm install
npm run dev
```

## Deploy

```sh
npx cf auth login
npm run deploy
```

The Worker targets `guftall.ir` and `www.guftall.ir`.

Edit the page copy, experience timeline, skills, and project cards in `app/page.tsx`. Update metadata in `app/layout.tsx`. Add exact résumé roles and dates before launch. Contact: omid@guftall.ir.
