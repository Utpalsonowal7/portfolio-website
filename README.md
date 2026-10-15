# Figma portfolio — Next.js, TypeScript, Tailwind CSS

A responsive implementation of the supplied **Portfolio (Community)** Figma design. The original Elias sample content is preserved so you can compare the implementation with the design. Edit `lib/portfolio.ts` to personalize the name, biography, projects, contact details, social links, and skills.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm ci
npm run setup:assets
npm run dev
```

Open `http://localhost:3000`.

## Image download status

The original SVG icons, logos, dots, quotation mark, most dividers, and Fira Code font files are included. **Seven original image files and the thin social-rail divider are not included yet.** The environment could not access Figma's image-download URLs, and the connected Figma Starter plan reached its MCP tool-call limit during retrieval.

`npm run setup:assets` downloads the missing originals into `public/assets` when you provide fresh asset URLs in a local `scripts/assets.local.json` file (copy the structure in `scripts/assets.json`). Temporary Figma download URLs are not committed to this public repository. The script rejects HTML/error pages and writes only validated image files. These URLs are temporary and expire after seven days. If they are inaccessible or expired, export the following individual image layers in Figma and save them using these filenames:

| Local filename | Figma layer | Node ID |
| --- | --- | --- |
| `public/assets/7dfd8.png` | Home → first → Group 46 → Image (hero portrait) | `10:213` |
| `public/assets/6f69b.png` | Home → about-me → Group 50 → Image (about portrait) | `23:704` |
| `public/assets/b781e.png` | ChertNodes → Rectangle 22 (project image) | `4:67` |
| `public/assets/6ca22.png` | Home → ProtectX → Rectangle 22 | `I6:23;4:67` |
| `public/assets/96c73.png` | Home → Kahoot Answers Viewer → Rectangle 22 | `I9:189;4:67` |
| `public/assets/bc097.png` | Projects → Kotik Bot → Rectangle 22 | `I42:953;4:67` |
| `public/assets/b9f5b.png` | Projects → Portfolio → Rectangle 22 | `I44:623;4:67` |
| `public/assets/6dca7.svg` | Home → media → Line 10 (Stroke), exported as SVG | within `230:1432` |

For the hero portrait, prefer **Copy/Paste as → Copy as PNG** for the image fill's original source, or save the original uploaded image. The component reproduces the crop from Figma. If exporting an already cropped layer instead, remove the nested percentage crop classes in `app/page.tsx` and use `h-full w-full object-cover` on the image.

```bash
npm run check:assets
```

The source compiles without the missing assets, but supply them before publishing or judging visual fidelity. Image references are local; there are no temporary Figma URLs used by the running application.

## Pages and components

- `/` — hero, quote, three featured projects, skills, about, contact section.
- `/projects` — five complete applications and eight smaller projects.
- `/about` — biography, compact skills list, fun facts.
- `/skills` — eight detailed skill categories, individual technology tags, and category navigation.
- `/contacts` — original contact and media layout.
- Responsive mobile navigation uses a native dialog with Escape-to-close and focus handling.
- Project actions open a project preview when no URL is supplied. Add `url` to the corresponding action in `lib/portfolio.ts` to link to a real demo or repository.
- Social icons with an empty configured URL open a contact dialog. Supply real profile URLs in `portfolio.social` to enable external navigation.
- Discord handles can be copied; email links open your mail client.
- The EN language indicator preserves the visual design. Translation is not part of this implementation.

`lib/skills.ts` contains the detailed skill categories, compact homepage rows, and extended tool list.

`components/` contains shared navigation, footer, project cards, contact cards, typography, portraits, and decorations. Layout and component styling use Tailwind; `app/globals.css` contains the Tailwind import, theme tokens, base styles, and reduced-motion behavior.

## Build and deploy

```bash
npm run typecheck
npm run check:assets
npm run build
```

Deploy the repository on Vercel with the Next.js preset, or use `npm run build` and `npm start` on a Node.js server. The contact form requires the `/api/contact` server route, so static export is disabled.

This project can be deployed independently on Vercel or static hosting.

## Design reference

Figma file: https://www.figma.com/design/gYse7ukSOayUzVGwBuoZZa/Portfolio--Community-?node-id=0-1

Reference frames: Home `1:2`, Projects `42:403`, About `45:1033`, Contacts `55:1903`, mobile header `200:1433`, mobile menu `200:1352`.

The original design attribution and sample content are retained. Check the Community file's license before redistributing its original assets.

### Updating experience

Add roles to `experiences` in `lib/experience.ts`, newest first. Each entry supports role, organization, employment type, start/end dates, location, description, achievements, and technologies. Omit `endDate` for “Present”. The homepage previews the newest entry; `/experience` displays every entry.

### Contact form email setup

Set `BREVO_API_KEY`, `BREVO_SENDER_EMAIL` (a verified Brevo sender), and `CONTACT_TO_EMAIL` in Vercel environment variables, then redeploy. For local development, copy `.env.example` to `.env.local` and fill the values. Never prefix these secrets with `NEXT_PUBLIC_`. Messages use the visitor’s address as Reply-To; the sender remains your verified address. The form includes validation, a hidden spam-trap field, loading and delivery status. No email is sent until these variables are configured.
