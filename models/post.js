let getPosts = () => posts;

module.exports = { getPosts }

const con = require("./db_connect.js");

async function createTable(){
    let sql = `CREATE TABLE IF NOT EXISTS posts ( 
        postID INT NOT NULL AUTO_INCREMENT,
        postContent VARCHAR(255),
        userID INT NOT NULL,
        CONSTRAINT posts_pk PRIMARY KEY (postID),
        CONSTRAINT post_fk FOREIGN KEY (userID) REFERENCES users(userID)
    )`;
    await con.query(sql);
}
createTable();

//get all posts
async function getAllPosts(){
    const sql = `SELECT * FROM posts;`;
    let posts = await con.query(sql);
   return posts;
}
getAllPosts();

//create posts
async function createPost(post){

    let sql=`INSERT INTO posts (userID,postContent) VALUES ("${post.userID}", "${post.postContent}");`
  
   await con.query(sql);
  return {message:"Successfully added posts"};
  
  }
//read posts
async function fetch(post){
    let cpost = await getpost(post);
    if(!cpost[0]) throw Error("post not found");
    return cpost[0];
}
   //Useful functions
   async function getpost(post){
    let sql;
    if (post.userID){
        sql=`SELECT * FROM posts
        WHERE userID = ${post.userID}`;
    } else {
        sql = `
        SELECT * FROM posts 
          WHERE postID = "${post.postID}"
      `;
      }
    return await con.query(sql);
}

//update post
async function editpost(post){
    let sql = `UPDATE posts
      SET postContent = "${post.postContent}"
      Where postID = ${post.postID};
    `;
    await con.query(sql);
    let updatedpost = await getpost(post);
    return updatedpost[0];

}
//Delete post
async function deletepost(post){
    let sql = `DELETE FROM posts
    WHERE postID = ${post.postID}`;
await con.query(sql);
}
module.exports = {getAllposts,fetch,deletepost,getpost,editpost,createpost};