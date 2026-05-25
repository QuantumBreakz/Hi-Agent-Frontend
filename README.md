# HI Agent — Frontend Marketing & Widget

This repository contains the client-side frontend for **HI Agent**, built using Next.js 14 (App Router) and Tailwind CSS. It functions as the premium marketing website, savings calculator, and hosts the live AI Voice Widget directly interacting with Vapi.ai.

## 🌟 Key Features
1. **Interactive Voice Widget**: Uses the `@vapi-ai/web` SDK to allow visitors to call and speak with HI Agent directly in their browser.
2. **Live Transcript UI**: A custom-designed scrollable widget tracking the Vapi call in real time.
3. **Savings Calculator**: A dynamic component showing the explicit ROI of recovering missed calls.
4. **Premium "Broccoli" Design**: Custom Tailwind v4 components implementing glassmorphism, floating elements, massive typography, and elegant hover states matching modern top-tier SaaS standards.

---

## 🚀 Deployment (Vercel)

This frontend is designed to be easily deployed on [Vercel](https://vercel.com).

1. Connect your GitHub repository (`QuantumBreakz/Hi-Agent-Frontend`) to Vercel.
2. Vercel will automatically detect it as a Next.js project.
3. You MUST provide the following Environment Variables in the Vercel dashboard:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_VAPI_PUBLIC_KEY` | Your Public Key from the Vapi.ai dashboard |
| `NEXT_PUBLIC_VAPI_ASSISTANT_ID` | The specific Assistant ID you configured on Vapi |
| `NEXT_PUBLIC_API_URL` | The live URL of your Render backend (e.g. `https://hi-agent-backend.onrender.com`) |

4. Hit Deploy! 

---

## 💻 Local Development

To run this frontend on your local machine:

1. In the `frontend` directory, ensure you have an `.env.local` file.
2. Populate the `.env.local` file:
   ```env
   NEXT_PUBLIC_VAPI_PUBLIC_KEY=your_vapi_public_key
   NEXT_PUBLIC_VAPI_ASSISTANT_ID=your_vapi_assistant_id
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```
   *(Note: The `NEXT_PUBLIC_API_URL` points to your backend. During local dev, `localhost:3001` is correct assuming your backend is running.)*

3. Install and run:
```bash
npm install
npm run dev
```
The site will spin up at `http://localhost:3000`.

---

## 📂 File Structure

```text
frontend/
├── app/
│   ├── layout.tsx             # Global layout & metadata
│   ├── page.tsx               # Main landing page (Hero, Cards, Voice Widget)
│   ├── globals.css            # Custom Tailwind @utility classes & theme vars
│   ├── savings-calculator/    # ROI Calculator page
│   ├── faq/                   # Accordion FAQ page
│   └── contact/               # Contact form page
├── components/
│   ├── VoiceWidget.tsx        # Vapi.ai Web SDK integration & UI
│   ├── HeroSection.tsx        # Marketing hero with Mascot
│   ├── NavBar.tsx             # Glassmorphic sticky header
│   └── ...                    # (Footer, TradeGrid, ServicesCards, etc.)
├── public/
│   ├── hi-agent-logo.png      # Brand Logo
│   └── hi-agent-mascot.png    # Brand Mascot
└── tailwind.config.ts         # Configuration for Next.js (content paths)
```
