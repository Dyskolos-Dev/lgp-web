import React from 'react';
import { Link } from 'react-router-dom';
import { FaServer, FaShieldAlt, FaBolt, FaDiscord, FaRocket } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative bg-gray-900">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-10"></div>
        <div className="absolute inset-y-0 right-0 w-1/2">
          <svg
            className="absolute inset-0 h-full w-full text-gray-900"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <polygon points="0,0 100,0 100,100" className="text-gray-800 fill-current" />
          </svg>
        </div>
      </div>

      <div className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-sm font-semibold uppercase tracking-wide text-gray-300 sm:text-base lg:text-sm xl:text-base">
                  LGP Corp
                </span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="block text-white">VPS Gratuits</span>
                  <span className="block text-blue-400">Pour Tous</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Obtenez votre serveur VPS gratuit en quelques minutes. Idéal pour vos projets web, 
                serveurs de jeux ou environnements de développement.
              </p>
              <div className="mt-8 sm:mt-12">
                <div className="sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="https://discord.gg/zVfTafqf5J"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                    >
                      <FaDiscord className="w-5 h-5 mr-2" />
                      Rejoindre Discord
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/vps"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
                    >
                      <FaRocket className="w-5 h-5 mr-2" />
                      Voir les offres
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-gray-800 rounded-lg overflow-hidden">
                  <div className="p-8">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <FaServer className="mx-auto h-10 w-10 text-blue-400" />
                        <p className="mt-2 text-white font-medium">Accès Root</p>
                      </div>
                      <div className="text-center">
                        <FaShieldAlt className="mx-auto h-10 w-10 text-blue-400" />
                        <p className="mt-2 text-white font-medium">Anti-DDoS</p>
                      </div>
                      <div className="text-center">
                        <FaBolt className="mx-auto h-10 w-10 text-blue-400" />
                        <p className="mt-2 text-white font-medium">Rapide</p>
                      </div>
                      <div className="text-center">
                        <div className="mx-auto h-10 w-10 text-blue-400 flex items-center justify-center text-2xl font-bold">
                          24/7
                        </div>
                        <p className="mt-2 text-white font-medium">Support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 