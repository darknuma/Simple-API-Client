import userServices from "../services/user.services.js";
import { StatusCodes } from "http-status-codes";
import pino from 'pino';

const logger = pino();


const STATUS = {
    SUCCESS: 'OK',
    FAILURE: "NO",
};

const getAllUsers = (req, res) => {

    const users = userServices.getAllUsers();


    if (users.length){
        return res.status(StatusCodes.OK).send(users);
    }

    return res.status(StatusCodes.NOT_FOUND).send(
        {
        status: STATUS.FAILURE,
        user: 'No Users found.'
        }
    )

};

const getUser = (req, res) => {

    const id = parseInt(req.params.id, 10);

    const user = userServices.getUser(id);


    if (user){
        return res.status(StatusCodes.OK).send({
            status: StatusCodes.SUCCESS,
            data: user,
        });
    }

    return res.status(StatusCodes.NOT_FOUND).send(
        {
        status: STATUS.FAILURE,
        message: `Users ${id} not found`,
        }
    )

};
/**
 * Add a user
 * @param req- 
 * @param res 
 * @param return {*.
 */
const addUser = (req, res) => {
    const {body:user} = req;
    const addedUser = userServices.addUser(user);

    logger.info('Creating a User');

    res.status(StatusCodes.CREATED).send({
        status:STATUS.SUCCESS,
        message: addedUser,
    });
};

/**
 * Update a user
 * @param - user id 
 * @param req -request
 */

const updateUser = (req, res)=> {
    
    const {body:user} = req;

    const id = parseInt(req.params.id, 10);

    const updateUser = userServices.updateUser(id, user);

    if (updateUser){
        logger.info('Updating a User');

        return res.status(StatusCodes.OK).send({
            status:STATUS.SUCCESS,
            message: updateUser,
    });



    } else {
        return res.status(StatusCodes.NOT_FOUND).send({
            status:STATUS.FAILURE,
            message: `User "${id}" is not found`,
        });
    }
};

const deleteUser = (req, res)=> {
    const { params } = req;
    const id = parseInt(params.id, 10);

    const user = userServices.getUser(id);

    if (user){
        userServices.removeUser(id);
        logger.info(`Removing user  ${id}`);
        return res.status(StatusCodes.OK).send({
            status: STATUS.SUCCESS,
            message: `User ${id} has been deleted.`
        }); 

       
    } else {
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.FAILURE,
            message: `User ${id} hasn't been found.`})
    }

 

};


export default {
    getAllUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
    
}