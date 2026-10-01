# ByteSpace

A responsive course-platform landing page implemented from the provided ByteSpace Figma design for the Doin Tech Jr. Software Engineer (Frontend) assessment.

## Links

- [Live website](https://bytespace-new-ebon.vercel.app/)
- [GitHub repository](https://github.com/Binayakz/bytespace-new)
- [Figma design](https://www.figma.com/design/DFqqutZrVAHU2srhrRtNMy/ByteSpace-New-Check-website--Copy-?node-id=1-1067)

## Features

- Responsive landing page for desktop, tablet, and mobile screens
- Reusable layout, course-card, feature, and testimonial components
- Course search and category filtering
- Expandable course-category controls
- Responsive navigation menu
- Newsletter form validation and confirmation feedback
- Accessible headings, labels, navigation landmarks, and keyboard focus states
- Optimized local images through Next.js Image

## Technology

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint
- Vercel

## Local Development

Requirements:

- Node.js 20 or newer
- npm

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality Checks

```bash
npm run lint
npm run build
git diff --check
```

## Project Structure

```text
src/
├── app/                  # Application entry point and global styles
└── components/
    ├── brand/            # ByteSpace branding
    ├── cards/            # Reusable course cards
    ├── layout/           # Header, footer, and page container
    ├── sections/         # Landing-page sections
    └── ui/               # Shared UI primitives

public/
├── icons/
├── images/
└── logos/
```

## Deployment

The production application is deployed on Vercel from the `master` branch:

<https://bytespace-new-ebon.vercel.app/>
