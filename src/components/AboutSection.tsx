import { Check, ExternalLink } from "lucide-react";

const features = [
  <><span className="font-bold text-[#6d6196]">SiPRO</span> is a Strategic Inventory module that extends and enhances Odoo&rsquo;s Inventory functionality.</>,
  <>Designed for Trading businesses, including importers, wholesalers, distributors, and retailers of finished goods, components, parts, and accessories.</>,
  <>Aligns <span className="italic">inventory investment</span> with demand patterns and broader business objectives.</>,
  <>Eliminates manual decision-making by automating product stocking strategies based on market demand and predefined parameters.</>,
  <>Fully data-driven, enabling automated calculation of optimal stock levels across the entire product portfolio, including Safety Stock, Minimum and Maximum levels, and Reorder Quantities&mdash;based on SiPRO defaults or user-defined DIFOT targets.</>,
  <>Enables automated management of strategic stock holdings for key customers, seasonal demand, critical production materials, and repair and service parts.</>,
  <>Supports end-to-end Product Lifecycle Management, including new product launches, end-of-life processes, and strategic product withdrawals.</>,
  <>Enables businesses to achieve targeted DIFOT service levels by ensuring optimal product availability, while identifying and isolating excess, slow-moving, and obsolete stock&mdash;typically reducing such inventory by double-digit percentages of total inventory value.</>,
  <>Provides clear on-screen visibility of total, active, and non-moving inventory with up to 12 months of sales data, exportable to spreadsheet&mdash;supporting informed financial decisions and <span className="font-bold italic">improving cash flow, profitability, and operational efficiency.</span></>,
];

const AboutSection = () => {
  return (
    <section id="about" className="px-4 pb-16 pt-24 sm:px-6" style={{ background: "var(--section-gradient)" }}>
      <div className="mx-auto max-w-[980px] space-y-10">
        <div
          className="relative overflow-hidden rounded-[28px] px-7 py-16 text-center shadow-[0_24px_60px_rgba(77,68,112,0.28)] md:px-10"
          style={{ background: "var(--hero-gradient)" }}
        >
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 -left-14 h-56 w-56 rounded-full bg-white/[0.07]" />
          <div className="relative">
            <p className="text-[5.75rem] font-extrabold leading-none text-white md:text-[9.5rem]">
              SiPRO
            </p>
            <h2 className="mx-auto mt-5 max-w-3xl text-2xl font-bold leading-snug text-white md:text-[2rem]">
              Automated Strategic Inventory Planning &amp; Risk Optimisation for Odoo
            </h2>
            <div className="mx-auto mt-6 h-[5px] w-[72px] rounded-full bg-[#d7cde0]" />
          </div>
        </div>

        <div className="mx-auto max-w-[820px] space-y-5 text-center">
          <p className="text-lg leading-[1.9] text-[#2d2a42]">
            A powerful Strategic Inventory Planning &amp; Risk Management module built to enhance Odoo&rsquo;s Inventory,{" "}
            <span className="font-bold text-[#6d6196]">SiPRO</span> helps Trading businesses minimise the risks associated with{" "}
            <span className="italic">
              inventory investment by aligning stock holdings with sales, marketing, financial, and operational objectives.
            </span>
          </p>
          <p className="text-base leading-[1.9] text-[#5a5775] md:text-[17px]">
            Leveraging advanced analytics, a proven methodology, and automated risk assessments,{" "}
            <span className="font-bold text-[#6d6196]">SiPRO</span> enables organisations to make data-driven decisions that optimise stock levels and strengthen overall supply chain performance.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-[18px] border border-[#ece9f5] bg-white p-[22px] text-left shadow-[0_8px_22px_rgba(55,52,77,0.05)] ${index === features.length - 1 ? "md:col-span-2" : ""}`}
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-[#efeaf7] text-[#6d6196]">
                  <Check className="h-4 w-4 stroke-[3]" />
                </span>
                <div className="text-[15px] leading-[1.7] text-[#4a4760]">{feature}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-[20px] border border-[#ece9f5] bg-white px-[26px] py-6 shadow-[0_8px_24px_rgba(55,52,77,0.05)]">
            <h3 className="text-[22px] font-semibold leading-snug text-[#2d2a42]">About IOM Business</h3>
            <div className="my-3 h-1 w-11 rounded-full bg-[#6d6196]" />
            <p className="text-sm leading-[1.65] text-[#6b6885]">
              IOM Business is the organization behind SiPRO, dedicated to delivering innovative solutions that help businesses optimize their operations and achieve sustainable growth. With a focus on inventory management and risk mitigation, IOM Business partners with companies to implement intelligent systems that reduce waste, improve efficiency, and boost profitability.
            </p>
            <a
              href="https://iombusiness.com.au/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 border-b-2 border-[#d7cde0] pb-0.5 text-sm font-semibold text-[#6d6196]"
            >
              Visit IOM Business (https://iombusiness.com.au/about/) <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div className="rounded-[20px] border border-[#ece9f5] bg-white px-[26px] py-6 shadow-[0_8px_24px_rgba(55,52,77,0.05)]">
            <h3 className="text-[22px] font-semibold leading-snug text-[#2d2a42]">About the Founder</h3>
            <div className="my-3 h-1 w-11 rounded-full bg-[#6d6196]" />
            <p className="text-sm leading-[1.65] text-[#6b6885]">
              SiPRO was created by Jude Matchado, an experienced business technology innovator with a passion for solving complex inventory challenges. With deep expertise in Odoo development and supply chain management, Jude has dedicated his career to building solutions that empower businesses to operate more efficiently and sustainably.
            </p>
            <a
              href="https://www.linkedin.com/in/jude-matchado-605017208/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 border-b-2 border-[#d7cde0] pb-0.5 text-sm font-semibold text-[#6d6196]"
            >
              LinkedIn Profile: https://www.linkedin.com/in/jude-matchado-605017208/ <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
