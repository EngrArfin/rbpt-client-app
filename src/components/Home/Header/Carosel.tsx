import React, { useEffect, useRef, useState } from "react";

import header1 from "../../../assets/images/header1.jpg";
import header2 from "../../../assets/images/header2.jpg";
import header3 from "../../../assets/images/header3.jpg";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [header1, header2, header3, header1, header2, header3];

export function Carosel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Move carousel every 3 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalImages - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [totalImages]);

  return (
    <Carousel className="w-full overflow-hidden">
      <CarouselContent
        className="transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          display: "flex",
        }}
      >
        {images.map((imageSrc, index) => (
          <CarouselItem
            key={index}
            className="min-w-full flex-shrink-0 flex-grow-0"
          >
            <Card className="w-full">
              <CardContent className="flex items-center justify-center p-0">
                <img
                  src={imageSrc}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-50% object-cover"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Optional Controls */}
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
