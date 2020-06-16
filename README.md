
# Alex Chao's Personal Website
[![Netlify Status](https://api.netlify.com/api/v1/badges/3ef3658f-14db-44c1-8751-4dadadc6595b/deploy-status)](https://app.netlify.com/sites/alexchao/deploys)

## Some Features
- Image optimization performed using [next-optimized-images](https://www.npmjs.com/package/next-optimized-images). Includes loading low quality placeholders in-line (base64), then loading the full quality one on top [OptimizedImage Component](./components/OptimizedImage.js)
- Made heavy use of babel aliases to make working with relative paths simpler and restructuring file structures simpler. Refer to the [.babelrc](.babelrc) file.
- Next.js [_app.js](./pages/_app.js) component wraps every page, typically used for global styling. Also used here to apply the NavBars (mobile and desktop) and Footer to every page.

## Docs
- [Next.js Documentation](https://nextjs.org/docs)
- [next-optimized-images](https://www.npmjs.com/package/next-optimized-images)