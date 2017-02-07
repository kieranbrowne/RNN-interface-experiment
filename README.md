# RNN Interface Experiment

## Development Mode

```
lein clean
lein figwheel dev
lein sass watch
```

Browse to [http://localhost:3449](http://localhost:3449).

## Production Build

```
lein clean
lein cljsbuild once min
```

## Publish on Github Pages

```
git subtree push --prefix resources/public/ origin gh-pages
```

Browse to `http://*your-gh-username*.github.io/*repository-name*`

