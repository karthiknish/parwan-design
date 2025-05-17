# Parwan Design and Build

A modern, colorful website for Parwan Design and Build, built with Next.js, Tailwind CSS, shadcn/ui, framer-motion, and Contentful CMS.

## Features

- Beautiful, responsive homepage with hero image, project gallery, testimonials, and more
- Contact form integrated with Contentful (content type: `parwanContact`)
- Client-side and server-side validation for contact form
- Thank you page after successful submission
- Admin panel (`/admin`) to view all submissions (username: `admin`, password: `Admin1!`, uses localStorage for session)
- Custom 404 page
- Colorful, accessible design

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file in the root with the following:
   ```env
   CONTENTFUL_SPACE_ID=your_space_id
   CONTENTFUL_MANAGEMENT_TOKEN=your_management_token
   # (for legacy endpoints, not needed with SDK-only admin)
   # CONTENTFUL_DELIVERY_TOKEN=your_delivery_token
   ```

3. **Set up Contentful:**
   - Create a content type with the ID `parwanContact`.
   - Add fields: `name` (Short text), `email` (Short text), `phone` (Short text, optional), `message` (Long text).
   - Publish the content type.

4. **Run the development server:**
```bash
npm run dev
# or
yarn dev
```

5. **Open the site:**
   Visit [http://localhost:3000](http://localhost:3000)

## Admin Panel
- Go to `/admin` to view all contact submissions.
- Login with username: `admin` and password: `Admin1!` (session is stored in localStorage).

## Customization
- Update images in the `public/` folder for hero, projects, and galleries.
- Edit content and sections in `src/app/page.js` and other pages.

## Deployment
Deploy easily on [Vercel](https://vercel.com/) or your preferred platform.

---

Built with ❤️ for Parwan Design and Build.
