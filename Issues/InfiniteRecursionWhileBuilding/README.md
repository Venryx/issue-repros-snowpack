### Issue-reproduction instructions

1) Run: `npm install`
2) Run: `npm run start_noCache`
3) Observe that snowpack enters an infinite loop/recursion, when trying to dedupe the `pg-pool` package.