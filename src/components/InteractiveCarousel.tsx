import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from 'embla-carousel-autoplay'
import { SanityImage } from "./SanityImage";
import NoiseLight from "./NoiseLight";

interface Image {
  alt: string;
  src: string;
}

interface InteractiveCarouselProps {
  imagesArray: Image[];
}

const InteractiveCarousel: React.FC<InteractiveCarouselProps> = ({ imagesArray }) => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      opts={{ loop: true }}
      className="w-full h-full overflow-hidden">
      <CarouselContent className="h-full w-full ml-0">
        {imagesArray && imagesArray.map((image, index) => (
          <CarouselItem key={index} className="h-full w-full pl-0 md:pl-0 lg:pl-0">
            <SanityImage
             aspectRatio="16:9"
              className="size-full object-fill"
              data={image}
              loading="lazy"
              showBorder={false}
              showShadow={false}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50">
        <NoiseLight /> 
      </div>
    </Carousel>
  );
};

export default InteractiveCarousel;