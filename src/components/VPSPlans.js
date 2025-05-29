import React from 'react';
import { FaServer } from 'react-icons/fa';

const VPSPlans = () => {
  const plans = [
    {
      name: 'VPS 1',
      icon: <FaServer className="text-red-500 w-6 h-6" />,
      price: '0.00€',
      description: 'Vous êtes des génies incompris, vous avez besoin d\'une petite structure pour démarrer, cette offre est faite pour vous.',
      specs: {
        cpu: '2 vCore',
        ram: '4 Go RAM',
        storage: '30 Go HDD',
        network: 'IPV6 Dédiée'
      }
    },
    {
      name: 'VPS 2',
      icon: <FaServer className="text-red-500 w-6 h-6" />,
      price: '0.00€',
      description: 'Comme avant mais en mieux',
      specs: {
        cpu: '4 vCore',
        ram: '8 Go RAM',
        storage: '60 Go HDD',
        network: 'IPV6 Dédiée'
      }
    },
    {
      name: 'VPS 3',
      icon: <FaServer className="text-red-500 w-6 h-6" />,
      price: '0.00€',
      description: 'La on commence à envoyer du lourd, faut commencer a être bon pour toucher a ce genre de machines',
      specs: {
        cpu: '8 vCore',
        ram: '12 Go RAM',
        storage: '150 Go HDD',
        network: 'IPV6 Dédiée'
      }
    },
    {
      name: 'VPS 4',
      icon: <FaServer className="text-red-500 w-6 h-6" />,
      price: '0.00€',
      description: 'On a pas mieux (sinon nous contacter, on pourra s\'arranger)',
      specs: {
        cpu: '16 vCore',
        ram: '32 Go RAM',
        storage: '200 Go HDD',
        network: 'IPV6 Dédiée'
      }
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            VPS Gratuits
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Des solutions VPS gratuites et performantes pour tous vos projets
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative bg-gray-800 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {plan.icon}
                  <h3 className="text-xl font-semibold text-white">
                    {plan.name}
                  </h3>
                </div>

                <p className="text-gray-300 text-sm mb-8 min-h-[80px]">
                  {plan.description}
                </p>

                <div className="relative">
                  <div className="w-32 h-32 mx-auto border-4 border-red-500 rounded-full flex items-center justify-center mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">{plan.price}</div>
                      <div className="text-sm text-gray-400">/ MOIS</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-center text-gray-300">
                  <div>{plan.specs.cpu}</div>
                  <div>{plan.specs.ram}</div>
                  <div>{plan.specs.storage}</div>
                  <div>{plan.specs.network}</div>
                </div>

                <div className="mt-8">
                  <a
                    href="https://discord.gg/zVfTafqf5J"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-2 px-4 border-2 border-red-500 text-white font-semibold rounded hover:bg-red-500 transition-colors duration-200 text-center"
                  >
                    Commandez
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tous nos VPS sont hébergés sur des serveurs de haute performance avec une protection DDoS incluse.
            Rejoignez notre Discord pour commander votre VPS gratuit !
          </p>
        </div>
      </div>
    </section>
  );
};

export default VPSPlans; 