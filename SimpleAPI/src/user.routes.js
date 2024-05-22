import express from 'express';
import { expressYupMiddleware } from 'express-yup-middleware';

import userController from './controllers/user.controller.js';
import {getUser, addUser, updateUser, removeUser} from './user.schema.js';

const router = express.Router();


router.get('/all', userController.getAllUsers);

router.get(
    '/:id',
    expressYupMiddleware({
        schemaValidator: getUser
    }),
    userController.getUser
);

router.post(
    '/',
    expressYupMiddleware({
        schemaValidator: addUser
    }),
    userController.addUser
);

router.put(
    '/:id',
    expressYupMiddleware({ schemaValidator: updateUser }),
    userController.updateUser
);

router.delete(
    '/:id',
    expressYupMiddleware({ schemaValidator: removeUser }),
    userController.deleteUser
);

export default router;
