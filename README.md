# SEO.Connect - Community Platform

A Next.js-based community platform for SEO professionals to connect, share knowledge, and collaborate.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Components**: shadcn/ui (built on Radix UI)
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form + Zod
- **State Management**: React Context (for user authentication)
- **API**: MockAPI.io (for development)

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
app/
├── community/           # Community features
│   ├── [id]/           # Individual post pages
│   ├── create-post/    # Post creation
│   └── page.tsx        # Community feed
├── login/              # Authentication
└── page.tsx           # Landing page
components/
├── shared/            # Reusable components
└── ui/               # UI components (shadcn)
contexts/
└── UserContext.tsx   # User authentication context
```

## Technical Decisions & Patterns

### 1. Client-Side Components
- Used "use client" directive for interactive components
- Implemented client-side routing for better UX
- Chose client-side data fetching for real-time updates

### 2. Authentication
- Implemented simple token-based auth using localStorage
- Used React Context for global user state
- Assumed single-device usage (no token refresh mechanism)

### 3. Form Handling
- Chose React Hook Form for efficient form management
- Used Zod for runtime type validation
- Implemented form validation before API calls

### 4. UI/UX Decisions
- Mobile-first design with max-width containers
- Used shadcn/ui for consistent, accessible components
- Implemented loading states and error handling
- Added hover effects for interactive elements

### 5. Data Management
- Used MockAPI.io for development
- Implemented optimistic updates for better UX
- Assumed simple data structure (no complex relationships)

## Assumptions & Shortcuts

1. **Authentication**:
   - No refresh token mechanism
   - Simple localStorage-based token storage
   - No password hashing (using MockAPI)

2. **Data Management**:
   - No real-time updates
   - No pagination implemented
   - No image upload (URL only)
   - No complex data relationships

3. **Features**:
   - No comment system
   - No like/unlike functionality
   - No user profiles
   - No search functionality

4. **Security**:
   - No CSRF protection
   - No rate limiting
   - Basic error handling

## Future Improvements

1. **Authentication**:
   - Implement proper JWT with refresh tokens
   - Add password hashing
   - Add social login

2. **Features**:
   - Add comment system
   - Implement like/unlike
   - Add user profiles
   - Add search and filtering
   - Add image upload

3. **Performance**:
   - Implement pagination
   - Add caching
   - Optimize images
   - Add real-time updates

4. **Security**:
   - Add CSRF protection
   - Implement rate limiting
   - Add input sanitization
   - Add proper error boundaries

## API Endpoints

Currently using MockAPI.io endpoints:
- Posts: `https://662dd683a7dda1fa378b6471.mockapi.io/get/AllProducts/Post`
- Accounts: `https://662dd683a7dda1fa378b6471.mockapi.io/get/AllProducts/accounts`

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
