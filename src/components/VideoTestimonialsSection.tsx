
const videoTestimonials = [
  {
    id: "video1",
    title: "Fluencia em 2 meses em russo",
    author: "João",
    occupation: "Aluno",
    embedId: "j7Qz9frfXPw"
  },
  {
    id: "video2",
    title: "Desafio de ser tornar hiperpoliglota em 1 ano",
    author: "Felipe",
    occupation: "Aluno",
    embedId: "0E5MqKoD0dA"
  },
  {
    id: "video3",
    title: "Conquistou o certificado de proficiência em alemão em 1 mês",
    author: "Daniele",
    occupation: "Aluna",
    embedId: "1tjNbqwuAIc"
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