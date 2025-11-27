import { diskStorage } from 'multer';
import { extname } from 'path';

export const institutionUploadConfig = {
  storage: diskStorage({
    destination: './uploads/institutions/images',
    filename: (req, file, callback) => {
      const unique = Date.now() + '-' + Math.floor(Math.random() * 9999);
      callback(null, `${unique}${extname(file.originalname)}`);
    },
  }),
};
