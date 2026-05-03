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
      <section id="guides" className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              onClick={() => setActiveGuide(null)}
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              <ChevronLeft className="h-4 w-4" /> Back to Guides
            </button>
            {guide && (
              <a
                href={`${import.meta.env.BASE_URL}guides/${guide.pdf}`}
                download
                className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium text-foreground hover:border-primary/50"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
            )}
          </div>
          <h3 className="text-xl font-semibold text-foreground">{guide?.title}</h3>
          <div className="w-full bg-muted rounded-lg overflow-hidden" style={{ height: "80vh" }}>
            <iframe
              src={`${import.meta.env.BASE_URL}guides/${guide?.html}`}
              className="w-full h-full"
              title={guide?.title}
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="guides" className="py-20 px-6" style={{ background: "var(--section-gradient)" }}>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-2">How to Guides</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4">
            Browse our how to guides to make the best use of the SiPRO module
          </p>
        </div>

        <div className="rounded-xl border bg-background/80 p-5">
          <p className="text-sm font-medium text-foreground">Suggested learning path</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {guides.map((guide) => (
              <div
                key={`path-${guide.slug}`}
                className="rounded-lg border bg-background px-4 py-3 text-left"
              >
                <div className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Step {guide.order}
                </div>
                <div className="mt-1 text-sm font-medium text-foreground">{guide.title}</div>
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
            className="pl-10 pr-10"
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
          <div className="grid sm:grid-cols-2 gap-4">
            {filtered.map((guide) => (
              <button
                key={guide.slug}
                onClick={() => setActiveGuide(guide.slug)}
                className="flex items-start gap-4 p-4 rounded-lg border bg-background hover:border-primary/50 transition-colors text-left"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {guide.order}
                </div>
                <div className="space-y-1">
                  <span className="block text-sm font-medium text-foreground">{guide.title}</span>
                  <span className="block text-xs text-muted-foreground">
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
