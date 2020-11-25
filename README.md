# Arena Mods

Use this boilerplate to create new layouts for Are.na channels.

[Preview](https://moritzebeling.github.io/arena-mods/)

## Install

You will need to have Git and [Node.js](https://nodejs.org) installed.

```
git clone git@github.com:moritzebeling/arena-mods.git
cd arena-frontend
npm install
```

## Develop

```
npm run dev
```

Go to `src/Index.svelte` and start working from there.

This boilerplate uses [Svelte](https://svelte.dev) as Javascript frontend framework.

## Arena API
https://dev.are.na/documentation/channels

Get all info about a given channel:
- `https://api.are.na/v2/channels/{channel-id}`

Get the content of a given channel:
- `https://api.are.na/v2/channels/{channel-id}/contents`
