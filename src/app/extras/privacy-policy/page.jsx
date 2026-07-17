export default function PrivacyPolicyPage() {
  return (
    <div className="py-32 bg-neutral-bg min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-border-light">
        <h1 className="text-3xl md:text-5xl font-bold text-primary-text mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-secondary-text leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-primary-text mt-8 mb-4">1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us.</p>
          
          <h2 className="text-2xl font-bold text-primary-text mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We may use the information we collect about you to provide, maintain, and improve our services, including to facilitate payments, send receipts, provide products and services you request (and send related information), develop new features, provide customer support, and authenticate users.</p>
          
          <h2 className="text-2xl font-bold text-primary-text mt-8 mb-4">3. Sharing of Information</h2>
          <p>We may share the information we collect about you as described in this Statement or as described at the time of collection or sharing, including as follows: With third party Service Providers; in response to a request for information by a competent authority if we believe disclosure is in accordance with, or is otherwise required by, any applicable law, regulation, or legal process.</p>

          <h2 className="text-2xl font-bold text-primary-text mt-8 mb-4">4. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at privacy@recipemaster.ai.</p>
        </div>
      </div>
    </div>
  );
}
