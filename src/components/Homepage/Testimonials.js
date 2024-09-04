import React from 'react';
import starrs from './../Homepage/Testimonials/star.png';

const TestimonialCard = ({ rating, title, content, author, location, imageSrc }) => (
  <div className="TestimonialCard flex flex-col items-center p-5 bg-green-500 rounded-xl border border-solid border-neutral-800 w-full md:w-[31.25vw] max-w-[375px] min-w-[375px]">
    <div className="flex gap-2.5 justify-center items-center">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center justify-center p-2.5 w-10 h-10 border border-solid bg-zinc-900 border-neutral-800 rounded-full">
          <img loading="lazy" src={starrs} alt="Star rating" className="object-contain w-6 h-6" />
        </div>
      ))}
    </div>
    <div className="flex flex-col mt-6 text-center">
      <h3 className="text-xl md:text-2xl font-semibold text-black">{title}</h3>
      <p className="mt-3.5 text-lg font-medium leading-7 text-white">{content}</p>
    </div>
    <div className="flex items-center justify-center mt-6 w-full font-medium">
      <img loading="lazy" src={imageSrc} alt={author} className="object-contain rounded-full aspect-square w-[60px] md:w-[70px]" />
      <div className="flex flex-col ml-3 text-center">
        <div className="text-xl text-white">{author}</div>
        <div className="text-lg text-black">{location}</div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      rating: 5,
      title: "Exceptional Service!",
      content: "Finwise transformed my approach to financial planning. Their financial tools have made it so easy to set clear goals and track my progress. I finally feel that I am in control of my financial future.",
      author: "Sai",
      location: "UK, Edinburgh",
      imageSrc: require('./../Homepage/Testimonials/sai.png')
    },
    {
      rating: 5,
      title: "Efficient and Reliable",
      content: "I wish I had found Finwise years ago. Their easy-to-use tools and comprehensive planning strategies have helped me optimize my savings and enjoy my retirement with peace of mind.",
      author: "Kate",
      location: "UK, Glasgow",
      imageSrc: require('./../Homepage/Testimonials/kate.png')
    },
    {
      rating: 5,
      title: "Fun and insightful",
      content: "The way they teach about the financial concepts is kinda fun and insightful. 100% recommended if someone is struggling with money or to understand basic or even advanced financial concepts.",
      author: "Matthew",
      location: "UK, London",
      imageSrc: require('./../Homepage/Testimonials/matthew.png')
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center px-4 py-10 mt-25 md:px-0 md:mt-0">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-xl font-semibold text-blue-900 md:text-5xl max-w-full">Word from Our People</h2>
        <p className="mt-3.5 text-lg font-medium text-neutral-400 max-w-full">Read the success stories and heartfelt testimonials from our valued members.</p>
      </div>
      <div className="flex flex-wrap justify-center text-start gap-6 mt-10 w-full">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
