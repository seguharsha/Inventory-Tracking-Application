let config=require('../config/config');
const mysql=require('mysql2');
let db=mysql.createConnection({
    "host":config.host,
    "user":config.user,
    "password":config.password,
    "database":config.database
})
db.connect((err)=>{
    if(err){
        console.log("db connection failsd"+ err);
        return;
    }
    console.log("database connection successfull");
});

exports.getAllItems=(callback)=>{
    db.query("select * from Items ",callback);
}
exports.getItemsById=(id,callback)=>{
    db.query("select * from Items where id=?",[id],callback);
}
exports.createItem=(content,callback)=>{
console.log(content);
    let  values=[content.name,content.description,content.price,content.category,content.quantity,content.brand,
        content.weight,content.color]
        let query=`insert into Items(name,description,price,category,quantity,brand,weight,color) values (?,?,?,?,?,?,?,?);`;
        db.query(query,values,callback); 
}
exports.updateItem=(updated,id,callback)=>{
   console.log(updated);
    db.query("update  Items set ? where id=?",[updated,id],callback);
}
exports.deleteItem=(id,callback)=>{
    db.query("Delete from Items where id=?",[id],callback);
}