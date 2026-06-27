import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const screenshots = [
  {
    src: "screenshotProposal.png",
    alt: "Proposal Report screenshot",
  },
  {
    src: "screenshotStrategicStock.png",
    alt: "Strategic Stock screen",
  },
  {
    src: "screenshotSetting1.png",
    alt: "Configuration screen 1",
  },
  {
    src: "screenshotSetting2.png",
    alt: "Configuration screen 2",
  },
  {
    src: "screenshotSetting3.png",
    alt: "Configuration screen 3",
  },
];

const ScreenshotsSection = () => {
  return (
    <section id="screenshots" className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-7xl space-y-7">
        <div className="text-center">
          <h2 className="mb-2 text-3xl font-bold text-[#2d2a42]">Screenshots</h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-[#6d6196]" />
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="px-3 sm:px-8 md:px-14"
        >
          <CarouselContent className="-ml-3 md:-ml-6">
            {screenshots.map((screenshot) => (
              <CarouselItem
                key={screenshot.src}
                className="pl-3 md:pl-6 sm:basis-[92%] lg:basis-[82%] xl:basis-[76%]"
              >
                <div className="rounded-[22px] border border-[#ece9f5] bg-white p-4 shadow-[0_12px_32px_rgba(55,52,77,0.07)] md:p-5">
                  <div className="flex min-h-[280px] items-center justify-center rounded-[14px] bg-white md:min-h-[620px]">
                    <img
                      src={`${import.meta.env.BASE_URL}${screenshot.src}`}
                      alt={screenshot.alt}
                      className="max-h-full w-full rounded-xl object-contain"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 h-10 w-10 border-[#ece9f5] bg-white/95 text-[#6d6196] shadow-sm" />
          <CarouselNext className="right-0 h-10 w-10 border-[#ece9f5] bg-white/95 text-[#6d6196] shadow-sm" />
        </Carousel>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
