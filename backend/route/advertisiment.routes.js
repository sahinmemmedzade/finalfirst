// routes/advertisiment.routes.js

import express from 'express';
import { addAdvertisement ,getSingleAdvertisement,deleteAdvertisement} from '../controlller/advertisiment.controller.js';

const router = express.Router();

// Route for creating a new advertisement
router.post('/', addAdvertisement);
router.get('/:advertisementId', getSingleAdvertisement);
router.delete('/:advertisementId', deleteAdvertisement);

export default router;
