const GuidesSection = () => {
  return (
    <section id="guides" className="px-4 py-10 sm:px-6">
      <div
        className="mx-auto max-w-[980px] rounded-3xl border border-[#ece9f5] px-7 py-10 text-center shadow-[0_10px_30px_rgba(55,52,77,0.05)]"
        style={{ background: "var(--panel-gradient)" }}
      >
        <h2 className="text-3xl font-bold leading-tight text-[#2d2a42]">How to Guides</h2>
        <div className="mx-auto mt-3.5 h-1 w-16 rounded-full bg-[#6d6196]" />
        <p className="mt-5 text-base leading-7 text-[#6b6885]">
          Browse our how to guides to make the best use of the SiPRO module
        </p>
        <p className="mt-6">
          <a
            href="https://iombusiness.github.io/sipro/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-[#6d6196] px-7 py-3.5 text-center text-[15px] font-semibold leading-snug text-white shadow-[0_8px_20px_rgba(109,97,150,0.32)] transition-colors hover:bg-[#4f4673]"
          >
            Access How to Guides at https://iombusiness.github.io/sipro/
          </a>
        </p>
      </div>
    </section>
  );
};

export default GuidesSection;
