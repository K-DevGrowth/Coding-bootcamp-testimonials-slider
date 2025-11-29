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
    <div className="relative w-screen min-h-screen font-display">
      <img className="fixed top-40 left-60" src="pattern-quotes.svg" alt="" />

      <img className="fixed right-30 top-10 max-w-xl" src="pattern-bg.svg" alt="" />

      <div className="flex justify-center items-center h-screen">
        {testimonialsFiltered.map((t) => (
          <div
            key={t.id}
            className="relative grid grid-cols-[3fr_1fr] w-full items-center max-w-4xl"
          >
            <div className="z-40">
              <p className="text-3xl max-w-xl">{t.said}</p>
              <div className="flex gap-x-4 mt-4">
                <p className="font-bold text-Blue-950">{t.name}</p>
                <p className="font-bold text-Gray-400">{t.career}</p>
              </div>
            </div>
            <div className="absolute right-0 shadow-lg">
              <img className="max-w-full w-sm" src={t.image} alt="" />
            </div>
            <div className="z-50 fixed right-110 top-120 bg-white shadow-lg flex rounded-3xl">
              <button
                className="cursor-pointer p-4 hover:bg-Blue-950 transition-colors duration-300 rounded-l-3xl"
                onClick={() =>
                  setSlide(
                    (slide - 1 + testimonials.length) % testimonials.length
                  )
                }
              >
                <img src="icon-prev.svg" alt="" />
              </button>
              <button
                className="cursor-pointer p-4 hover:bg-Blue-950 transition-colors duration-300 rounded-r-3xl"
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
