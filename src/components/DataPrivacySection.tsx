const DataPrivacySection = () => {
  return (
    <section id="privacy" className="px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-[980px] rounded-3xl border border-[#ece9f5] bg-white px-7 py-9 shadow-[0_10px_30px_rgba(55,52,77,0.05)] md:px-8">
        <div className="text-center">
          <h2 className="mb-2 text-[28px] font-bold text-[#2d2a42]">Data Privacy</h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-[#6d6196]" />
        </div>

        <div className="mt-5 space-y-4 text-sm leading-[1.9] text-[#6b6885] md:text-[15px]">
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
