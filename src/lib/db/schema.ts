import { pgTable, serial, text, timestamp, boolean, integer, jsonb } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

// Client Requests Table
export const clientRequests = pgTable('client_requests', {
  id: serial('id').primaryKey(),
  
  // Basic Information
  businessName: text('business_name').notNull(),
  contactName: text('contact_name').notNull(),
  email: text('email').notNull(),
  phone: text('phone'),
  company: text('company'),
  
  // Business Context
  industry: text('industry'),
  businessDescription: text('business_description'),
  yearsInBusiness: text('years_in_business'),
  companySize: text('company_size'),
  
  // Current Website Status
  hasCurrentWebsite: boolean('has_current_website').default(false),
  currentWebsiteUrl: text('current_website_url'),
  currentSiteWorking: text('current_site_working'),
  currentSiteNotWorking: text('current_site_not_working'),
  reasonForNewWebsite: text('reason_for_new_website'),
  
  // Project Goals
  primaryGoal: text('primary_goal'),
  desiredActions: jsonb('desired_actions').$type<string[]>(),
  successMetrics: jsonb('success_metrics').$type<string[]>(),
  
  // Target Audience
  targetAudience: text('target_audience'),
  ageRange: jsonb('age_range').$type<string[]>(),
  geographicLocation: text('geographic_location'),
  problemsSolved: text('problems_solved'),
  hasCustomerPersonas: boolean('has_customer_personas').default(false),
  
  // Website Type & Functionality
  websiteType: text('website_type'),
  essentialFeatures: jsonb('essential_features').$type<string[]>(),
  numberOfPages: text('number_of_pages'),
  contentReady: text('content_ready'),
  providesPhotos: text('provides_photos'),
  preferredStructure: text('preferred_structure'),
  
  // Design Preferences
  designStyle: jsonb('design_style').$type<string[]>(),
  colorPreferences: text('color_preferences'),
  websitesLiked: text('websites_liked'),
  websitesDisliked: text('websites_disliked'),
  logoStatus: text('logo_status'),
  
  // Technical Requirements
  mobileResponsive: boolean('mobile_responsive').default(true),
  seoOptimization: boolean('seo_optimization').default(false),
  analyticsTracking: boolean('analytics_tracking').default(false),
  thirdPartyIntegrations: jsonb('third_party_integrations').$type<string[]>(),
  hostingPreference: text('hosting_preference'),
  
  // Budget & Timeline
  budgetRange: text('budget_range'),
  desiredLaunchDate: timestamp('desired_launch_date'),
  timelineFlexibility: text('timeline_flexibility'),
  ongoingMaintenance: boolean('ongoing_maintenance').default(false),
  
  // Competition & Marketing
  mainCompetitors: text('main_competitors'),
  differentiators: text('differentiators'),
  competitiveAdvantages: text('competitive_advantages'),
  currentLeadGeneration: jsonb('current_lead_generation').$type<string[]>(),
  marketingGoals: jsonb('marketing_goals').$type<string[]>(),
  
  // Accessibility & Compliance
  accessibilityRequirements: text('accessibility_requirements'),
  complianceNeeds: text('compliance_needs'),
  
  // Communication & Additional
  preferredCommunication: text('preferred_communication'),
  decisionMakers: text('decision_makers'),
  specialRequirements: text('special_requirements'),
  questionsForUs: text('questions_for_us'),
  howDidYouHear: text('how_did_you_hear'),
  
  // Status & Management
  status: text('status').notNull().default('new_request'),
  priority: text('priority').default('medium'),
  assignedTo: text('assigned_to'),
  estimatedValue: integer('estimated_value'),
  
  // Timestamps
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Templates Table
export const templates = pgTable('templates', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  category: text('category').notNull(), // business, ecommerce, portfolio, blog, landing, directory, membership
  subcategory: text('subcategory'),
  
  // Visual Assets
  previewImage: text('preview_image'),
  thumbnailImage: text('thumbnail_image'),
  demoUrl: text('demo_url'),
  screenshots: jsonb('screenshots').$type<string[]>(),
  
  // Pricing & Availability
  isPremium: boolean('is_premium').default(false),
  price: integer('price').default(0), // in cents
  isActive: boolean('is_active').default(true),
  
  // Features & Tags
  features: jsonb('features').$type<string[]>(),
  tags: jsonb('tags').$type<string[]>(),
  difficulty: text('difficulty'), // beginner, intermediate, advanced
  
  // Technical Details
  wordpressVersion: text('wordpress_version'),
  requiredPlugins: jsonb('required_plugins').$type<string[]>(),
  includedPages: jsonb('included_pages').$type<string[]>(),
  
  // Metadata
  downloadCount: integer('download_count').default(0),
  rating: integer('rating').default(0), // 1-5 stars
  reviewCount: integer('review_count').default(0),
  
  // Timestamps
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Admin Users Table
export const adminUsers = pgTable('admin_users', {
  id: serial('id').primaryKey(),
  username: text('username').notNull().unique(),
  email: text('email').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  role: text('role').notNull().default('admin'), // admin, manager, viewer
  isActive: boolean('is_active').default(true),
  
  // Profile Information
  firstName: text('first_name'),
  lastName: text('last_name'),
  avatar: text('avatar'),
  
  // Timestamps
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  lastLoginAt: timestamp('last_login_at'),
});

// Communications Table
export const communications = pgTable('communications', {
  id: serial('id').primaryKey(),
  requestId: integer('request_id').references(() => clientRequests.id).notNull(),
  adminId: integer('admin_id').references(() => adminUsers.id),
  
  // Communication Details
  type: text('type').notNull(), // email, phone, meeting, note
  subject: text('subject'),
  message: text('message').notNull(),
  direction: text('direction').notNull(), // inbound, outbound
  
  // Email Specific
  emailTo: text('email_to'),
  emailFrom: text('email_from'),
  emailCc: text('email_cc'),
  emailBcc: text('email_bcc'),
  
  // Status & Metadata
  status: text('status').default('sent'), // sent, delivered, read, failed
  isInternal: boolean('is_internal').default(false),
  attachments: jsonb('attachments').$type<string[]>(),
  
  // Timestamps
  createdAt: timestamp('created_at').defaultNow().notNull(),
  scheduledAt: timestamp('scheduled_at'),
});

// Status History Table (for tracking status changes)
export const statusHistory = pgTable('status_history', {
  id: serial('id').primaryKey(),
  requestId: integer('request_id').references(() => clientRequests.id).notNull(),
  adminId: integer('admin_id').references(() => adminUsers.id),
  
  // Status Change Details
  fromStatus: text('from_status'),
  toStatus: text('to_status').notNull(),
  reason: text('reason'),
  notes: text('notes'),
  
  // Timestamps
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Zod Schemas for Validation
export const insertClientRequestSchema = createInsertSchema(clientRequests, {
  email: z.string().email(),
  phone: z.string().optional(),
  desiredLaunchDate: z.date().optional(),
});

export const selectClientRequestSchema = createSelectSchema(clientRequests);

export const insertTemplateSchema = createInsertSchema(templates, {
  name: z.string().min(1),
  category: z.string().min(1),
  price: z.number().min(0),
});

export const selectTemplateSchema = createSelectSchema(templates);

export const insertAdminUserSchema = createInsertSchema(adminUsers, {
  username: z.string().min(3),
  email: z.string().email(),
  passwordHash: z.string().min(1),
});

export const selectAdminUserSchema = createSelectSchema(adminUsers);

export const insertCommunicationSchema = createInsertSchema(communications, {
  message: z.string().min(1),
  type: z.enum(['email', 'phone', 'meeting', 'note']),
  direction: z.enum(['inbound', 'outbound']),
});

export const selectCommunicationSchema = createSelectSchema(communications);

// Type exports
export type ClientRequest = typeof clientRequests.$inferSelect;
export type NewClientRequest = typeof clientRequests.$inferInsert;
export type Template = typeof templates.$inferSelect;
export type NewTemplate = typeof templates.$inferInsert;
export type AdminUser = typeof adminUsers.$inferSelect;
export type NewAdminUser = typeof adminUsers.$inferInsert;
export type Communication = typeof communications.$inferSelect;
export type NewCommunication = typeof communications.$inferInsert;
export type StatusHistory = typeof statusHistory.$inferSelect;
export type NewStatusHistory = typeof statusHistory.$inferInsert;

