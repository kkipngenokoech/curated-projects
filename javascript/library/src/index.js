// getting data from the user
// Book_title = document.getElementsByName("Book_title")
Book_phoneNumber = document.getElementsByName("Book_phoneNumber")
let Book_owner = document.Book.Book_owner.value
console.log(Book_owner)


let library = {}

Book = () => {
    
}

Add_book = () => {
    let Book_owner = document.getElementById("Book_owner").value
    library["Book_owner"] = Book_owner
    let Book_author = document.getElementById("Book_author").value
    // alert(`${Book_author}`) - used for debugging
    library["Book_author"] = Book_author
    let Book_title = document.getElementById("Book_title").value
    // alert(Book_title) - used for debugging
    library["Book_title"] = Book_title
    // alert(library["Book_title"]) - used for debugging
    let Book_location = document.getElementById("Book_location").value
    library["Book_location"] = Book_location
    alert(`${Book_owner},  ${library["Book_title"]}, ${library["Book_author"]}, ${library["Book_location"]}`)
}
Add_book(Book_owner)
//add_book(Book_owner)