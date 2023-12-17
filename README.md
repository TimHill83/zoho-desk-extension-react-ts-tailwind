# Zoho Desk Extension Sample: React + Typescript + Tailwind

This repository is showing you an example of a [Zoho Desk Extension](https://www.zoho.com/desk/extensions/guide/introduction.html) with [React 18](https://react.dev) and [TypeScript 5](https://www.typescriptlang.org).  It is based on an original template created by the team at [Wiiisdom](https://wiiisdom.com).  For a clean template, and if you don't need Tailwind, check our [their repo](https://github.com/wiiisdom/zoho-desk-extension-react-ts).

## Why?

I am trying to implement some internal extensions for my company, and I've been creating some simple samples using the documentation to get to know how Zoho desk extensions work.  These are really just my experiments, using React for developing templates.

Although this sample may seem a bit "Messy", I though it could be of use to others learning what's available, since the Zoho extensions documentation is not always the clearest, and contains some errors.

I hope this is of use, if you find yourself in the same boat as me.

## How to run these samples

You can follow the guide [here](https://www.zoho.com/desk/extensions/guide/test-extension.html), but in a nutshell:

```
yarn # install deps
zet run # run locally
```

And then be sure to activate the Developer mode on Zoho Desk side.

![screenshot](./screenshot.png)

## How to pack the extension for a release?

```
zet pack
```

## Technical information

- This extension is relying on `ts-loader` in the webpack configuration to read the `tsx`/`ts` files.
- The `ZOHODESK` object type is declared in `globals.d.ts`. I have begun extending it, but it's far from complete.
- components are located in `src/components`, see the basic `App.tsx`
- a basic test is build in `test/components`, it is relying on `vitest`.

## License

This template is available under the MIT license.

## Author

- Tim Hill (following the work of Julien Bras at Wiisdom )
