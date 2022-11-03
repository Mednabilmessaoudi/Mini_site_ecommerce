const express = require ('express');

const {
    getArticleById,
    deleteaArticle,
    getArticleBycategory,
    addArticle,
    getAllArticles,
    editArticle


} = require ('../controllers/controllers');
const { createUser, loginUser } = require('../controllers/user');


const routes = express.Router();


routes.get("/search/:id",getArticleById)
routes.delete("/delete/:id" , deleteaArticle)
routes.get("/category/:category",getArticleBycategory)
routes.post("/add",addArticle)
routes.get("/articles",getAllArticles)
routes.put("/edit/:id", editArticle);
routes.post("/create/",createUser)
routes.post("/login",loginUser)

module.exports = routes;