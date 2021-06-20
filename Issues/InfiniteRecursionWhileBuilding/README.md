### Issue-reproduction instructions

1) Clone repo from: https://github.com/issue-repros/snowpack.git
2) Run (in path above): `npm install`
3) Run: `npm run start_noCache`
4) Observe that snowpack enters an infinite loop/recursion, when trying to dedupe the `pg-pool` package.

Screen capture:
![](https://i.imgur.com/Y6ZZhi1.gif)