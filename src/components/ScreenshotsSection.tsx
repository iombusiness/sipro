const screenshotGrid = [
  {
    src: "screenshotStrategicStock.png",
    alt: "SiPRO screenshot 1",
  },
  {
    src: "screenshotSetting1.png",
    alt: "SiPRO screenshot 2",
  },
  {
    src: "screenshotSetting2.png",
    alt: "SiPRO screenshot 3",
  },
  {
    src: "screenshotSetting3.png",
    alt: "SiPRO screenshot 4",
  },
];

const ScreenshotsSection = () => {
  return (
    <section id="screenshots" className="px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-[980px]">
        <div className="mb-7 text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#2d2a42]">Screenshots</h2>
          <div className="mx-auto mt-3.5 h-1 w-16 rounded-full bg-[#6d6196]" />
        </div>

        <div className="mb-5 rounded-[22px] border border-[#ece9f5] bg-white p-4 shadow-[0_12px_32px_rgba(55,52,77,0.07)]">
          <img
            src={`${import.meta.env.BASE_URL}screenshotProposal.png`}
            alt="Proposal Report screenshot"
            className="block h-auto w-full rounded-[14px]"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {screenshotGrid.map((screenshot) => (
            <div
              key={screenshot.src}
              className="rounded-[22px] border border-[#ece9f5] bg-white p-3.5 shadow-[0_10px_26px_rgba(55,52,77,0.06)]"
            >
              <img
                src={`${import.meta.env.BASE_URL}${screenshot.src}`}
                alt={screenshot.alt}
                className="block h-auto w-full rounded-[14px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
