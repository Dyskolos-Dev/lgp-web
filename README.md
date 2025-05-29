# LGP-CORP Website

Site web officiel de LGP-CORP présentant nos VPS gratuits et autres services. Développé avec React et Tailwind CSS.

## 🛠 Prérequis

Pour installer et exécuter ce site sous Debian, vous aurez besoin de :

```bash
# Mise à jour du système
sudo apt update && sudo apt upgrade -y

# Installation de Node.js et npm
sudo apt install -y curl
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Installation de Git
sudo apt install -y git

# Vérification des versions
node --version  # Devrait afficher v20.x.x
npm --version   # Devrait afficher 8.x.x ou plus
```

## 📥 Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/Dyskolos-Dev/lgp-web.git
cd lgp-web
```

2. Installez les dépendances :
```bash
npm install
```

## 🚀 Développement

Pour lancer le serveur de développement :
```bash
npm start
```

Le site sera accessible à l'adresse [http://localhost:3000](http://localhost:3000)

## 🏗 Production

1. Construire le site pour la production :
```bash
npm run build
```

2. Installation et configuration de Nginx :
```bash
# Installation de Nginx
sudo apt install -y nginx

# Configuration du pare-feu
sudo apt install -y ufw
sudo ufw allow 'Nginx Full'
sudo ufw enable

# Création de la configuration Nginx
sudo nano /etc/nginx/sites-available/lgp-corp
```

3. Ajoutez la configuration suivante dans le fichier (remplacez example.com par votre domaine) :
```nginx
server {
    listen 80;
    listen [::]:80;
    server_name example.com www.example.com;
    root /var/www/lgp-corp;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }
}
```

4. Activez le site et déployez les fichiers :
```bash
# Activation de la configuration
sudo ln -s /etc/nginx/sites-available/lgp-corp /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# Déploiement des fichiers
sudo mkdir -p /var/www/lgp-corp
sudo cp -r build/* /var/www/lgp-corp/
sudo chown -R www-data:www-data /var/www/lgp-corp
```

5. Configuration SSL avec Certbot :
```bash
# Installation de Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obtention du certificat SSL
sudo certbot --nginx -d example.com -d www.example.com
```

## 🔄 Mise à jour du site

Pour mettre à jour le site avec les derniers changements :
```bash
# Récupération des changements
git pull origin main

# Installation des nouvelles dépendances
npm install

# Construction de la nouvelle version
npm run build

# Déploiement
sudo cp -r build/* /var/www/lgp-corp/
sudo chown -R www-data:www-data /var/www/lgp-corp
```

## 🛡️ Maintenance

Quelques commandes utiles pour la maintenance :

```bash
# Vérifier le statut de Nginx
sudo systemctl status nginx

# Vérifier les logs Nginx
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log

# Redémarrer Nginx
sudo systemctl restart nginx

# Renouveler les certificats SSL
sudo certbot renew
```

## 🔧 Technologies utilisées

- React 18
- Tailwind CSS
- React Router v6
- React Icons
- Hero Icons

## 📝 License

Copyright © LGP-CORP and Dyskolos_ 2020-2025. Tous droits réservés. 