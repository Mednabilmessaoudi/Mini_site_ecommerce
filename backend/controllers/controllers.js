const articlesSchema = require ('../models/articles')


exports.getAllArticles =  async (req, res) => {
    try {
      const articles = await articlesSchema.find();
      res.status(200).send(articles)
    } catch (err) {
      console.log(err);
      res.status(400).send("there is no articles")
    }
  }





exports.addArticle = async (req, res) => {
    try {
      const newArticle= new articlesSchema(req.body);
      await newArticle.save();
      res.status(200).send("Article added succesfully");
    } catch (err) {
      res.status(500)
      console.log(err);
    }
  }



exports.getArticleById = async (req, res) => {
    try {
      const {id} = req.params
      const article = await articlesSchema.findById(id);
      res.status(200).send(article)
    } catch (err) {
      console.log(err);
      res.status(400).send("there is no such article")
    }
  }


  exports.deleteaArticle = async (req,res)=>{
try{
const {id} = req.params
 await articlesSchema.findByIdAndRemove(id)
res.status(200).send("article removed")

}catch(err){
console.log(err);
res.status(500).send("article  not found")
}

  }




  exports.getArticleBycategory = async (req, res) => {
    try {
      const category = req.params
      console.log(category)
      const article = await articlesSchema.find(category);
      res.status(200).send(article)
    } catch (err) {
      console.log(err);
      res.status(400).send("there is no such category")
    }
  }

  exports.editArticle = async (req, res) => {
    try {
      const {id} = req.params
      const oldarticle = await articlesSchema.findByIdAndUpdate(id,{$set:{...req.body}})
      res.status(200).send(`article updated succesfully : ${oldarticle}`)
    
    } catch (err) {
      res.status(500).send("can't update")
      console.log(err);
    }
  }