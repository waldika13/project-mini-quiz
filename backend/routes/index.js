import express from "express";
import { getUsers , Register, Login, Logout} from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { 
    getAllProfile,
    createProfile,
    getProfileById,
    updateProfile,
    deleteProfile
} from "../controllers/Profile.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.delete('/logout', Logout);
router.get('/token', refreshToken);
router.get('/profile', getAllProfile);
router.get('/:id', getProfileById);
router.post('/profile', createProfile);
router.patch('/:id', updateProfile);
router.delete('/:id', deleteProfile);
 

export default router;