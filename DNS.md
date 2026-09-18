# DNS for indieroots.in

Point the **apex** at GitHub Pages. Leave the **rentvelo** subdomain alone.

## Keep this record

| Type | Host | Value |
| --- | --- | --- |
| CNAME | `rentvelo` | `<your-github-user>.github.io` (whatever it is today) |

Do not delete or retarget `rentvelo.indieroots.in`.

## Add / change these for the studio site

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `<your-github-user>.github.io` |

Use four A records for the apex. GitHub Pages also supports AAAA if you want IPv6:

- `2606:50c0:8000::153`
- `2606:50c0:8001::153`
- `2606:50c0:8002::153`
- `2606:50c0:8003::153`

## GitHub Pages

1. Repo Settings → Pages.
2. Source: `main`, folder `/`.
3. Custom domain: `indieroots.in`.
4. Wait for DNS check, then enable **Enforce HTTPS**.

GitHub will keep the `CNAME` file as `indieroots.in`. With the apex set, `www.indieroots.in` should redirect to `https://indieroots.in/`.
