// getting data from the user
// Book_title = document.getElementsByName("Book_title")
const btn = document.getElementById("toggle-form")
openForm = () => {
    document.getElementById("Book").style.display = "Block"
}
closeForm = () => {
    document.getElementById("Book").style.display = "None"
}

Book_phoneNumber = document.getElementsByName("Book_phoneNumber")
let Book_owner = document.Book.Book_owner.value
console.log(Book_owner)

let library = []
let newBook = {}

Book = () => {
    
}

Add_book = () => {
    let Book_owner = document.getElementById("Book_owner").value
    newBook["Book_owner"] = Book_owner
    let Book_author = document.getElementById("Book_author").value
    // alert(`${Book_author}`) - used for debugging
    newBook["Book_author"] = Book_author
    let Book_title = document.getElementById("Book_title").value
    // alert(Book_title) - used for debugging
    newBook["Book_title"] = Book_title
    // alert(library["Book_title"]) - used for debugging
    let Book_location = document.getElementById("Book_location").value
    newBook["Book_location"] = Book_location
    alert(`${newBook["Book_owner"]},  ${newBook["Book_title"]}, ${newBook["Book_author"]}, ${newBook["Book_location"]}`)
    library += newBook
    alert(library)
}
Add_book(Book_owner)
//add_book(Book_owner)