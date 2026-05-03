import { ExternalLink } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6" style={{ background: "var(--section-gradient)" }}>
      <div className="max-w-4xl mx-auto space-y-16">
        <div
          className="rounded-3xl border border-border/60 px-6 py-12 text-center shadow-sm backdrop-blur-sm md:px-10 md:py-16"
          style={{ backgroundColor: "#6f609a" }}
        >
          <p className="text-[5.5rem] font-bold leading-none tracking-tight text-white md:text-[9.5rem]">
            SiPRO
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white">
            Automated Strategic Inventory Planning &amp; Risk Optimisation for Odoo
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-primary mx-auto" />
        </div>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            A powerful Strategic Inventory Risk Management module built to enhance Odoo Inventory,{" "}
            <span className="font-bold text-[#6d6196]">SiPRO</span> helps Trading businesses minimise the risks associated with{" "}
            <span className="italic">inventory investment by aligning stock holdings with sales, marketing, financial, and operational objectives.</span>
          </p>
          <p>
            Leveraging advanced analytics, a proven methodology, and automated risk assessments,{" "}
            <span className="font-bold text-[#6d6196]">SiPRO</span> enables organisations to make data-driven decisions that optimise stock levels and strengthen overall supply chain performance.
          </p>
          <ul className="list-disc space-y-3 pl-6">
            <li><span className="font-bold text-[#6d6196]">SiPRO</span> is a Strategic Inventory module that extends and enhances Odoo&rsquo;s Inventory functionality.</li>
            <li>Designed for Trading businesses, including importers, wholesalers, distributors, and retailers of finished goods, components, parts, and accessories.</li>
            <li>Aligns <span className="italic">inventory investment</span> with demand patterns and broader business objectives.</li>
            <li>Enables businesses to achieve targeted DIFOT service levels by ensuring optimal product availability, while identifying and isolating excess, slow-moving, and obsolete stock&mdash;typically reducing such inventory by double-digit percentages of total inventory value.</li>
            <li>Eliminates manual decision-making by automating product stocking strategies based on market demand and predefined parameters.</li>
            <li>Fully data-driven, enabling automated calculation of optimal stock levels across the entire product portfolio, including Safety Stock, Minimum and Maximum levels, and Reorder Quantities&mdash;based on SiPRO defaults or user-defined DIFOT targets.</li>
            <li>Supports end-to-end Product Lifecycle Management, including new product launches, end-of-life processes, and strategic product withdrawals.</li>
            <li>Enables automated management of strategic stock holdings for key customers, seasonal demand, critical production materials, and repair and service parts.</li>
            <li>Provides a detailed, downloadable Inventory Risk Assessment report with up to 12 months of sales data, delivering clear visibility of total, active, and non-moving inventory&mdash;supporting informed financial decisions and <span className="font-bold italic">improving cash flow, profitability, and operational efficiency.</span></li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">About IOM Business</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              IOM Business is the organization behind SiPRO, dedicated to delivering innovative solutions that help businesses optimize their operations and achieve sustainable growth. With a focus on inventory management and risk mitigation, IOM Business partners with companies to implement intelligent systems that reduce waste, improve efficiency, and boost profitability.
            </p>
            <a
              href="https://iombusiness.com.au/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              Visit IOM Business <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">About the Founder</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              SiPRO was created by Jude Matchado, an experienced business technology innovator with a passion for solving complex inventory challenges. With deep expertise in Odoo development and supply chain management, Jude has dedicated his career to building solutions that empower businesses to operate more efficiently and sustainably.
            </p>
            <a
              href="https://www.linkedin.com/in/jude-matchado-605017208/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              LinkedIn Profile <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
