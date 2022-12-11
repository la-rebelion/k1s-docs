# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

```
npx create-docusaurus@latest k1s-docs classic
cd k1s-docs
```


### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
npx docusaurus start
```

Open http://localhost:3000

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

---

GitHub Photo by <a href="https://unsplash.com/@growtika?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Growtika Developer Marketing Agency</a> on <a href="https://unsplash.com/s/photos/kubernete?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
Photo by <a href="https://unsplash.com/@growtika?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Growtika Developer Marketing Agency</a> on <a href="https://unsplash.com/s/photos/kubernete?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  