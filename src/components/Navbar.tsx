const links = [
  { label: "About", href: "#about" },
  { label: "How to Guides", href: "#guides" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "Disclaimer", href: "#disclaimer" },
  { label: "Data Privacy", href: "#privacy" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#ece9f5] bg-white/85 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-[980px] flex-wrap items-center justify-center gap-x-7 gap-y-3 px-6 py-4">
        {links.map((l) => (
          <button
            key={l.href}
            onClick={() => handleClick(l.href)}
            className="text-sm font-medium text-[#6b6885] transition-colors hover:text-[#6d6196]"
          >
            {l.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
