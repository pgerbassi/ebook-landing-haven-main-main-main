
const videoTestimonials = [
  {
    id: "video1",
    title: "De iniciante a fluente em 3 meses",
    author: "Carlos Silva",
    occupation: "Empresário",
    embedId: "your-video-id-1"
  },
  {
    id: "video2",
    title: "Aprovada em 4 testes internacionais",
    author: "Marina Santos",
    occupation: "Estudante",
    embedId: "your-video-id-2"
  },
  {
    id: "video3",
    title: "Viajando pelo mundo com 7 idiomas",
    author: "Pedro Costa",
    occupation: "Fotógrafo",
    embedId: "your-video-id-3"
  }
];


export const VideoTestimonialsSection = () => {
  return (
    <section className="py-20 bg-blue-600">
    <div className="container mx-auto max-w-6xl px-4">
      <div className="opacity-100">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Depoimentos em <span className="text-yellow-300">Vídeo</span>
        </h2>
        <div className="video-grid">
          {videoTestimonials.map((video) => (
            <div key={video.id} className="opacity-90">
              <div className="bg-blue-800 rounded-xl overflow-hidden shadow-xl hover:transform hover:scale-105 transition-duration-300">
                <div className="video-testimonial">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-yellow-300 mb-2">{video.title}</h3>
                  <p className="text-white">{video.author}</p>
                  <p className="text-gray-400 text-sm">{video.occupation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};