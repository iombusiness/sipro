const DataPrivacySection = () => {
  return (
    <section id="privacy" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto rounded-3xl border bg-background p-8 shadow-sm md:p-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-2">Data Privacy</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
          <p>
            SiPRO is designed to operate within your Odoo environment. We do not collect user data,
            customer data, inventory data, or operational data on our own systems through this
            module. Based on the module code, the app does not include built-in mechanisms to
            transmit your business data to IOM Business or to external third-party services as part
            of its normal operation.
          </p>
          <p>
            Your data remains under your control in your Odoo database and infrastructure, subject
            to your own hosting, access-control, backup, and security practices. Customers are
            encouraged to review the module code, deployment architecture, and any customizations
            in their environment as part of their normal technical and compliance review.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DataPrivacySection;
