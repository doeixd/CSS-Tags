# Legacy documentation mirror

The deployed documentation application lives in `website-next/`. This directory
is retained as a compatibility mirror while older tooling and links are phased
out; it is not the source of truth and is not deployed by the Pages workflow.

Do not edit `src/content/docs` here. Edit the matching content in
`website-next/src/content/docs`, then run:

```sh
cd website-next
npm run sync:legacy-content
```

`npm run check:legacy-content` verifies that the mirror has not drifted.
