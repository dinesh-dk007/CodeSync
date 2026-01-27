
# CodeSync

CodeSync is an online real-time coding interview platform that allows interviewers and candidates to join a shared meeting room featuring a built-in IDE and coding challenges — all running in the browser.

Live Demo : https://code-sync-six-delta.vercel.app/


## Overview
* CodeSync was built to simplify and modernize the technical interview experience. It provides:

* A collaborative coding environment with live code editing

* A curated problem interface for interview challenges

* Real-time interaction between interviewer and interviewee

* TypeScript + React frontend with a sleek UI powered by shadcn UI

* Backend integration with Convex DB for real-time state sync

* Streaming and real-time communication via Streamio

* Full deployment using Next.js on Vercel

## Installation
Clone the Repo

```bash
git clone https://github.com/yourusername/codesync.git
cd codesync

```
Install Dependencies

```bash
cd codesync
npm install 
```
Environment Variables

Create a .env.local file:
```bash
NEXT_PUBLIC_CONVEX_URL=your_convex_url
STREAMIO_API_KEY=your_streamio_key
```
Convex Backend Setup

```bash
npx convex init
npx convex dev 
```
Run

```bash
npm run dev
```
Now open:
👉 http://localhost:3000

Your CodeSync app will be fully connected with Convex backend 🚀

    
## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Live Coding Room – Code together in real time
- Integrated IDE – Write, edit code while presenting the screen on same page
- Streamio Comms – Low-latency audio/video/interaction streams
- Question Panel – Display problems to be solved during an interview
- Convex Database Sync – Realtime IDE state, sessions, and persistence



## Acknowledgments

- [React](https://react.dev)
- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Convex](https://www.convex.dev/)
- [Stream.io](https://getstream.io/)
- [Clerk](https://clerk.com/)
- And many other open-source libraries used in `package.json`

=================================================
