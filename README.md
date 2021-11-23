# Outside App

This is a PWA App in [Next.js](https://nextjs.org/).

## Getting Started

First, Install all the node dependencies

```bash
yarn install
```

Run Docker

```bash
UID=${UID} GID=${GID} USERNAME=${USERNAME} docker-compose up -d && docker-compose logs -f
```

Add `app.outside.pv` to /etc/hosts

>Visit [http://localhost:3003](http://localhost:3003) or [http://app.outside.pv](http://app.outside.pv) in your browser to see the result.


## Techs Used
1. Next JS
2. Typescript
3. Iconify for icons (with treeshaking)
4. Next PWA for pwa
5. WindiCss as design framework (with treeshaking)

## Caveats
Windi CSS goes through our pages and components to identify what to include. But this might be a problem when using
clasess dynamically like `p-${x}`. If we need to use these kind of patters, then we must add them to safelist in 
windi.config.ts.

For more info, Please visit: [https://windicss.org/integrations/webpack.html#safelist](https://windicss.org/integrations/webpack.html#safelist)