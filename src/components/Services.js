import React from 'react';
import { FaCloud, FaGlobe, FaCompactDisc, FaBook, FaPlay } from 'react-icons/fa';

const services = [
  {
    name: 'Sans Domaine Fixe',
    description: 'Pour tous les gens qui n\'ont pas de quoi se payer un nom de domaine, enregistrement gratuit offert par LGP Corp.',
    icon: <FaGlobe className="h-8 w-8" />,
    url: 'https://sansdomainefixe.xyz'
  },
  {
    name: 'LGP Cloud',
    description: 'Service de stockage cloud gratuit avec des millions de TO disponibles.',
    icon: <FaCloud className="h-8 w-8" />,
    url: 'https://lgp-cloud.fr'
  },
  {
    name: 'LGP ISO',
    description: 'Téléchargez facilement des images ISO pour tous vos systèmes d\'exploitation.',
    icon: <FaCompactDisc className="h-8 w-8" />,
    url: 'https://lgp-iso.fr'
  },
  {
    name: 'LGP Learning',
    description: 'Documentation accessible depuis un niveau Bac, incluant PPT, PDF et Wiki.',
    icon: <FaBook className="h-8 w-8" />,
    url: 'https://lgp-learning.fr'
  },
  {
    name: 'Jellyfin',
    description: 'Service de streaming multimédia gratuit.',
    icon: <FaPlay className="h-8 w-8" />,
    url: 'https://jellyfin.lgp-corp.fr'
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Nos Services
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Découvrez notre gamme complète de services gratuits
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <a
              key={service.name}
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col bg-gray-900 rounded-lg p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 text-red-500">
                  {service.icon}
                </div>
                <h3 className="ml-4 text-xl font-semibold text-white">
                  {service.name}
                </h3>
              </div>
              <p className="mt-2 text-gray-300 flex-grow">
                {service.description}
              </p>
              <div className="mt-4 text-red-500 font-medium hover:text-red-400">
                Accéder au service →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 