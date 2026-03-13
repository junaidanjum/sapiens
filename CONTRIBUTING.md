# Contributing

Two ways to contribute: add your profile, or fix/improve something in the codebase.

---

## Adding your profile

Fork the repo, then:

**1. Add yourself to `lib/profiles.ts`**

```ts
{
  id: "your-name",      // kebab-case — this is also your image filename
  name: "Your Name",
  roles: ["Developer"], // "Developer" | "Designer" | "Writer" | "Photographer"
  bio: "Short bio.",    // 1–2 lines
  website: "https://yourwebsite.com",
}
```

Add it at the end of the array.

**2. Drop a screenshot in `public/images/`**

- Filename must match your `id` — e.g. `your-name.png`
- PNG, full-width screenshot of your site
- Keep it under 400 KB

**3. Open a PR**

Title it `(profile): your-name` and that's it.

---

## Working on the codebase

Check the [open issues](https://github.com/junaidanjum/sapiens/issues), [`good first issue`](https://github.com/junaidanjum/sapiens/issues?q=is%3Aopen+label%3A%22good+first+issue%22) ones are scoped and ready to pick up. For anything bigger, open an issue first so we can talk through the approach.

To run it locally:

```sh
pnpm install
pnpm dev
```

Before submitting, make sure `pnpm build` and `pnpm lint` both pass.

PRs should be focused, one thing at a time. Use conventional commits (`feat:`, `fix:`, `chore:` etc).
