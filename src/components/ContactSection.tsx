const ContactSection = () => {
  return (
    <section id="contact" className="px-4 py-10 sm:px-6">
      <div
        className="mx-auto max-w-[980px] rounded-3xl px-7 py-10 text-center shadow-[0_18px_44px_rgba(77,68,112,0.26)] md:px-8"
        style={{ background: "var(--hero-gradient)" }}
      >
        <div className="text-center">
          <h2 className="mb-2 text-[28px] font-bold text-white">Contact Support</h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-[#d7cde0]" />
          <p className="mt-4 leading-7 text-[#f0ecf7]">
            Have questions? Contact us at{" "}
            <a
              href="mailto:admin@iombusiness.com.au"
              className="font-semibold text-white underline"
            >
              admin@iombusiness.com.au
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
