# Utiliser une image Node.js comme base
FROM node:14

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier le fichier package.json et installer les dépendances
COPY package.json ./
RUN npm install

# Copier le reste de l'application
COPY . .

# Exposer le port de l'application
EXPOSE 3005

# Démarrer l'application
CMD ["node", "app.js"]
