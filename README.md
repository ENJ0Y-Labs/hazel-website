# Hazel PR Company Website

A multi-page corporate website for Hazel PR Company Limited, built with React, Vite and React Router.

## Pages

- `/` - Home
- `/about` - About the company
- `/services` - Technical services directory and enquiry form
- `/hazel-security` - Hazel Security division
- `/clients` - Client and organization directory
- `/contact` - Contact information, enquiry form and location map

## Requirements

- Node.js (LTS recommended)
- npm

## Getting started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Run the automated smoke tests:

```bash
npm test
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Enquiry form behaviour

The contact form and service enquiry actions prepare an email using the visitor's configured email application. The website does not currently send enquiries to a server or store submitted information. A backend or approved form service is required for direct website submissions.

## Before publishing

Confirm company descriptions, service capabilities, client names and logos, contact details, registrations, certifications and other compliance statements with Hazel PR Company. Only publish credentials, performance figures and client engagement details that the company has verified and approved.

The repository includes Node.js smoke tests. These checks do not replace browser-based testing of responsive layouts, navigation, forms or the deployed website.
