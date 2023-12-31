## Introduction

Implementation of a minimal viable DEX dapp on Ethereum, built with Next.js, ThirdWeb and Tailwind.

This application will demonstrate how to:
- Approve the contract
- Bootstrap liquidity
- Deposit to the Liquidity Pool(LP)
- Perform Swaps

We will be implementing a simplified, basic DEX, similar to UniswapV1 and go into how the x*y=k curve functions
and the impact of swaps on that curve that dictate the price delta and mid-price of assets on the protocol.

We will interact with the deployed smart contract via scripts and via a front-end UI.

## Setup up .env file

Create an account on https://thirdweb.com/ and grab your client ID.

Copy `.env.example` file and create local config file:

```
cp .env.example .env.local
```

Then update `.env.local` file:
```
NEXT_PUBLIC_TEMPLATE_CLIENT_ID=
```

## Run Application

Run the application locally:

```
npm run dev
```

Then, navigate to http://localhost:3000 in your browser with a wallet plugin such as https://metamask.io/

### Frameworks

- [ThirdWeb](https://thirdweb.com/)
- [Next.js](https://nextjs.org/) – React framework for building performant apps with the best developer experience

### UI

- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development
- [Radix](https://www.radix-ui.com/) – Primitives like modal, popover, etc. to build a stellar user experience
- [Framer Motion](https://framer.com/motion) – Motion library for React to animate components with ease
- [Lucide](https://lucide.dev/) – Beautifully simple, pixel-perfect icons
- [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) – Optimize custom fonts and remove external network requests for improved performance
- [`ImageResponse`](https://beta.nextjs.org/docs/api-reference/image-response) – Generate dynamic Open Graph images at the edge
- [`react-wrap-balancer`](https://github.com/shuding/react-wrap-balancer) – Simple React component that makes titles more readable

### Hooks and Utilities

- `useIntersectionObserver` –  React hook to observe when an element enters or leaves the viewport
- `useLocalStorage` – Persist data in the browser's local storage
- `useScroll` – React hook to observe scroll position ([example](https://github.com/steven-tey/precedent/blob/main/components/layout/navbar.tsx#L12))
- `nFormatter` – Format numbers with suffixes like `1.2k` or `1.2M`
- `capitalize` – Capitalize the first letter of a string
- `truncate` – Truncate a string to a specified length
- [`use-debounce`](https://www.npmjs.com/package/use-debounce) – Debounce a function call / state update

### Code Quality

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [Prettier](https://prettier.io/) – Opinionated code formatter for consistent code style
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript

## Author

- [Chris Anatalio](https://twitter.com/CAnatalio)

<a href="https://precedent.dev">Built with Precedent</a>