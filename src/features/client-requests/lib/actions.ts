'use server';

import { z } from 'zod';
import { db } from '@/lib/db';
import { clientRequests } from '@/lib/db/schema';
import { revalidatePath } from 'next/cache';
import { eq } from 'drizzle-orm';
import { emailService } from '../../../../emails/lib/email-service';

// Comprehensive form validation schema matching database schema
const quoteRequestSchema = z.object({
  // Basic Information
  businessName: z.string().min(1, 'Business name is required'),
  contactName: z.string().min(1, 'Contact name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  company: z.string().optional(),
  
  // Business Context
  industry: z.string().optional(),
  businessDescription: z.string().optional(),
  yearsInBusiness: z.string().optional(),
  companySize: z.string().optional(),
  
  // Current Website Status
  hasCurrentWebsite: z.boolean().default(false),
  currentWebsiteUrl: z.string().url().optional().or(z.literal('')),
  currentSiteWorking: z.string().optional(),
  currentSiteNotWorking: z.string().optional(),
  reasonForNewWebsite: z.string().optional(),
  
  // Project Goals
  primaryGoal: z.string().optional(),
  desiredActions: z.array(z.string()).default([]),
  successMetrics: z.array(z.string()).default([]),
  
  // Target Audience
  targetAudience: z.string().optional(),
  ageRange: z.array(z.string()).default([]),
  geographicLocation: z.string().optional(),
  problemsSolved: z.string().optional(),
  hasCustomerPersonas: z.boolean().default(false),
  
  // Website Type & Functionality
  websiteType: z.string().min(1, 'Website type is required'),
  essentialFeatures: z.array(z.string()).default([]),
  numberOfPages: z.string().optional(),
  contentReady: z.string().optional(),
  providesPhotos: z.string().optional(),
  preferredStructure: z.string().optional(),
  
  // Design Preferences
  designStyle: z.array(z.string()).default([]),
  colorPreferences: z.string().optional(),
  websitesLiked: z.string().optional(),
  websitesDisliked: z.string().optional(),
  logoStatus: z.string().optional(),
  
  // Technical Requirements
  mobileResponsive: z.boolean().default(true),
  seoOptimization: z.boolean().default(false),
  analyticsTracking: z.boolean().default(false),
  thirdPartyIntegrations: z.array(z.string()).default([]),
  hostingPreference: z.string().optional(),
  
  // Budget & Timeline
  budgetRange: z.string().min(1, 'Budget range is required'),
  desiredLaunchDate: z.string().optional(),
  timelineFlexibility: z.string().optional(),
  ongoingMaintenance: z.boolean().default(false),
  
  // Competition & Marketing
  mainCompetitors: z.string().optional(),
  differentiators: z.string().optional(),
  competitiveAdvantages: z.string().optional(),
  currentLeadGeneration: z.array(z.string()).default([]),
  marketingGoals: z.array(z.string()).default([]),
  
  // Accessibility & Compliance
  accessibilityRequirements: z.string().optional(),
  complianceNeeds: z.string().optional(),
  
  // Communication & Additional
  preferredCommunication: z.string().optional(),
  decisionMakers: z.string().optional(),
  specialRequirements: z.string().optional(),
  questionsForUs: z.string().optional(),
  howDidYouHear: z.string().optional(),
});

export type QuoteFormData = z.infer<typeof quoteRequestSchema>;

export async function submitQuoteRequest(formData: QuoteFormData) {
  try {
    // Validate the form data
    const validatedData = quoteRequestSchema.parse(formData);

    // Convert date string to Date object if provided
    const desiredLaunchDate = validatedData.desiredLaunchDate 
      ? new Date(validatedData.desiredLaunchDate) 
      : null;

    // Insert into database
    const [newRequest] = await db.insert(clientRequests).values({
      // Basic Information
      businessName: validatedData.businessName,
      contactName: validatedData.contactName,
      email: validatedData.email,
      phone: validatedData.phone || null,
      company: validatedData.company || null,
      
      // Business Context
      industry: validatedData.industry || null,
      businessDescription: validatedData.businessDescription || null,
      yearsInBusiness: validatedData.yearsInBusiness || null,
      companySize: validatedData.companySize || null,
      
      // Current Website Status
      hasCurrentWebsite: validatedData.hasCurrentWebsite,
      currentWebsiteUrl: validatedData.currentWebsiteUrl || null,
      currentSiteWorking: validatedData.currentSiteWorking || null,
      currentSiteNotWorking: validatedData.currentSiteNotWorking || null,
      reasonForNewWebsite: validatedData.reasonForNewWebsite || null,
      
      // Project Goals
      primaryGoal: validatedData.primaryGoal || null,
      desiredActions: validatedData.desiredActions,
      successMetrics: validatedData.successMetrics,
      
      // Target Audience
      targetAudience: validatedData.targetAudience || null,
      ageRange: validatedData.ageRange,
      geographicLocation: validatedData.geographicLocation || null,
      problemsSolved: validatedData.problemsSolved || null,
      hasCustomerPersonas: validatedData.hasCustomerPersonas,
      
      // Website Type & Functionality
      websiteType: validatedData.websiteType,
      essentialFeatures: validatedData.essentialFeatures,
      numberOfPages: validatedData.numberOfPages || null,
      contentReady: validatedData.contentReady || null,
      providesPhotos: validatedData.providesPhotos || null,
      preferredStructure: validatedData.preferredStructure || null,
      
      // Design Preferences
      designStyle: validatedData.designStyle,
      colorPreferences: validatedData.colorPreferences || null,
      websitesLiked: validatedData.websitesLiked || null,
      websitesDisliked: validatedData.websitesDisliked || null,
      logoStatus: validatedData.logoStatus || null,
      
      // Technical Requirements
      mobileResponsive: validatedData.mobileResponsive,
      seoOptimization: validatedData.seoOptimization,
      analyticsTracking: validatedData.analyticsTracking,
      thirdPartyIntegrations: validatedData.thirdPartyIntegrations,
      hostingPreference: validatedData.hostingPreference || null,
      
      // Budget & Timeline
      budgetRange: validatedData.budgetRange,
      desiredLaunchDate: desiredLaunchDate,
      timelineFlexibility: validatedData.timelineFlexibility || null,
      ongoingMaintenance: validatedData.ongoingMaintenance,
      
      // Competition & Marketing
      mainCompetitors: validatedData.mainCompetitors || null,
      differentiators: validatedData.differentiators || null,
      competitiveAdvantages: validatedData.competitiveAdvantages || null,
      currentLeadGeneration: validatedData.currentLeadGeneration,
      marketingGoals: validatedData.marketingGoals,
      
      // Accessibility & Compliance
      accessibilityRequirements: validatedData.accessibilityRequirements || null,
      complianceNeeds: validatedData.complianceNeeds || null,
      
      // Communication & Additional
      preferredCommunication: validatedData.preferredCommunication || null,
      decisionMakers: validatedData.decisionMakers || null,
      specialRequirements: validatedData.specialRequirements || null,
      questionsForUs: validatedData.questionsForUs || null,
      howDidYouHear: validatedData.howDidYouHear || null,
      
      // Status & Management
      status: 'new_request',
      priority: 'medium',
      
      // Timestamps
      createdAt: new Date(),
      updatedAt: new Date(),
    }).returning();

    // Send notification emails
    try {
      const emailResults = await emailService.sendQuoteRequestEmails({
        contactName: validatedData.contactName,
        businessName: validatedData.businessName,
        email: validatedData.email,
        phone: validatedData.phone,
        websiteType: validatedData.websiteType,
        budgetRange: validatedData.budgetRange,
        desiredLaunchDate: validatedData.desiredLaunchDate,
        essentialFeatures: validatedData.essentialFeatures,
        primaryGoal: validatedData.primaryGoal,
        targetAudience: validatedData.targetAudience,
        specialRequirements: validatedData.specialRequirements,
        requestId: newRequest.id,
      });

      console.log('Email results:', emailResults);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the entire request if email fails
    }

    // Revalidate admin pages
    revalidatePath('/admin');
    revalidatePath('/admin/requests');

    return {
      success: true,
      message: 'Quote request submitted successfully',
      requestId: newRequest.id,
    };

  } catch (error) {
    console.error('Error submitting quote request:', error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: 'Validation failed',
        errors: error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message,
        })),
      };
    }

    return {
      success: false,
      message: 'Failed to submit quote request. Please try again.',
      error: process.env.NODE_ENV === 'development' ? 
        (error instanceof Error ? error.message : 'Unknown error') : 
        'Internal server error',
    };
  }
}

// Server Action for getting quote requests (for admin)
export async function getQuoteRequests() {
  try {
    const requests = await db.select().from(clientRequests).orderBy(clientRequests.createdAt);
    return {
      success: true,
      data: requests,
    };
  } catch (error) {
    console.error('Error fetching quote requests:', error);
    return {
      success: false,
      message: 'Failed to fetch quote requests',
      error: process.env.NODE_ENV === 'development' ? 
        (error instanceof Error ? error.message : 'Unknown error') : 
        'Internal server error',
    };
  }
}

// Server Action for updating quote request status
export async function updateQuoteRequestStatus(requestId: number, status: string, notes?: string) {
  try {
    const [updatedRequest] = await db
      .update(clientRequests)
      .set({ 
        status, 
        updatedAt: new Date(),
      })
      .where(eq(clientRequests.id, requestId))
      .returning();

    // Revalidate admin pages
    revalidatePath('/admin');
    revalidatePath('/admin/requests');

    return {
      success: true,
      message: 'Status updated successfully',
      data: updatedRequest,
    };
  } catch (error) {
    console.error('Error updating quote request status:', error);
    return {
      success: false,
      message: 'Failed to update status',
      error: process.env.NODE_ENV === 'development' ? 
        (error instanceof Error ? error.message : 'Unknown error') : 
        'Internal server error',
    };
  }
}

