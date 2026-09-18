# IndieRoots — studio site

Static GitHub Pages site for [https://indieroots.in/](https://indieroots.in/).

IndieRoots builds simple apps for people who run things in India.

- [RentVelo](https://rentvelo.indieroots.in/) — rent management for landlords
- GymKarta — gym management for gym owners (store URLs in `js/config.js`)

## Pages

- `/` Home
- `/products/` RentVelo and GymKarta
- `/about/` Studio
- `/contact/` `indierootsapps@gmail.com`

## Local preview

```bash
cd indieroots-site
python3 -m http.server 8780
```

Open http://127.0.0.1:8780/

## GymKarta store links

Edit `js/config.js`:

```js
gymkarta: {
  appStore: "https://apps.apple.com/...",
  playStore: "https://play.google.com/store/apps/details?id=..."
}
```

Drop a screenshot into `assets/` and point the GymKarta image on `/products/` at it when you have one.

## Deploy

This folder should be its **own** GitHub repository (not the RentVelo site). `gh` on this machine currently has an expired login.

```bash
cd indieroots-site
git init -b main
git add -A
git commit -m "Add IndieRoots studio site"
gh auth login
gh repo create indieroots-site --public --source=. --remote=origin --push
```

Then:

1. GitHub repo Settings → Pages → Deploy from `main` `/`.
2. Custom domain: `indieroots.in` (turn HTTPS on after DNS).
3. Follow `DNS.md`. Do **not** change the `rentvelo` DNS record.
4. Follow `SEARCH-CONSOLE.md`.

The `CNAME` file in this repo must stay `indieroots.in`.
# indieroots-site
