import Image from "next/image";

// Define an interface for testimonial data
interface Testimonial {
  quote: string;
  author: string;
  title: string;
  avatarSrc: string;
}

export const TestimonialsSection = () => {
  const testimonial: Testimonial = {
    quote:
      "Integer consectetur. Integer metus sollicitudin eu tellus. Consequat tortor neque diam vulputate semper pretium. Elementum id et aliquet consectetur.",
    author: "Malik Adeleke",
    title: "Brand Owner",
    avatarSrc: "/images/testimonialAvatar.png",
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left Column: Heading and Navigation */}
          <div>
            <p className="mb-2 text-sm font-semibold tracking-wider text-red-500 uppercase">
              TESTIMONIALS
            </p>
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Our Customer Stories
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Here’s what people have to say About ClouTeraHub. Real moments,
              real experiences, real feedback.
            </p>
            <div className="flex space-x-4">
              <button className="rounded-full bg-red-500 p-3 text-white transition-colors duration-200 hover:bg-red-600"></button>
              <button className="rounded-full bg-red-500 p-3 text-white transition-colors duration-200 hover:bg-red-600"></button>
            </div>
          </div>

          {/* Right Column: Testimonial Card */}
          <div className="relative rounded-lg bg-white p-8 shadow-lg">
            {/* Quote icon */}
            <div className="absolute top-0 left-0 -mt-6 -ml-6 text-9xl leading-none font-bold text-gray-200 opacity-70 md:-mt-8 md:-ml-8">
              &ldquo;
            </div>
            <h3 className="relative z-10 mb-4 text-3xl font-bold text-gray-900">
              Quality Services
            </h3>
            <p className="relative z-10 mb-6 text-lg text-gray-600">
              {testimonial.quote}
            </p>
            <div className="flex items-center space-x-4">
              <Image
                src={testimonial.avatarSrc}
                alt={testimonial.author}
                width={64}
                height={64}
                className="rounded-full border-2 border-red-500 object-cover"
              />
              <div>
                <p className="text-lg font-semibold text-gray-900">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
