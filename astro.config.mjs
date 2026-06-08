import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// `site` and `base` are auto-derived from GitHub Actions env vars, so the
// site Just Works on any fork without anyone editing this file:
//   GITHUB_REPOSITORY        = "<owner>/<repo>"
//   GITHUB_REPOSITORY_OWNER  = "<owner>"
//
// The MD Docs preview server overrides those with MDDOCS_PREVIEW_SITE /
// MDDOCS_PREVIEW_BASE when it builds the staging branch for review, so
// the same config produces the right URLs in both modes.
//
// If you wire up a custom domain, set `site` to that domain and remove
// the `base` line. For local dev (`npm run dev`) none of these are set
// and we fall back to plain defaults.

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'docs';
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? 'user';
const siteUrl = process.env.MDDOCS_PREVIEW_SITE ?? `https://${owner}.github.io`;
const basePath = process.env.MDDOCS_PREVIEW_BASE ?? `/${repo}`;

export default defineConfig({
  site: siteUrl,
  base: basePath,
  integrations: [
    starlight({
      title: 'My Docs',
      description: 'Documentation, edited with AI.',
      // Sidebar auto-generates from src/content/docs/ by default.
    }),
  ],
});
