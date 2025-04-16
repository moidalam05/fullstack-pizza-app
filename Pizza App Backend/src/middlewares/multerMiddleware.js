import multer from "multer";
import path from "path";

const storageConfiguration = multer.diskStorage({
	destination: (req, file, next) => {
		next(null, "uploads/");
	},
	filename: (req, file, next) => {
		next(null, `${Date.now()}${path.extname(file.originalname)}`);
	},
});

const uploader = multer({ storage: storageConfiguration });

export default uploader;
