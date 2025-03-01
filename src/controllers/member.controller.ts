import { T } from "../libs/types/common";
import { Request, Response } from 'express';

const memberController: T = {};
memberController.goHome = (req: Request, res: Response) => {
    try {
        res.send('You are on the homepage');
    } catch (error) {
        console.log("Error homepage: ", error);
    }
}

memberController.getLogin = (req: Request, res: Response) => {
    try {
        res.send('You are on the login page');
    } catch (error) {
        console.log("Error Login: ", error);
    }
}

memberController.getSignup = (req: Request, res: Response) => {
    try {
        res.send('You are on the signup page');
    } catch (error) {
        console.log("Error signup: ", error);
    }
}

export default memberController;