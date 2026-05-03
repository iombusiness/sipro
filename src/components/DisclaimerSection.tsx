const DisclaimerSection = () => {
  return (
    <section id="disclaimer" className="py-20 px-6" style={{ background: "var(--section-gradient)" }}>
      <div className="max-w-4xl mx-auto rounded-3xl border bg-background/90 p-8 shadow-sm md:p-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-2">Disclaimer</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
          <p>
            This module is licensed under OPL-1 and is sold for use in Odoo environments only.
            Purchase of this app grants the buyer the right to use the software in accordance with
            the Odoo Proprietary License. Redistribution, resale, sublicensing, or publication of
            this module or modified copies is not permitted without prior written approval from
            IOM Business.
          </p>
          <p>
            SiPRO provides decision-support tools for inventory planning and replenishment. Results
            depend on system configuration, source data quality, and business processes. Buyers are
            responsible for reviewing recommendations before applying operational changes. The
            module is provided on an &quot;as is&quot; basis, without warranties of merchantability,
            fitness for a particular purpose, or guaranteed business outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
