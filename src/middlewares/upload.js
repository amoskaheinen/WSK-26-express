import sharp from 'sharp';

const createThumbnail = async (req, res, next) => {
  if (!req.file) {
    next();
    return;
  }

  console.log('Creating thumbnail for:', req.file.path);

  try {
    await sharp(req.file.path)
      .resize(160, 160)
      .png()
      .toFile(`${req.file.path}_thumb`);

    next();
  } catch (error) {
    console.error('Error creating thumbnail:', error);
    next(error);
  }
};

export {createThumbnail};
