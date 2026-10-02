# guftall.ir

Personal portfolio for Omid Dehghani, built with the Vinext App Router and deployed to Cloudflare Workers.

## Local development

Requires Node.js 22 or newer.

```sh
npm install
npm run dev
```

## Deploy to Cloudflare Workers

The Cloudflare integration is configured in `vite.config.ts` and `cloudflare.config.ts`. The Worker is set up for `guftall.ir` and `www.guftall.ir` custom domains; the domain must be active in the Cloudflare account used for deployment.

```sh
npm install
npx cf auth login
npm run deploy
```

For CI, set `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` instead of using browser login. The Cloudflare token needs permission to deploy Workers and manage custom domains.

## Personalize the content

Edit the page copy, experience timeline, skills, and project cards in `app/page.tsx`. Update the page title and social preview metadata in `app/layout.tsx`. The current copy uses public GitHub profile details and should be expanded with exact roles, dates, résumé details, and project links before launch. Contact: `omid@guftall.ir` and [@oMid_76 on Telegram](https://t.me/oMid_76).
