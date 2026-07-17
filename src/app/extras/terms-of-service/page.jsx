export default function TermsOfServicePage() {
  return (
    <div className="py-32 bg-neutral-bg min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-border-light">
        <h1 className="text-3xl md:text-5xl font-bold text-primary-text mb-8">Terms of Service</h1>
        
        <div className="space-y-6 text-secondary-text leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-primary-text mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>By accessing and using RecipeMaster AI, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          
          <h2 className="text-2xl font-bold text-primary-text mt-8 mb-4">2. User Accounts</h2>
          <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p>
          
          <h2 className="text-2xl font-bold text-primary-text mt-8 mb-4">3. User Content</h2>
          <p>Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the Content that you post to the Service, including its legality, reliability, and appropriateness.</p>

          <h2 className="text-2xl font-bold text-primary-text mt-8 mb-4">4. Changes</h2>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.</p>
        </div>
      </div>
    </div>
  );
}
