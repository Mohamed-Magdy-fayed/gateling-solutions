'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { H1, H2, H3, P, Lead, Muted } from '@/components/ui/typography';
import { ArrowLeft, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';

// Form validation schema
const formSchema = z.object({
  // Step 1: Business Information
  contactName: z.string().min(1, 'Contact name is required'),
  businessName: z.string().min(1, 'Business name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  currentWebsite: z.string().url().optional().or(z.literal('')),
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

type FormData = z.infer<typeof formSchema>;

const TOTAL_STEPS = 6;

const projectTypes = [
  'Business/Corporate Website',
  'E-commerce Store',
  'Portfolio Website',
  'Blog/Content Site',
  'Landing Page',
  'Directory/Listing Site',
  'Membership Site',
  'Other'
];

const budgetRanges = [
  'Under $2,000',
  '$2,000 - $5,000',
  '$5,000 - $10,000',
  '$10,000 - $20,000',
  '$20,000+',
  'Not sure yet'
];

const timelines = [
  'ASAP (Rush job)',
  '2-4 weeks',
  '1-2 months',
  '2-3 months',
  '3+ months',
  'Flexible'
];

const availableFeatures = [
  'Contact Forms',
  'Online Store/E-commerce',
  'Blog/News Section',
  'Photo Gallery',
  'Video Integration',
  'Social Media Integration',
  'Newsletter Signup',
  'Appointment Booking',
  'User Registration/Login',
  'Search Functionality',
  'Multi-language Support',
  'Custom Database',
  'Payment Processing',
  'Live Chat',
  'Analytics Integration',
  'SEO Optimization'
];

export function QuoteRequestForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      features: [],
    },
  });

  const watchedFeatures = watch('features') || [];

  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(currentStep);
    const isValid = await trigger(fieldsToValidate);

    if (isValid && currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getFieldsForStep = (step: number): (keyof FormData)[] => {
    switch (step) {
      case 1:
        return ['contactName', 'businessName', 'email'];
      case 2:
        return ['projectType'];
      case 3:
        return ['budgetRange', 'timeline'];
      case 4:
        return [];
      case 5:
        return [];
      default:
        return [];
    }
  };

  const toggleFeature = (feature: string) => {
    const currentFeatures = watchedFeatures;
    const newFeatures = currentFeatures.includes(feature)
      ? currentFeatures.filter(f => f !== feature)
      : [...currentFeatures, feature];
    setValue('features', newFeatures);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Here you would typically send the data to your API
      console.log('Form data:', data);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStepTitle = (step: number) => {
    switch (step) {
      case 1: return 'Business Information';
      case 2: return 'Project Type';
      case 3: return 'Budget & Timeline';
      case 4: return 'Features & Requirements';
      case 5: return 'Goals & Audience';
      case 6: return 'Review & Submit';
      default: return '';
    }
  };

  // Success state
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20 max-w-2xl text-center">
          <Card className="border-green-200 dark:border-green-800">
            <CardContent className="p-8">
              <div className="mb-6">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <H2 className="text-green-700 dark:text-green-400 mb-4">Thank You! 🎉</H2>
                <P className="text-muted-foreground mb-6">
                  Your quote request has been submitted successfully. We've sent you a confirmation email with the next steps.
                </P>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
                <H3 className="mb-4">What happens next?</H3>
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <P className="text-sm">We'll review your requirements within 24 hours</P>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <P className="text-sm">You'll receive a detailed quote via email</P>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <P className="text-sm">We'll schedule a consultation call to discuss your project</P>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <P className="text-sm">Upon approval, we'll start your project immediately</P>
                  </div>
                </div>
              </div>
              <Button
                onClick={() => window.location.href = '/'}
                className="bg-orange-500 hover:bg-orange-600"
              >
                Return to Homepage
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <H1 className="mb-4">Get Your Free WordPress Quote</H1>
          <Lead className="text-muted-foreground max-w-2xl mx-auto">
            Tell us about your project and we'll provide you with a detailed quote within 24 hours.
            No obligation, completely free.
          </Lead>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <H3>{getStepTitle(currentStep)}</H3>
            <Muted>Step {currentStep} of {TOTAL_STEPS}</Muted>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-orange-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Card>
            <CardHeader>
              <CardTitle>Step {currentStep}: {getStepTitle(currentStep)}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step 1: Business Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Contact Name *</Label>
                      <Input
                        id="contactName"
                        {...register('contactName')}
                        placeholder="John Doe"
                      />
                      {errors.contactName && (
                        <P className="text-red-500 text-sm">{errors.contactName.message}</P>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessName">Business Name *</Label>
                      <Input
                        id="businessName"
                        {...register('businessName')}
                        placeholder="Your Company Name"
                      />
                      {errors.businessName && (
                        <P className="text-red-500 text-sm">{errors.businessName.message}</P>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        placeholder="john@company.com"
                      />
                      {errors.email && (
                        <P className="text-red-500 text-sm">{errors.email.message}</P>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register('phone')}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentWebsite">Current Website URL</Label>
                      <Input
                        id="currentWebsite"
                        type="url"
                        {...register('currentWebsite')}
                        placeholder="https://yourwebsite.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Input
                        id="industry"
                        {...register('industry')}
                        placeholder="e.g., Healthcare, Technology, Retail"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Project Type */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <Label className="text-base font-medium">What type of website do you need? *</Label>
                    <div className="grid md:grid-cols-2 gap-3 mt-4">
                      {projectTypes.map((type) => (
                        <label
                          key={type}
                          className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          <input
                            type="radio"
                            value={type}
                            {...register('projectType')}
                            className="text-orange-500"
                          />
                          <span>{type}</span>
                        </label>
                      ))}
                    </div>
                    {errors.projectType && (
                      <P className="text-red-500 text-sm mt-2">{errors.projectType.message}</P>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3: Budget & Timeline */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <Label className="text-base font-medium">What's your budget range? *</Label>
                    <div className="grid md:grid-cols-2 gap-3 mt-4">
                      {budgetRanges.map((range) => (
                        <label
                          key={range}
                          className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          <input
                            type="radio"
                            value={range}
                            {...register('budgetRange')}
                            className="text-orange-500"
                          />
                          <span>{range}</span>
                        </label>
                      ))}
                    </div>
                    {errors.budgetRange && (
                      <P className="text-red-500 text-sm mt-2">{errors.budgetRange.message}</P>
                    )}
                  </div>

                  <div>
                    <Label className="text-base font-medium">When do you need this completed? *</Label>
                    <div className="grid md:grid-cols-2 gap-3 mt-4">
                      {timelines.map((timeline) => (
                        <label
                          key={timeline}
                          className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          <input
                            type="radio"
                            value={timeline}
                            {...register('timeline')}
                            className="text-orange-500"
                          />
                          <span>{timeline}</span>
                        </label>
                      ))}
                    </div>
                    {errors.timeline && (
                      <P className="text-red-500 text-sm mt-2">{errors.timeline.message}</P>
                    )}
                  </div>
                </div>
              )}

              {/* Step 4: Features & Requirements */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <Label className="text-base font-medium">What features do you need? (Select all that apply)</Label>
                    <div className="grid md:grid-cols-2 gap-3 mt-4">
                      {availableFeatures.map((feature) => (
                        <label
                          key={feature}
                          className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={watchedFeatures.includes(feature)}
                            onChange={() => toggleFeature(feature)}
                            className="text-orange-500"
                          />
                          <span className="text-sm">{feature}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="designPreferences">Design Preferences</Label>
                    <Textarea
                      id="designPreferences"
                      {...register('designPreferences')}
                      placeholder="Describe your design preferences, color schemes, style inspiration, etc."
                      rows={4}
                    />
                  </div>
                </div>
              )}

              {/* Step 5: Goals & Audience */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="primaryGoals">What are your primary goals for this website?</Label>
                    <Textarea
                      id="primaryGoals"
                      {...register('primaryGoals')}
                      placeholder="e.g., Generate leads, sell products online, showcase portfolio, provide information..."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="targetAudience">Who is your target audience?</Label>
                    <Textarea
                      id="targetAudience"
                      {...register('targetAudience')}
                      placeholder="Describe your ideal customers, their demographics, interests, etc."
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="competitors">Competitor websites (for reference)</Label>
                    <Textarea
                      id="competitors"
                      {...register('competitors')}
                      placeholder="List any competitor websites you like or want to differentiate from"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additionalNotes">Additional Notes</Label>
                    <Textarea
                      id="additionalNotes"
                      {...register('additionalNotes')}
                      placeholder="Any other requirements, questions, or information you'd like to share"
                      rows={4}
                    />
                  </div>
                </div>
              )}

              {/* Step 6: Review & Submit */}
              {currentStep === 6 && (
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                    <H3 className="mb-4">Review Your Information</H3>
                    <div className="space-y-3 text-sm">
                      <div><strong>Contact:</strong> {watch('contactName')} ({watch('email')})</div>
                      <div><strong>Business:</strong> {watch('businessName')}</div>
                      <div><strong>Project Type:</strong> {watch('projectType')}</div>
                      <div><strong>Budget:</strong> {watch('budgetRange')}</div>
                      <div><strong>Timeline:</strong> {watch('timeline')}</div>
                      {watchedFeatures.length > 0 && (
                        <div><strong>Features:</strong> {watchedFeatures.join(', ')}</div>
                      )}
                    </div>
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
                    <H3 className="mb-3">What happens next?</H3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span>We'll review your requirements within 24 hours</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span>You'll receive a detailed quote via email</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span>We'll schedule a consultation call to discuss your project</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </Button>

                {currentStep < TOTAL_STEPS ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center gap-2"
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Quote Request
                        <CheckCircle className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  );
}
