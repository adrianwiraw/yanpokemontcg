<div align="center">
  <img src="./public/Thumbnail.png" alt="YanPokemonTCG dashboard and marketplace" />

  <h1>YanPokemonTCG</h1>

  <p>Pokemon trading card marketplace and personal collection dashboard.</p>

  <p>
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" alt="Next.js 16" /></a>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19-20232a?logo=react" alt="React 19" /></a>
    <a href="https://go.dev/"><img src="https://img.shields.io/badge/Go-1.26-00ADD8?logo=go" alt="Go" /></a>
    <a href="https://gin-gonic.com/"><img src="https://img.shields.io/badge/Gin-web_framework-008ECF" alt="Gin" /></a>
    <a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/MongoDB-database-47A248?logo=mongodb" alt="MongoDB" /></a>
  </p>
</div>

## Overview

YanPokemonTCG is a full-stack web application for discovering Pokemon cards, purchasing cards with an in-app coin balance, managing a personal collection, and topping up coins through Midtrans Sandbox.

The application is split into:

- **Frontend:** Next.js App Router, React, TypeScript, Tailwind CSS, and client-side services.
- **Backend:** Go and Gin REST API.
- **Persistence:** MongoDB.
- **Authentication:** JWT, email/password registration with OTP verification, and Google OAuth.
- **Payments:** Midtrans Snap Sandbox with webhook processing.
- **Deployment configuration:** Vercel configuration for the Next.js app and Go API.

## Features

### Authentication and account

- Email/password registration.
- Six-digit email OTP verification with a five-minute expiry.
- Email/password login.
- Google OAuth login flow.
- JWT-based protected API routes.
- Profile update and logout.

### Collection and marketplace

- Browse Pokemon card showcase content.
- Add cards to the user collection through checkout.
- View card details, prices, and collection state.
- Validate authentication and coin balance before checkout.

### Coin top-up and payments

- Select a coin package.
- Create a Midtrans Snap transaction.
- Receive payment status callbacks through a webhook.
- Mark transactions as successful or failed.
- Credit coins after a successful `capture` or `settlement` notification.

## Application flow

```text
Browser
  |
  | HTTPS / JSON + JWT
  v
Next.js frontend  --->  Go/Gin API  --->  MongoDB
       |                    |
       |                    +---------> Gmail SMTP (OTP)
       |
       +------------------------------> Google OAuth
       |
       +------------------------------> Midtrans Snap
                                      ^
                                      |
                              Midtrans webhook
```

## Project structure

```text
.
├── app/                         # Next.js App Router pages and layouts
│   ├── (auth)/auth/             # Login, registration, OTP, success pages
│   ├── (dashboard)/dashboard/   # User dashboard and settings
│   └── (marketplace)/marketplace/# Marketplace pages
├── components/                  # Shared UI components
├── public/                      # Static assets
├── src/
│   ├── config/                  # Environment and application constants
│   ├── context/                 # Auth and cart state
│   ├── services/                # Frontend API service layer
│   ├── types/                   # TypeScript types
│   └── lib/                     # API client and utilities
├── server/
│   ├── config/                  # MongoDB, OAuth, and payment configuration
│   ├── controllers/             # HTTP handlers
│   ├── middleware/              # JWT authentication middleware
│   ├── models/                  # MongoDB models
│   └── routes/                  # Gin route registration
├── main.go                      # Go API entry point
├── package.json                 # Frontend scripts and dependencies
├── go.mod                       # Backend dependencies
└── vercel.json                  # Vercel routing/build configuration
```

## Prerequisites

- Node.js 20 or newer.
- npm 10 or newer.
- Go version declared in [`go.mod`](./go.mod).
- A MongoDB database.
- Gmail account with an app password for OTP email.
- Google OAuth credentials, if Google login is enabled.
- Midtrans Sandbox credentials for coin top-up.

## Local development

### 1. Clone and install dependencies

```bash
git clone https://github.com/adrianwiraw/yandev.git
cd yandev
npm install
go mod download
```

### 2. Configure environment variables

Create a `.env` file in the repository root. Never commit it.

```env
# Backend
PORT=8080
NODE_ENV=development
JWT_SECRET=replace-with-a-long-random-secret
FRONTEND_URL=http://localhost:3000
MONGODB_URI=mongodb://127.0.0.1:27017
MONGODB_DB_NAME=pokemontcg_db
GMAIL_USER=your-email@example.com
GMAIL_APP_PASSWORD=your-gmail-app-password

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_REDIRECT_URL=http://localhost:8080/api/auth/google/callback

# Frontend
NEXT_PUBLIC_BACKEND_URL=http://localhost:8080
NEXT_PUBLIC_FRONTEND_URL=http://localhost:3000
NEXT_PUBLIC_MIDTRANS_CLIENT_KEY=your-midtrans-sandbox-client-key
BACKEND_URL=http://localhost:8080
```

`MONGODB_DB_NAME` defaults to `pokemontcg_db` when it is omitted. Values beginning with `NEXT_PUBLIC_` are exposed to the browser and must not contain secrets. `MIDTRANS_SERVER_KEY`, `GOOGLE_CLIENT_SECRET`, `GMAIL_APP_PASSWORD`, `MONGODB_URI`, and `JWT_SECRET` must remain server-only.

### 3. Start the backend

```bash
go run .
```

The API starts on `http://localhost:8080` by default.

### 4. Start the frontend

```bash
npm run dev
```

Open `http://localhost:3000`.

## API reference

The API is served under `/api`. Protected routes require:

```http
Authorization: Bearer <jwt>
```

| Method | Endpoint | Auth | Purpose |
|---|---|---:|---|
| `POST` | `/api/register` | No | Create an account and send OTP |
| `POST` | `/api/register/verify` | No | Verify the registration OTP |
| `POST` | `/api/login` | No | Log in with email and password |
| `POST` | `/api/auth/logout` | No | End the current session |
| `GET` | `/api/auth/google` | No | Start Google OAuth |
| `GET` | `/api/auth/google/callback` | No | Handle Google OAuth callback |
| `GET` | `/api/dashboard/profile` | Yes | Read the authenticated profile |
| `PUT` | `/api/dashboard/profile/update` | Yes | Update the profile |
| `POST` | `/api/dashboard/payment` | Yes | Create a Midtrans Snap token |
| `POST` | `/api/marketplace/checkout` | Yes | Purchase cards with coins |
| `POST` | `/api/payment/webhook` | Midtrans | Process payment notifications |

Most errors use an object containing an `error` message and an appropriate HTTP status code. The payment webhook must be publicly reachable by Midtrans in a deployed environment.

## Quality checks

Run the frontend checks:

```bash
npm run lint
npm run build
```

Run the backend checks:

```bash
go test ./...
go vet ./...
```

The repository currently does not include a dedicated automated test suite. These commands provide lint, build, compilation, and static-analysis validation; payment and OAuth flows should additionally be verified in their respective Sandbox/development environments.

## Deployment

The included [`vercel.json`](./vercel.json) defines a Next.js build and a Go API build. Before deploying:

1. Configure all environment variables in the hosting provider.
2. Set `NEXT_PUBLIC_BACKEND_URL` to the public API URL.
3. Set `FRONTEND_URL` and `NEXT_PUBLIC_FRONTEND_URL` to the public frontend URL.
4. Add the deployed Google OAuth callback URL:
   `https://<api-domain>/api/auth/google/callback`.
5. Configure the Midtrans notification URL:
   `https://<api-domain>/api/payment/webhook`.
6. Use a production MongoDB connection string and a strong `JWT_SECRET`.
7. Keep Midtrans in Sandbox until the production payment configuration has been reviewed.

For a local deployment, the frontend and backend may also be run as two separate services using the commands above.

## Security notes

- Do not commit `.env` or any credential file.
- Do not expose server keys through `NEXT_PUBLIC_*` variables.
- Use HTTPS for deployed frontend, API, OAuth callback, and webhook URLs.
- Use a strong, randomly generated JWT secret.
- Treat Midtrans webhook verification and transaction idempotency as production readiness requirements.
- Rotate credentials immediately if they are accidentally exposed.

## Known limitations

- Payment processing is configured for Midtrans Sandbox.
- Automated unit, integration, and end-to-end tests are not currently included.
- The frontend and backend do not yet publish an OpenAPI specification.
- Production observability, rate limiting, and a dedicated secrets manager are not configured in this repository.

## Roadmap

- Add unit and integration tests for authentication, checkout, and payment webhooks.
- Add OpenAPI documentation and generated API types.
- Add idempotent payment processing with signature verification.
- Add rate limiting, structured logging, and health/readiness endpoints.
- Add CI checks for frontend and backend quality gates.
- Add production deployment documentation and live demo monitoring.

## License

No license has been declared yet. Add a `LICENSE` file before distributing this project or accepting external contributions.

## Author and repository

- Repository: [adrianwiraw/yandev](https://github.com/adrianwiraw/yandev)
- Project: YanPokemonTCG
