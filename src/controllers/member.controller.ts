import { T } from "../libs/types/common";
import { Request, Response } from 'express';
import MemberService from "../models/Member.service";

const memberController: T = {};
memberController.goHome = (req: Request, res: Response) => {
    try {
        console.log('You are on the homepage');
        res.send('You are on the homepage');
        // send | json | render | redirect | end
    } catch (error) {
        console.log("Error homepage: ", error);
    }
}

memberController.getLogin = (req: Request, res: Response) => {
    try {
        console.log('You are on the login page');
        res.send('You are on the login page');
    } catch (error) {
        console.log("Error Login: ", error);
    }
}

memberController.processLogin = (req: Request, res: Response) => {
    try {
        console.log('You are on the processLogin');
        res.send('You are on the processLogin');
    } catch (error) {
        console.log("Error processLogin: ", error);
    }
}

memberController.getSignup = (req: Request, res: Response) => {
    try {
        console.log('You are on the signup page');
        res.send('You are on the signup page');
    } catch (error) {
        console.log("Error signup: ", error);
    }
}

memberController.processSignup = (req: Request, res: Response) => {
    try {
        console.log('You are on the processSignup');
        res.send('You are on the processSignup');
    } catch (error) {
        console.log("Error processSignup: ", error);
    }
}

export default memberController;