# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

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
```

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

### Contributors

- [Murat Artan](https://github.com/muratartan)
- [Furkan Akal](https://github.com/furkanakal)
- [Sergen](https://github.com/0xsergen)
- [Eda Akturk](https://github.com/edakturk14)

### Contributing

We welcome contributions to Ethereum Smart Contract Developer Course - TR!

Please see CONTRIBUTING.MD for more info and guidelines.