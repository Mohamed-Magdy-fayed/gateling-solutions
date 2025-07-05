import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema';

// Database connection configuration
const connectionString = process.env.DATABASE_URL || 'postgresql://gateling:password@localhost:5432/gateling_website';

// Create Drizzle instance
export const db = drizzle(connectionString, { schema })

// Export schema for use in other files
export * from './schema';

