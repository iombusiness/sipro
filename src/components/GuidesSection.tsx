import { useEffect, useState } from "react";
import { FileText, Search, X, ChevronLeft, Download } from "lucide-react";
import { Input } from "@/components/ui/input";

type Guide = {
  slug: string;
  order: number;
  title: string;
  html: string;
  text: string;
  pdf: string;
};

const guides: Guide[] = [
  {
    slug: "about_module_e",
    order: 1,
    title: "About Module",
    html: "about_module_e/email.html",
    text: "about_module_e/email.txt",
    pdf: "about_module_e.pdf",
  },
  {
    slug: "installing_module_e",
    order: 2,
    title: "Installing Module",
    html: "installing_module_e/email.html",
    text: "installing_module_e/email.txt",
    pdf: "installing_module_e.pdf",
  },
  {
    slug: "module_settings_e",
    order: 3,
    title: "Module Settings",
    html: "module_settings_e/email.html",
    text: "module_settings_e/email.txt",
    pdf: "module_settings_e.pdf",
  },
  {
    slug: "strategic_Stock_management_e",
    order: 4,
    title: "Strategic Stock Management",
    html: "strategic_Stock_management_e/email.html",
    text: "strategic_Stock_management_e/email.txt",
    pdf: "strategic_Stock_management_e.pdf",
  },
  {
    slug: "proposal_report_e",
    order: 5,
    title: "Proposal Report",
    html: "proposal_report_e/email.html",
    text: "proposal_report_e/email.txt",
    pdf: "proposal_report_e.pdf",
  },
];

const GuidesSection = () => {
  const [search, setSearch] = useState("");
  const [activeGuide, setActiveGuide] = useState<string | null>(null);
  const [guideText, setGuideText] = useState<Record<string, string>>({});

  useEffect(() => {
    let isMounted = true;

    const loadGuideText = async () => {
      const entries = await Promise.all(
        guides.map(async (guide) => {
          try {
            const response = await fetch(`${import.meta.env.BASE_URL}guides/${guide.text}`);
            const text = response.ok ? await response.text() : "";

            return [guide.slug, text] as const;
          } catch {
            return [guide.slug, ""] as const;
          }
        })
      );

      if (isMounted) {
        setGuideText(Object.fromEntries(entries));
      }
    };

    void loadGuideText();

    return () => {
      isMounted = false;
    };
  }, []);

  const filtered = guides.filter((guide) => {
    const query = search.toLowerCase().trim();
    const content = guideText[guide.slug]?.toLowerCase() ?? "";

    if (!query) {
      return true;
    }

    return guide.title.toLowerCase().includes(query) || content.includes(query);
  });

  if (activeGuide) {
    const guide = guides.find((g) => g.slug === activeGuide);
    return (
      <section id="guides" className="px-4 py-16 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              onClick={() => setActiveGuide(null)}
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#6d6196] hover:underline"
            >
              <ChevronLeft className="h-4 w-4" /> Back to Guides
            </button>
            {guide && (
              <a
                href={`${import.meta.env.BASE_URL}guides/${guide.pdf}`}
                download
                className="inline-flex items-center gap-2 rounded-full border border-[#d7cde0] bg-white px-4 py-2 text-sm font-semibold text-[#6d6196] shadow-sm hover:border-[#6d6196]"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
            )}
          </div>
          <h3 className="text-xl font-semibold text-[#2d2a42]">{guide?.title}</h3>
          <div className="w-full overflow-hidden rounded-[22px] border border-[#ece9f5] bg-white p-2 shadow-[0_12px_32px_rgba(55,52,77,0.07)]" style={{ height: "80vh" }}>
            <iframe
              src={`${import.meta.env.BASE_URL}guides/${guide?.html}`}
              className="h-full w-full rounded-2xl"
              title={guide?.title}
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="guides" className="px-4 py-10 sm:px-6">
      <div
        className="mx-auto max-w-[980px] space-y-8 rounded-3xl border border-[#ece9f5] px-5 py-10 text-center shadow-[0_10px_30px_rgba(55,52,77,0.05)] sm:px-7"
        style={{ background: "var(--panel-gradient)" }}
      >
        <div className="text-center">
          <h2 className="mb-2 text-3xl font-bold text-[#2d2a42]">How to Guides</h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-[#6d6196]" />
          <p className="mt-4 leading-7 text-[#6b6885]">
            Browse our how to guides to make the best use of the SiPRO module
          </p>
        </div>

        <div className="rounded-[18px] border border-[#ece9f5] bg-white/85 p-5 text-left shadow-[0_8px_22px_rgba(55,52,77,0.04)]">
          <p className="text-sm font-semibold text-[#2d2a42]">Suggested learning path</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {guides.map((guide) => (
              <div
                key={`path-${guide.slug}`}
                className="rounded-[14px] border border-[#ece9f5] bg-white px-4 py-3 text-left shadow-sm"
              >
                <div className="text-xs font-semibold uppercase text-[#6d6196]">
                  Step {guide.order}
                </div>
                <div className="mt-1 text-sm font-medium text-[#2d2a42]">{guide.title}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search guides..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-full border-[#d7cde0] bg-white pl-10 pr-10 shadow-sm focus-visible:ring-[#6d6196]"
          />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2">
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 text-muted-foreground/40 mx-auto mb-3" />
            <p className="text-muted-foreground text-sm">
              {guides.length === 0
                ? "Guides will appear here once added to the repository."
                : "No guides match your search."}
            </p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {filtered.map((guide) => (
              <button
                key={guide.slug}
                onClick={() => setActiveGuide(guide.slug)}
                className="flex items-start gap-4 rounded-[18px] border border-[#ece9f5] bg-white p-4 text-left shadow-[0_8px_22px_rgba(55,52,77,0.05)] transition-colors hover:border-[#6d6196]/50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#efeaf7] text-sm font-semibold text-[#6d6196]">
                  {guide.order}
                </div>
                <div className="space-y-1">
                  <span className="block text-sm font-semibold text-[#2d2a42]">{guide.title}</span>
                  <span className="block text-xs text-[#6b6885]">
                    Open guide and download PDF
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GuidesSection;
