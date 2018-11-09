//require the node-mysql connection
var mysql = require('mysql');

//btn events
const gBtn = document.getElementById('gBtn');
const closeBtn = document.getElementById('closeBtn');

gBtn.addEventListener('click', function(){
    getData();
})
closeBtn.addEventListener('click', function(){
    closeCon();
})

//add the db credentials
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qris',
    database: 'attendanc'
});

//connect to mysql
conn.connect(function(err){
    //in case of error
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
});
console.log("The connection has been opened.");

//retrieve data
function getData(){
    //perfom a query
    $query = 'SELECT * FROM admin';

    conn.query($query, function(err, rows, fields){
        //in case of error
        if(err){
            console.log("An error ocurred while executing query.");
            console.log(err);
            return;
        }
        else{
            console.log("Query successfully executed.", rows);
        }

        for(i=0;i<rows.length;i++){
            console.log(i);
            /* document.getElementById('showData').innerHTML=('<b>'+rows[i].fname +
                '</b><br> Username: '+rows[i].uname +
                '<br> Password: ' +rows[i].pwd +'</br></br>'); */
            var row =  document.createTextNode(rows[i].fname +
            ' with Username as '+rows[i].uname +
            ' and Password{' +rows[i].pwd +'}');
            var node = document.createElement("li");
            node.appendChild(row);
            document.getElementById('showData').appendChild(node);
        }

   
    });

}

//close the connection
/* conn.end(function(){
    console.log("The connection has been closed.");
});
 */
function closeCon() {
    conn.end();
    console.log("The connection has been closed.");
}
