import { useState } from "react";

const App = () => {
  const [slide, setSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Tanya Sinclair",
      career: "UX Engineer",
      image: "image-tanya.jpg",
      said: `"I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future."`,
    },
    {
      id: 2,
      name: "John Tarkpor",
      career: "Junior Front-end Developer",
      image: "image-john.jpg",
      said: "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
    },
  ];

  const testimonialsFiltered = testimonials.filter((t) => t.id === slide + 1);

  return (
    <div className="relative w-screen h-dvh font-display overflow-x-hidden">
      <img
        className="absolute w-16 sm:top-40 top-90 sm:left-60 left-30"
        src="pattern-quotes.svg"
        alt=""
      />

      <img
        className="absolute sm:right-30 right-0 sm:top-10 top-4 sm:max-w-xl max-w-[350px]"
        src="pattern-bg.svg"
        alt=""
      />

      <div className="sm:flex block mt-10 justify-center items-center h-screen">
        {testimonialsFiltered.map((t) => (
          <div
            key={t.id}
            className="relative sm:grid sm:grid-cols-[3fr_1fr] flex gap-y-18 flex-col-reverse w-full items-center max-w-4xl"
          >
            <div className="z-40">
              <p className="sm:text-3xl text-lg text-Blue-950 text-center sm:text-left sm:max-w-xl max-w-sm">
                {t.said}
              </p>
              <div className="sm:flex block text-center gap-x-4 mt-4">
                <p className="font-bold text-Blue-950">{t.name}</p>
                <p className="font-bold text-Gray-400">{t.career}</p>
              </div>
            </div>
            <div className="sm:absolute right-0 shadow-lg">
              <img className="max-w-full sm:w-sm w-3xs" src={t.image} alt="" />
            </div>

            <div className="z-50 absolute sm:right-60 top-60 px-4 gap-x-8 sm:py-4 py-3 sm:top-70 bg-white shadow-lg flex rounded-3xl">
              <button
                className="cursor-pointer rounded-l-3xl"
                onClick={() =>
                  setSlide(
                    (slide - 1 + testimonials.length) % testimonials.length
                  )
                }
              >
                <img src="icon-prev.svg" alt="" />
              </button>
              <button
                className="cursor-pointer rounded-r-3xl"
                onClick={() => setSlide((slide + 1) % testimonials.length)}
              >
                <img src="icon-next.svg" alt="" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
