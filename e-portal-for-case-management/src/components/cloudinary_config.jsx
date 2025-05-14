// cloudinary_config.js
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dm5lybuz2',
  api_key: '597835382986128',
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;
