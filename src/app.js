import * as React from "react";
import "./styles.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function App() {
  return (
    <div className="grid gap-4 h-auto grid-cols-1 grid-rows-auto lg:m-15 lg:mx-56">
      <div className="flex flex-col gap-3 bg-white rounded-lg shadow-lg h-70 p-6 m-10 md:flex-row">
        <div className="rounded-2xl h-auto w-md overflow-hidden shadow mx-auto md:mx-2 md:w-2/3 ">
          <img
            src="https://13urning-personal-portfolio.vercel.app/static/media/pardotdemo.f6105f69b328268feee3.png"
            alt=""
          />
        </div>
        <div className="mx-auto flex flex-col h-auto justify-center text-center my-4 w-md min-w-sm md:w-1/3">
          <h3 className="animate-typing text-xl mb-2 font-semibold">
            Pardot Landing Pages
          </h3>
          <p className="text-md font-medium text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            facilisis, tellus at convallis feugiat, mauris erat hendrerit risus,
            vel ultrices lacus eros sed velit. Aliquam est sem, porta quis
            sollicitudin a, pulvinar eget quam. Sed eu orci at massa malesuada
            dignissim quis eget erat. Nam urna metus, vulputate ut magna eget,
            aliquam scelerisque arcu.
          </p>
          <div className="text-sm font-medium flex gap-3 mt-5 justify-center">
            <p className="shadow-xl p-3 rounded-md border hover:bg-gray-100">
              HTML
            </p>
            <p className="shadow-xl p-3 rounded-md border hover:bg-gray-100">
              CSS
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 bg-white rounded-lg shadow-lg h-70 p-6 m-10 md:flex-row-reverse">
        <div className="rounded-2xl h-auto w-md overflow-hidden shadow mx-auto md:mx-2 md:w-2/3 ">
          <Carousel
            showStatus={false}
            showThumbs={false}
            swipeable
            emulateTouch={true}
            showArrows={false}
            stopOnHover={true}
            infiniteLoop
            autoPlay
          >
            <div>
              <img
                src="https://13urning-personal-portfolio.vercel.app/static/media/pardotdemo.f6105f69b328268feee3.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://13urning-personal-portfolio.vercel.app/static/media/pardotdemo.f6105f69b328268feee3.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://13urning-personal-portfolio.vercel.app/static/media/pardotdemo.f6105f69b328268feee3.png"
                alt=""
              />
            </div>
          </Carousel>
        </div>
        <div className="mx-auto flex flex-col h-auto justify-center text-center my-4 w-md min-w-sm md:w-1/3">
          <h3 className="text-xl mb-2 font-semibold">Pardot Landing Pages</h3>
          <p className="text-md font-medium text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            facilisis, tellus at convallis feugiat, mauris erat hendrerit risus,
            vel ultrices lacus eros sed velit. Aliquam est sem, porta quis
            sollicitudin a, pulvinar eget quam. Sed eu orci at massa malesuada
            dignissim quis eget erat. Nam urna metus, vulputate ut magna eget,
            aliquam scelerisque arcu.
          </p>
          <div className="text-sm font-medium flex gap-3 mt-5 justify-center">
            <p className="shadow-xl p-3 rounded-md border hover:bg-gray-100">
              HTML
            </p>
            <p className="shadow-xl p-3 rounded-md border hover:bg-gray-100">
              CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
