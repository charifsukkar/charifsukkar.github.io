<script>
var express = require('express');
var app = express();

app.use(express.json() );       // to support JSON-encoded bodies
app.use(express.urlencoded({     // to support URL-encoded bodies
  extended: false
})); 

var books = [
  {'book':'test'},
  {'book':'test2'},
  {'book':'test3'},
  {'book':'test4'},
  {'book':'test5'},
  {'book':'test6'},
]


app.get('/books/list', function(req, res){

   var html = '<p>'
   for (var i = 0; i < books.length; i++) {
      html = html + books[i].book + '<br>';
    }
    html += '</p>'

   res.send('List of books: ' + html);
});


app.get('/books/add', function(req, res){

  var html = '<br><form action="/books/addbook" method="post"><label for="uname">Username:</label><br><input type="text" id="uname" name="uname"><input type="submit" value="Submit"><br></form>'

  res.send('Insert a book: ' + html);
});

app.post('/books/addbook', function(req, res){

  console.log(req.body);
  var new_book = req.body.uname;

  var new_json = {'book': new_book};
  users.push(new_json);
  res.send('Book: ' + new_book + ' is added!<br> <a href="/books/list">list of books</a>');
}

);


app.listen(3000);

</script>