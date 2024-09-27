import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {

  mode: 'development',
   entry: {
     index: './src/index.js'
   },
   plugins: [
     new HtmlWebpackPlugin({

      title: 'Development',
     }),
   ],
   output: {
     filename: 'add_dojo.bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
 };
