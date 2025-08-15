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
          Descubre nuestras últimas colocaciones y consejos inmobiliarios siguiéndonos en Instagram
        </p>

        {/* Grid de posts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden rounded-lg shadow-md block"
            >
              <img
                src={post.imagen}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white text-sm truncate">{post.caption}</p>
                <div className="flex items-center mt-1 text-white text-xs space-x-4">
                  <span><i className="far fa-heart mr-1"></i> {post.likes || '1k'}</span>
                  <span><i className="far fa-comment mr-1"></i> {post.comments || '100'}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/_pisosya/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-lg shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
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