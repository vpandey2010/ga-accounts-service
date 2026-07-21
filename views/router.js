import express from "express";
import accountsController from "../controllers/accountsController.js";

const Router = express.Router();

Router.route("/accounts")   // This creats an endpoint for accounts/
    .get(accountsController.getAllAccounts)
    .post(accountsController.createAccount);

Router.route("/accounts/:id")  //Id here represents dynamic parameter with account num
    .get(accountsController.getAccountById)
    .put(accountsController.updateAccountById)
    .delete(accountsController.deleteAccountById);

export default Router;