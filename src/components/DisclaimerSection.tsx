const DisclaimerSection = () => {
  return (
    <section id="disclaimer" className="px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-[980px] rounded-3xl border border-[#ece9f5] bg-white px-7 py-9 shadow-[0_10px_30px_rgba(55,52,77,0.05)] md:px-8">
        <div className="text-center">
          <h2 className="mb-2 text-[28px] font-bold text-[#2d2a42]">Disclaimer</h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-[#6d6196]" />
        </div>

        <div className="mt-5 space-y-4 text-sm leading-[1.9] text-[#6b6885] md:text-[15px]">
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
