const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfiguration = {
  output: 'export', // ✅ Garante que o Next.js gere arquivos estáticos para Netlify
  images: {
    unoptimized: true, // ✅ Evita problemas de otimização de imagens no Netlify
  },
};

module.exports = withPlugins([optimizedImages], nextConfiguration);
