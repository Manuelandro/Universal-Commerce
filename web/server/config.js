export const port = process.env.PORT || 3000
export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`

export const databaseUrl = process.env.DATABASE_URL || 'mongodb://localhost:27017/graphql'
