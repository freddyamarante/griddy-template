import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay'
import { SanityImage } from "./SanityImage";

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
          delay: 2000,
        }),
      ]}
      className="w-full h-full">
      <CarouselContent className="h-full w-full">
        {imagesArray && imagesArray.map((image, index) => (
          <CarouselItem key={index} className="h-full w-full">
            <SanityImage
              aspectRatio="square"
              className="size-full object-fill"
              data={image ? { alt: image.alt, asset: { _ref: image.src, _type: "reference" } } : null}
              loading="lazy"
              showBorder={false}
              showShadow={false}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default InteractiveCarousel;