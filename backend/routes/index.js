import express from "express";
import { getUsers , Register, Login, Logout} from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { 
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
} from "../controllers/Products.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.delete('/logout', Logout);
router.get('/token', refreshToken);
router.get('/products', getAllProducts);
router.get('/:id', getProductById);
router.post('/products', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);
 

export default router;