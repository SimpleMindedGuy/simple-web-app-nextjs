In the name of Allah the most beneficent the most merciful

# Simple Web App Next

This is a simple web application.

It is a rework of my older project SWA simple web app.

This project is still under development.

Once this project is done, it should be able to function similar to a social media platform, with all expected features, like different types of uploads, comments, likes/dislikes, user-groups and group permissions, groups, tags.

## Progress

- [ ] Make all the UI elements

  - [x] Alternating Colors for Components, and partials.
  - [ ] Partials
    - [ ] List
      - [ ] Un-ordered List.
      - [ ] ordered List.
      - [ ] Draggable List
        - [ ] Kanban Lists
        - [ ] Ordered Lists
        - [ ] Unordered Lists
    - [ ] Grid
    - [ ] Drop-Down
      - [ ] Floating
      - [ ] Collapsing
      - [ ] Sliding
  - [ ] Components
    - [ ] Navigation bar/menus
    - [ ] Post
      - [ ] Layout
      - [ ] Date-Info
      - [ ] Upload User
      - [ ] Edit Menu
      - [ ] Type
      - [ ] Comments
    - [ ] Forms
      - [ ] Post forms
      - [ ] Comments forms
      - [ ] User profile forms
    - [ ] Site Settings.
      - [ ] Default Icon
      - [ ] Site favcon
      - [ ] Groups permissions
      - [ ] User management
        - [ ] Active users.
        - [ ] Banned/Suspend Users.
        - [ ] Banned/Suspend IP addresses. (maybe wont bother with this)
      - [ ] Site Groups Management
        - [ ] Active groups.
        - [ ] Banned/Suspended Groups.

- [ ] Make All Back-End functions
  - [ ] CRUD functions
    - [ ] User Related
      - [ ] Creating users
      - [ ] Deleting users
      - [ ] Editing users
      - [ ] Suspending/Banning users
    - [ ] User-Groups related
      - [ ] Creating groups
      - [ ] Deleting groups
      - [ ] Editing groups
    - [ ] Uploads related
      - [ ] Creating posts
      - [ ] Deleting posts
      - [ ] Editing posts
      - [ ] Creating comments
      - [ ] Deleting comments
      - [ ] Editing comments
    - [ ] Data Filtering
      - [ ] Filtering posts / comments by date / user / groups / Comments / Likes / Dislikes.
      - [ ] Hiding posts / comments / users / groups based on users.
      - [ ] Other functions ?
  - [ ] Authentication
  - [ ] Email Server
  - [ ] User tokens
  - [ ] Cashing
  - [ ] Image Processing
  - [ ] Video/Audio/Image encoding

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
