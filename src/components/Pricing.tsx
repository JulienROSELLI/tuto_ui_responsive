import { Section } from "./Section";
import smallSphere from "../assets/4-small.png";
import stars from "../assets/pricing/stars.svg";
import Heading from "./Heading";
import { PricingList } from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
export const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative mb-[6.5rem] justify-center lg:flex">
          <img src={smallSphere} alt="sphere" width={255} height={255} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] pointer-events-none">
            <img
              src={stars}
              alt="Stars"
              className="w-full"
              width={950}
              height={400}
            />
          </div>
        </div>
        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever."
        />
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <a
          href="/pricing"
          className="text-xs font-code font-bold tracking-wide"
        >
          See the full details
        </a>
      </div>
    </Section>
  );
};
