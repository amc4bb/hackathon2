var book1 = {
  name: "Book 1",
  price: 19.99,
  pictureURL: "http://ecx.images-amazon.com/images/I/61FMdoMqdnL._SX140_.jpg"
}

var book2 = {
  name: "Book 2",
  price: 24.00,
  pictureURL: "http://ecx.images-amazon.com/images/I/61IpDBWusmL._SY160_.jpg"
}

var book3 = {
  name: "Book 3",
  price: 8.50,
  pictureURL: "http://ecx.images-amazon.com/images/I/51HlUxnYAOL._SY160_.jpg"
}

$('#book1 .name').text(book1.name);
$('#book1 .price').append(book1.price);

$('#book2 .name').text(book2.name);
$('#book2 .price').append(book2.price);

$('#book3 .name').text(book3.name);
$('#book3 .price').append(book3.price);
