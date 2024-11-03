# Kankroli Pitch

A Next.js-based pitch website built with TypeScript, Tailwind CSS, and shadcn/ui components.

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          
│   ├── sections/        # Main content sections
│   │   ├── hero.tsx
│   │   ├── financials.tsx
│   │   ├── investment.tsx
│   │   ├── market-stats.tsx
│   │   ├── portal.tsx
│   │   ├── solutions.tsx
│   │   └── team.tsx
│   └── ui/              # Reusable UI components
├── lib/                 # Utility functions
└── hooks/               # Custom React hooks
```

## Content Management

### Current Content Structure

Content is currently managed through the following section components:

1. **Hero Section** (`components/sections/hero.tsx`)
   - Main headline
   - Subheading
   - Call-to-action buttons

2. **Financials Section** (`components/sections/financials.tsx`)
   - Financial metrics
   - Performance data

3. **Investment Section** (`components/sections/investment.tsx`)
   - Investment opportunities
   - Terms and conditions

4. **Market Stats** (`components/sections/market-stats.tsx`)
   - Market analysis
   - Statistical data

5. **Solutions** (`components/sections/solutions.tsx`)
   - Product/service offerings
   - Features and benefits

6. **Team** (`components/sections/team.tsx`)
   - Team member profiles
   - Roles and responsibilities

### Editing Content

To edit content, currently you need to modify the respective component files directly. Each section component contains its own content in TSX format.

## Future Admin Implementation Plan

To implement an admin interface for content management, the following steps would be required:

1. **Authentication System**
   - Implement Next.js authentication
   - Create admin user management
   - Set up protected routes

2. **Database Integration**
   - Set up a database (e.g., PostgreSQL, MongoDB)
   - Create content models
   - Implement API routes for content management

3. **Admin Interface**
   - Create an admin dashboard
   - Build content editing forms
   - Implement preview functionality

4. **Content Migration**
   - Move static content to database
   - Update components to fetch from API
   - Implement caching strategy

## Development

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Technical Stack

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui Components
- ESLint for code quality

## Notes for Content Editors

When editing content directly in components:
1. Locate the relevant section component in `components/sections/`
2. Edit the content while maintaining the TSX syntax
3. Test changes in development environment before deploying

## Future Improvements

1. **Content Management System (CMS)**
   - Implement admin dashboard
   - Add WYSIWYG editors
   - Version control for content

2. **Dynamic Content**
   - Move content to database
   - Add API routes
   - Implement content caching

3. **Preview System**
   - Add content preview functionality
   - Draft/publish workflow
   - Rollback capabilities
