import React from 'react';
import { FaDiscord, FaTwitter, FaHeart, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Discord',
      url: 'https://discord.gg/zVfTafqf5J',
      icon: <FaDiscord className="w-6 h-6" />
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/Leard44',
      icon: <FaTwitter className="w-6 h-6" />
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UC7qmZ9tMhgniRfoZGtELZqQ',
      icon: <FaYoutube className="w-6 h-6" />
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/lgp_leard/',
      icon: <FaInstagram className="w-6 h-6" />
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-4">LGP Corp</h3>
            <p className="text-sm max-w-md mx-auto">
              Votre partenaire de confiance pour des solutions VPS gratuites et performantes.
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-gray-700 w-full">
            <div className="text-center">
              <p className="flex items-center justify-center space-x-1">
                <span>Copyright © LGP-CORP 2020-2025 - Made with</span>
                <FaHeart className="w-4 h-4 text-red-500 mx-1" />
                <span>By</span>
                <a
                  href="https://dyskolos.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-400 transition-colors duration-200 ml-1"
                >
                  Dyskolos_
                </a>
              </p>
              <p className="mt-1">All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 