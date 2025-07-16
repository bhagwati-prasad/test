# Daifend - AI-Native Cybersecurity Platform

## Overview

This is a modern cybersecurity platform built with React and Express.js that focuses on AI-native defense solutions. The application serves as a marketing website showcasing Daifend's cybersecurity offerings including AI security strategy, LLM-powered threat detection, and autonomous defense systems.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with a clear separation between frontend and backend concerns:

- **Frontend**: React-based SPA built with Vite
- **Backend**: Express.js REST API server
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for client-side routing

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui built on Radix UI primitives
- **Styling**: Tailwind CSS with custom cybersecurity theme colors
- **Animations**: Framer Motion for interactive animations
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL with Drizzle ORM for type-safe queries
- **Validation**: Zod schemas shared between client and server
- **Session Management**: In-memory storage (development) with plans for PostgreSQL sessions
- **API Design**: RESTful endpoints with JSON responses

### Database Schema
The application uses three main entities:
- **Users**: Basic user authentication (username/password)
- **Contacts**: Contact form submissions with company and interest details
- **Demo Requests**: Demo scheduling requests with preferred dates

### UI/UX Design
- **Theme**: Dark cybersecurity aesthetic with custom color palette
- **Typography**: Modern, clean fonts with proper hierarchy
- **Layout**: Responsive design with mobile-first approach
- **Components**: Reusable UI components following atomic design principles

## Data Flow

1. **User Interaction**: Users interact with React components
2. **Form Submission**: Forms use React Hook Form with Zod validation
3. **API Requests**: TanStack Query manages server state and API calls
4. **Server Processing**: Express routes handle requests with validation
5. **Database Operations**: Drizzle ORM performs type-safe database operations
6. **Response Handling**: JSON responses flow back through the query layer
7. **UI Updates**: React components re-render based on server state changes

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL database connection
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI component primitives
- **framer-motion**: Animation library
- **wouter**: Lightweight React router
- **drizzle-orm**: Type-safe SQL query builder

### Development Tools
- **TypeScript**: Type safety across the entire stack
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first styling framework
- **ESBuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with HMR
- **Backend**: tsx for TypeScript execution with auto-reload
- **Database**: Neon PostgreSQL serverless database
- **File Structure**: Monorepo with shared types and schemas

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations for schema management
- **Deployment**: Single Node.js process serving both API and static files

### Key Architectural Decisions

1. **Monorepo Structure**: Enables code sharing between client and server while maintaining clear boundaries
2. **Type-Safe Database**: Drizzle ORM provides compile-time type safety for database operations
3. **Shared Validation**: Zod schemas ensure consistent validation between frontend and backend
4. **Component-Based UI**: shadcn/ui provides consistent, accessible components with Tailwind styling
5. **Serverless Database**: Neon PostgreSQL offers scalable, managed database infrastructure
6. **Modern Build Tools**: Vite and ESBuild provide fast development and optimized production builds

The architecture prioritizes developer experience, type safety, and performance while maintaining a clear separation of concerns between presentation, business logic, and data persistence layers.