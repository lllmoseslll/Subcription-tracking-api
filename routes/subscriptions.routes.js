import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";

const subscriptionsRouter = Router();

subscriptionsRouter.get("/", (req, res) => {
  res.json({
    message: "get all subscriptions",
  });
});



subscriptionsRouter.get("/:id", (req, res) => {
  res.json({
    message: "get all subscription by id",
  });
});



subscriptionsRouter.post("/", authorize, createSubscription);



subscriptionsRouter.put("/:id", (req, res) => {
  res.json("edit a subscription");
});



subscriptionsRouter.delete("/:id", (req, res) => {
  res.json("delete a subscription ");
});

// user subscriptions

subscriptionsRouter.get("/users/:id", authorize, getUserSubscriptions);



subscriptionsRouter.put("/:id/cancel", (req, res) => {
  res.render("cancel user subscription");
});



subscriptionsRouter.get("/upcoming-renewals", (req, res) => {
  res.render("get all upcoming renewals");
});



export default subscriptionsRouter;
