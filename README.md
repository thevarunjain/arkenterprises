# Ark Enterprises — Website

Business website for Ark Enterprises, an industrial supplier company.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Package Manager**: pnpm
- **Hosting**: Vercel
- **Contact Form**: Formspree

---

## Running Locally

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

Visit `http://localhost:3000`

---

## Deployment

Hosted on Vercel. Every push to `main` triggers an automatic redeploy.

- **Vercel Project**: `vercel.com/thevarunjains-projects/arkenterprises`
- **GitHub Repo**: `github.com/thevarunjain/arkenterprises`

To deploy manually:
```bash
git add .
git commit -m "your message"
git push
```

---

## Contact Form (Formspree)

Form submissions are handled by Formspree and delivered to email.

- **Formspree Endpoint**: `https://formspree.io/f/mjglvdbe`
- **Dashboard**: `formspree.io` → login to view submissions
- **Free tier**: 50 submissions/month

### Add a second email for notifications
1. Go to formspree.io → your form
2. Settings → Notifications → Extra Recipients
3. Add the second email address

### Change the Formspree endpoint
Update the URL in `components/contact.tsx`:
```ts
await fetch("https://formspree.io/f/mjglvdbe", {
```

---

## Project Structure

```
app/
  page.tsx          # Home page (imports all sections)
  layout.tsx        # Root layout + metadata
  globals.css       # Global styles + Tailwind theme

components/
  navbar.tsx        # Top navigation bar
  hero.tsx          # Hero section with headline + stats
  services.tsx      # Services grid (6 cards)
  about.tsx         # About section + company metrics
  certifications.tsx # ISO, MSME, GST, Udyam certs
  gallery.tsx       # Operations gallery (swap in real images)
  contact.tsx       # Contact form + address
  footer.tsx        # Footer with links
  ui/               # shadcn/ui base components
```

---

## Things to Update

- [ ] Replace placeholder phone/email/address in `contact.tsx` and `footer.tsx`
- [ ] Add real images to the gallery section in `gallery.tsx`
- [ ] Update company description in `hero.tsx` and `about.tsx`
- [ ] Set a custom domain in Vercel → Settings → Domains
- [ ] Verify email on Formspree to receive submissions
