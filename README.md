# React + Vite
- GlowReview  is a website where users can discover and review beauty products (makeup, hair, skincare, etc.) all in one place. The main pages are home, discover, and profile. The site is built using Vite + React for the front end, Supabase for the backend, and PostgreSQL (via Supabase) for the database. 

> Tech Stack
>> Frontend
- React
- Vite
- React Router
- CSS 
>>Backend
- Supabase
>> Database
- PostgreSQL (via Supabase)
>> Other Features
- Supabase authentication
- REST API via Supabase client
- Cloud hosting (Vercel or Netlify)
> Core Features
1. Authentication
- Users must have accounts to write reviews or save favorites.
>> Features:
- Sign up
- Log in
- Log out
- Persistent session
- User profile page
2. Product Catalog
- Users can browse beauty products across categories.
- Each product page will display:
- Product name
Brand
- Category (makeup, skincare, haircare)
- Product image
- Description
- Average rating
- List of user reviews
- The product database will initially be seeded manually with product information.
3. Reviews
- Users can leave reviews for products.
- Review fields:
- Rating (1–5 stars)
- Written review
- Date posted
- Author
>> Users can:
- Post reviews
- View reviews from other users
- Edit reviews
- Delete reviews
4. Favorites
- Users can save products they want to revisit.
>>Features:
- Add product to favorites
- Remove product from favorites
- View saved products on profile page
5. Profile Page
- Each user has a personal profile.
>>Displays:
- Username
- List of reviews written
- Settings
> Main Pages
>> Home Page
- Featured products
- Recently reviewed products
- Categories (makeup, skincare, haircare)
- Favorites list
- Purpose: product discovery.
>> Product Page
- Product details
- Average rating
- All user reviews
- Button to add review
- Button to favorite product
>> Profile Page
- User information
- User reviews
- Favorites list

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
