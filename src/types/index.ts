// Re-export database types
export type {
  ClientRequest,
  NewClientRequest,
  Template,
  NewTemplate,
  AdminUser,
  NewAdminUser,
  Communication,
  NewCommunication,
  StatusHistory,
  NewStatusHistory,
} from '@/lib/db/schema';

// Form types
export interface ClientRequestFormData {
  // Step 1: Business Basics
  businessName: string;
  contactName: string;
  email: string;
  phone?: string;
  company?: string;
  industry?: string;
  businessDescription?: string;
  yearsInBusiness?: string;
  companySize?: string;

  // Step 2: Current Website & Goals
  hasCurrentWebsite: boolean;
  currentWebsiteUrl?: string;
  currentSiteWorking?: string;
  currentSiteNotWorking?: string;
  reasonForNewWebsite?: string;
  primaryGoal?: string;
  desiredActions?: string[];
  successMetrics?: string[];

  // Step 3: Target Audience & Requirements
  targetAudience?: string;
  ageRange?: string[];
  geographicLocation?: string;
  problemsSolved?: string;
  hasCustomerPersonas: boolean;
  websiteType?: string;
  essentialFeatures?: string[];

  // Step 4: Design & Technical
  numberOfPages?: string;
  contentReady?: string;
  providesPhotos?: string;
  preferredStructure?: string;
  designStyle?: string[];
  colorPreferences?: string;
  websitesLiked?: string;
  websitesDisliked?: string;
  logoStatus?: string;
  mobileResponsive: boolean;
  seoOptimization: boolean;
  analyticsTracking: boolean;
  thirdPartyIntegrations?: string[];
  hostingPreference?: string;

  // Step 5: Budget & Timeline
  budgetRange?: string;
  desiredLaunchDate?: Date;
  timelineFlexibility?: string;
  ongoingMaintenance: boolean;

  // Step 6: Additional Details
  mainCompetitors?: string;
  differentiators?: string;
  competitiveAdvantages?: string;
  currentLeadGeneration?: string[];
  marketingGoals?: string[];
  accessibilityRequirements?: string;
  complianceNeeds?: string;
  preferredCommunication?: string;
  decisionMakers?: string;
  specialRequirements?: string;
  questionsForUs?: string;
  howDidYouHear?: string;
}

// Status types
export type RequestStatus = 
  | 'new_request'
  | 'in_review'
  | 'needs_clarification'
  | 'consultation_scheduled'
  | 'quoted'
  | 'negotiating'
  | 'accepted'
  | 'in_progress'
  | 'client_review'
  | 'completed'
  | 'on_hold'
  | 'cancelled'
  | 'archived';

export type Priority = 'low' | 'medium' | 'high';

export type CommunicationType = 'email' | 'phone' | 'meeting' | 'note';

export type CommunicationDirection = 'inbound' | 'outbound';

// Template types
export type TemplateCategory = 
  | 'business'
  | 'ecommerce'
  | 'portfolio'
  | 'blog'
  | 'landing'
  | 'directory'
  | 'membership';

export type TemplateDifficulty = 'beginner' | 'intermediate' | 'advanced';

// Admin types
export type AdminRole = 'admin' | 'manager' | 'viewer';

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Filter types
export interface RequestFilters {
  status?: RequestStatus[];
  priority?: Priority[];
  dateRange?: {
    from: Date;
    to: Date;
  };
  budgetRange?: string[];
  assignedTo?: string[];
  search?: string;
}

export interface TemplateFilters {
  category?: TemplateCategory[];
  isPremium?: boolean;
  difficulty?: TemplateDifficulty[];
  priceRange?: {
    min: number;
    max: number;
  };
  search?: string;
}

// Dashboard types
export interface DashboardStats {
  totalRequests: number;
  newRequests: number;
  inProgress: number;
  completed: number;
  conversionRate: number;
  averageValue: number;
  monthlyRevenue: number;
  responseTime: number;
}

// Email types
export interface EmailTemplate {
  subject: string;
  html: string;
  text: string;
}

export interface EmailData {
  to: string;
  cc?: string;
  bcc?: string;
  subject: string;
  html: string;
  text?: string;
  attachments?: Array<{
    filename: string;
    content: Buffer | string;
    contentType?: string;
  }>;
}

