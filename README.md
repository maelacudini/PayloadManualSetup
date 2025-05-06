# Payload Manual Setup

This repository contains a manually configured setup for a Next.js project integrated with Payload CMS. It includes multilingual support using `next-intl`, a MongoDB database connection, and Payload's rich text editor. The project is designed to serve as a starting point for building a CMS-powered web application.

## Requirements

To run this project, ensure you have the following installed:

- **Node.js**: Version 18 or higher
- **npm**: Version 8 or higher
- **MongoDB**: A running MongoDB instance
- **Sharp**: Ensure the `sharp` library is installed correctly on your system (required for image processing)

## Environment Variables

Create a `.env` file in the root directory of the project and define the following variables:

- `PAYLOAD_SECRET`: A secure string used as the Payload CMS secret.
- `MONGODB_URI`: The connection string for your MongoDB database.

## Run the Development Server

1. npm install
2. npm run dev

## Start the Production Server

1. npm install
2. npm run build
3. npm run start

## Features

### Payload CMS Integration:
The project uses Payload CMS for managing content. Collections and configurations are defined in the `app/(payload)/_collections` directory.

### Multilingual Support:
The project supports multiple languages (en and it) using next-intl. Language files are located in `lib/i18n/locales/{lang}.json`.

### REST API:
REST endpoints are available under `/api/[...slug]`.

### Rich Text Editor:
Payload's Lexical Rich Text Editor is integrated for content editing.

### Custom SASS Styling:
Global styles are defined in `app\(app)\_style\globals.css`.

 