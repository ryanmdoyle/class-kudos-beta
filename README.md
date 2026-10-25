# Class Kudos (v1)

> This is the first version of Class Kudos, built 2020–2021 with RedwoodJS.
> The current version, rebuilt on RedwoodSDK and Cloudflare Workers, is live at
> [classkudos.com](https://www.classkudos.com).

A classroom behavior and rewards app. Teachers award points for behaviors, and
students spend those points on rewards the teacher sets up, like a classroom store.

## What's different from ClassDojo-style apps

- **Students redeem their own points.** Students have their own login, see
  their feedback history, and spend points on rewards. Teachers see every
  redemption and can also redeem on a student's behalf.
- **Rewards can ask a question.** A reward can require a response (for example,
  "Which song?" for a "Pick the music" reward), and the student answers it when
  redeeming.
- **Classes vs. groups.** Teachers can make long-term *classes* and also
  separate *groups* for small-group work or temporary groupings, each with its
  own behaviors, rewards, and point totals.
- **Email notifications.** Teachers get an email (SendGrid dynamic templates)
  when a student redeems a reward.

## Tech

- [RedwoodJS](https://redwoodjs.com/): React, GraphQL, Prisma
- PostgreSQL. The data model covers users, roles, groups, enrollments,
  behaviors, feedback, rewards, redemptions, and group points
  (`api/db/schema.prisma`), with schema and data migrations
- Firebase Authentication through Redwood's auth provider, with role-based access
- Tailwind CSS
- SendGrid, Netlify

## Running locally

```bash
yarn install
yarn rw prisma migrate dev
yarn rw dev
```

Requires `DATABASE_URL`, Firebase config (`FIREBASE_*`), and a SendGrid key in `.env`.
