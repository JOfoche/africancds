'use client';

const mediaImages = [
  '/Media5.jpg',
  '/media/Media11.jpg',
  '/media/Media15.jpg',
  '/media/Media14.jpg',
  
];

export default function MediaGallery() {
  return (
    <section className="p-6 lg:px-12 lg:py-40 bg-primary">
      <div className=" mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-200 mb-6">
          Event Highlights
        </h2>
        <p className="text-center text-gray-100 mb-10 max-w-2xl mx-auto">
          A visual glimpse into the powerful conversations, connections, and collaborations from the summit.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  lg:gap-12">
          {mediaImages.map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow">
              <img
                src={src}
                alt={`Summit Highlight ${idx + 1}`}
                className=" lg:min-w-[500px] w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
