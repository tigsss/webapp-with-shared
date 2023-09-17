const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your other Next.js config options...

  webpack: (config) => {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      include: [
        path.resolve(__dirname, 'src'), // Your app's source code
        path.resolve(__dirname, '..', 'shared', 'src'), // Your shared package source code
      ],
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  node: 'current', // or your target environment
                },
              },
            ],
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
          plugins: [
            // '@babel/plugin-proposal-class-properties',
            // '@babel/plugin-proposal-object-rest-spread',
            // '@babel/plugin-transform-runtime',
            // Other plugins...
          ],
          // Custom Babel configuration...
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
