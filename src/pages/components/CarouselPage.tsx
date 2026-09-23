import { useState } from "react";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Carousel } from "@/components/Carousel/Carousel";

const CarouselPage = () => {
  const [autoplay, setAutoplay] = useState(false);

  const usageCode = `import { Carousel } from "@/components/Carousel/Carousel";

const slides = [
  <div>First slide</div>,
  <div>Second slide</div>,
  <div>Third slide</div>,
];

<Carousel items={slides} />
<Carousel items={slides} autoPlay interval={4000} />
<Carousel items={slides} loop={false} showIndicators={false} />`;

  const propsData = [
    {
      prop: "items",
      type: "ReactNode[]",
      default: "-",
      description: "Slides rendered inside the carousel",
    },
    {
      prop: "autoPlay",
      type: "boolean",
      default: "false",
      description: "Automatically advances through the slides",
    },
    {
      prop: "interval",
      type: "number",
      default: "5000",
      description: "Delay between autoplay transitions in milliseconds",
    },
    {
      prop: "loop",
      type: "boolean",
      default: "true",
      description: "Returns to the first slide after the last slide",
    },
    {
      prop: "showIndicators",
      type: "boolean",
      default: "true",
      description: "Shows buttons for selecting a slide directly",
    },
    {
      prop: "variant",
      type: '"default" | "muted" | "contrast"',
      default: '"default"',
      description: "Visual style of the carousel container",
    },
  ];

  const featureSlides = [
    <div className="flex min-h-64 flex-col justify-end bg-(--primary-color) p-16 text-white">
      <span className="mb-2 text-sm font-medium uppercase tracking-wider text-white/75">
        Featured
      </span>
      <h3 className="text-3xl font-semibold">Build with intention.</h3>
      <p className="mt-2 max-w-md text-sm text-white/80">
        A bold content slide for product highlights and announcements.
      </p>
    </div>,
    <div className="flex min-h-64 flex-col justify-center bg-(--card-bg) p-16 text-(--text-color)">
      <span className="mb-3 text-4xl">01</span>
      <h3 className="text-2xl font-semibold">Simple navigation</h3>
      <p className="mt-2 text-sm text-(--muted-text-color)">
        Use arrows, indicators, or keyboard focus to move between slides.
      </p>
    </div>,
    <div className="flex min-h-64 flex-col justify-center bg-(--text-color) p-16 text-(--bg-color)">
      <span className="mb-3 text-sm uppercase tracking-wider opacity-70">
        Flexible
      </span>
      <h3 className="text-2xl font-semibold">Any React content</h3>
      <p className="mt-2 text-sm opacity-75">
        Cards, testimonials, product details, and more can be slides.
      </p>
    </div>,
  ];

  const testimonialSlides = [
    <div className="flex min-h-52 flex-col justify-center bg-(--bg-color) p-16 text-(--text-color)">
      <p className="text-lg leading-relaxed">
        “The cleanest way to present a short customer story.”
      </p>
      <span className="mt-5 text-sm text-(--muted-text-color)">
        Maya Chen, Product Designer
      </span>
    </div>,
    <div className="flex min-h-52 flex-col justify-center bg-(--bg-color) p-16 text-(--text-color)">
      <p className="text-lg leading-relaxed">
        “Small details make the whole interface feel considered.”
      </p>
      <span className="mt-5 text-sm text-(--muted-text-color)">
        Jordan Ellis, Frontend Engineer
      </span>
    </div>,
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-12 p-4 sm:p-6">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Carousel</h1>
        <p className="text-lg text-(--muted-text-color)">
          A flexible slider for presenting related content one slide at a time.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Featured content</h2>
        <ComponentDemo code={usageCode}>
          <Carousel items={featureSlides} ariaLabel="Featured content" />
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Autoplay carousel</h2>
        <div className="space-y-4">
          <button
            type="button"
            onClick={() => setAutoplay((isAutoplaying) => !isAutoplaying)}
            className="rounded-md border border-(--border-color) bg-(--card-bg) px-4 py-2 text-sm font-medium text-(--text-color) transition-colors hover:border-(--primary-color)"
          >
            {autoplay ? "Pause autoplay" : "Start autoplay"}
          </button>
          <Carousel
            items={testimonialSlides}
            autoPlay={autoplay}
            interval={3500}
            variant="muted"
            ariaLabel="Customer testimonials"
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Minimal carousel</h2>
        <ComponentDemo code={usageCode}>
          <Carousel
            items={[
              <div className="flex min-h-40 items-center justify-center p-16 text-center text-(--muted-text-color)">
                Product updates
              </div>,
              <div className="flex min-h-40 items-center justify-center p-16 text-center text-(--muted-text-color)">
                Design inspiration
              </div>,
              <div className="flex min-h-40 items-center justify-center p-16 text-center text-(--muted-text-color)">
                Engineering notes
              </div>,
            ]}
            loop={false}
            showIndicators={false}
            variant="muted"
            ariaLabel="Topics"
          />
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default CarouselPage;
