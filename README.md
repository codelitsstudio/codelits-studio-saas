# Codelits Studio Next.js SaaS & AI Dashboard Boilerplate

This project is a comprehensive boilerplate for building modern SaaS applications. It includes a complete marketing landing page, a multi-level navigation system, a full suite of dashboard pages, and built-in AI capabilities powered by Google's Genkit. It's built with Next.js, TypeScript, and styled with Tailwind CSS and shadcn/ui.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **AI Integration:** [Genkit](https://firebase.google.com/docs/genkit) (with Google AI)
- **Animation:** [GSAP](https://gsap.com/) & [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/guide/packages/lucide-react)

## Features

- **Marketing Pages:** A beautiful, animated landing page with hero and feature sections, plus pricing cards.
- **Authentication Flow:** Pre-built pages for Login, Sign Up, and Forgot Password.
- **Dynamic Navigation:** A sophisticated, two-level navigation system that is fully responsive.
  - A primary, icon-based navigation bar that expands on hover.
  - A secondary, context-aware navigation panel for each primary section.
- **Dashboard & Management:** A complete set of pre-built dashboard pages:
  - **Dashboard Overview:** With stats cards and charts.
  - **AI Portfolio:** A showcase for AI-powered tools, demonstrating Genkit integration.
  - **Team Management:** Invite and manage team members.
  - **Billing & Subscriptions:** Manage plans and view billing history.
  - **Support Tickets:** A system for users to submit and track support requests.
  - **Settings:** Pages for profile, security, and branding.
- **Theming:** Light and Dark mode support, configured with `next-themes`.
- **Responsive Design:** The layout is fully responsive and optimized for desktop, tablet, and mobile devices.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/en) (version 18.x or higher)
- [npm](https://www.npmjs.com/) or a compatible package manager

### 1. Set Up Environment Variables

The project uses Google's Genkit for its AI features, which requires an API key.

1.  Create a new file named `.env.local` in the root of the project.
2.  Add your Google AI API key to this file:

    ```env
    GOOGLE_API_KEY="YOUR_API_KEY_HERE"
    ```

    You can obtain a key from the [Google AI Studio](https://aistudio.google.com/app/apikey).

### 2. Install Dependencies

Install the project dependencies using npm:

```bash
npm install
```

### 3. Run the Development Server

Start the Next.js development server:

```bash
npm run dev
```

The application will be available at `http://localhost:9002`.

## Project Structure

The project follows the standard Next.js App Router structure.

-   `src/app/(marketing)`: Contains the layout and pages for the public-facing marketing site (landing page, login, signup).
-   `src/app/(app)`: Contains the layout and pages for the protected application dashboard.
-   `src/components`: Contains all the React components used in the application.
    -   `src/components/ui`: Core UI components from shadcn/ui.
-   `src/ai`: Contains all Genkit-related AI flows and configurations.
-   `src/lib`: Contains utility functions, including `cn` for Tailwind class merging.
-   `src/hooks`: Contains custom React hooks.
-   `public`: Contains static assets like images and fonts.
-   `tailwind.config.ts` & `src/app/globals.css`: Files for configuring Tailwind CSS and defining global styles and themes.
