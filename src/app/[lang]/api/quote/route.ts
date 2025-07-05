import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '@/lib/db';
import { clientRequests } from '@/lib/db/schema';
import { emailService } from '../../../../emails/lib/email-service';

// Validation schema for quote request
const quoteRequestSchema = z.object({
  // Step 1: Business Information
  contactName: z.string().min(1, 'Contact name is required'),
  businessName: z.string().min(1, 'Business name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  currentWebsiteUrl: z.string().url().optional().or(z.literal('')),
  industry: z.string().optional(),

  // Step 2: Project Type
  projectType: z.string().min(1, 'Project type is required'),

  // Step 3: Budget & Timeline
  budgetRange: z.string().min(1, 'Budget range is required'),
  timeline: z.string().min(1, 'Timeline is required'),
  existingWebsite: z.string().optional(),

  // Step 4: Features & Requirements
  features: z.array(z.string()).default([]),
  designPreferences: z.string().optional(),
  contentStatus: z.string().optional(),

  // Step 5: Goals & Audience
  primaryGoals: z.string().optional(),
  targetAudience: z.string().optional(),
  competitors: z.string().optional(),
  additionalNotes: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request data
    const validatedData = quoteRequestSchema.parse(body);

    // Save to database
    const [newRequest] = await db.insert(clientRequests).values({
      // Basic Information
      businessName: validatedData.businessName,
      contactName: validatedData.contactName,
      email: validatedData.email,
      phone: validatedData.phone ?? null,
      company: null,

      // Business Context
      industry: validatedData.industry ?? null,
      businessDescription: null,
      yearsInBusiness: null,
      companySize: null,

      // Current Website Status
      hasCurrentWebsite: !!validatedData.currentWebsiteUrl,
      currentWebsiteUrl: validatedData.currentWebsiteUrl || null,
      currentSiteWorking: null,
      currentSiteNotWorking: null,
      reasonForNewWebsite: null,

      // Project Goals
      primaryGoal: validatedData.primaryGoals ?? null,
      desiredActions: [],
      successMetrics: [],

      // Target Audience
      targetAudience: validatedData.targetAudience ?? null,
      ageRange: [],
      geographicLocation: null,
      problemsSolved: null,
      hasCustomerPersonas: false,

      // Website Type & Functionality
      websiteType: validatedData.projectType ?? null,
      essentialFeatures: validatedData.features ?? [],
      numberOfPages: null,
      contentReady: validatedData.contentStatus ?? null,
      providesPhotos: null,
      preferredStructure: null,

      // Design Preferences
      designStyle: validatedData.designPreferences ? [validatedData.designPreferences] : [],
      colorPreferences: null,
      websitesLiked: null,
      websitesDisliked: null,
      logoStatus: null,

      // Technical Requirements
      mobileResponsive: true,
      seoOptimization: false,
      analyticsTracking: false,
      thirdPartyIntegrations: [],
      hostingPreference: null,

      // Budget & Timeline
      budgetRange: validatedData.budgetRange,
      desiredLaunchDate: null,
      timelineFlexibility: validatedData.timeline ?? null,
      ongoingMaintenance: false,

      // Competition & Marketing
      mainCompetitors: validatedData.competitors ?? null,
      differentiators: null,
      competitiveAdvantages: null,
      currentLeadGeneration: [],
      marketingGoals: [],

      // Accessibility & Compliance
      accessibilityRequirements: null,
      complianceNeeds: null,

      // Communication & Additional
      preferredCommunication: null,
      decisionMakers: null,
      specialRequirements: validatedData.additionalNotes ?? null,
      questionsForUs: null,
      howDidYouHear: null,

      // Status & Management
      status: 'new_request',
      priority: 'medium',
      assignedTo: null,
      estimatedValue: null,

      // Timestamps
      createdAt: new Date(),
      updatedAt: new Date(),
    }).returning();

    // Send emails
    const emailResults = await emailService.sendQuoteRequestEmails({
      contactName: validatedData.contactName,
      businessName: validatedData.businessName,
      email: validatedData.email,
      phone: validatedData.phone,
      currentWebsite: validatedData.currentWebsiteUrl,
      industry: validatedData.industry,
      projectType: validatedData.projectType,
      budgetRange: validatedData.budgetRange,
      timeline: validatedData.timeline,
      existingWebsite: validatedData.existingWebsite,
      features: validatedData.features,
      designPreferences: validatedData.designPreferences,
      contentStatus: validatedData.contentStatus,
      primaryGoals: validatedData.primaryGoals,
      targetAudience: validatedData.targetAudience,
      competitors: validatedData.competitors,
      additionalNotes: validatedData.additionalNotes,
    });

    // Log email results
    console.log('Email results:', emailResults);

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Quote request submitted successfully',
      requestId: newRequest.id,
      emailStatus: {
        adminNotified: emailResults.adminNotification.success,
        clientConfirmed: emailResults.clientConfirmation.success,
      },
    }, { status: 201 });

  } catch (error) {
    console.error('Error processing quote request:', error);

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        message: 'Validation failed',
        errors: error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message,
        })),
      }, { status: 400 });
    }

    // Handle database errors
    if (error instanceof Error && error.message.includes('database')) {
      return NextResponse.json({
        success: false,
        message: 'Database error occurred',
        error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
      }, { status: 500 });
    }

    // Handle other errors
    return NextResponse.json({
      success: false,
      message: 'An unexpected error occurred',
      error: process.env.NODE_ENV === 'development' ? error instanceof Error ? error.message : 'Unknown error' : 'Internal server error',
    }, { status: 500 });
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

