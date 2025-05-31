import React from "react";
import useAppData from "../utils/appData";

const InstagramFeed = () => {
  const { instagramPosts } = useAppData();
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-orange-900">
          Síguenos en <span className="text-orange-500">Instagram</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Descubre nuestras últimas colocaciones y consejos inmobiliarios
          siguiéndonos en Instagram
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="relative group overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={post.imagen}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-orange-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <p className="text-white text-center">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-indigo-700 hover:text-indigo-800 font-bold cursor-pointer"
          >
            <i className="fab fa-instagram mr-2 text-xl"></i>
            Seguir en Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
