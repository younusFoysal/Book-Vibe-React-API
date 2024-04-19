
import toast from "react-hot-toast";
export const getBooks = () => {
    let books = [];
    const storageBooks =localStorage.getItem('books')
    if(storageBooks) {
        books = JSON.parse(storageBooks)
    }
    return books
}



// for wishlist
export const getWishlist = () => {
    let wishlists = [];
    const storageBooks =localStorage.getItem('wishlists')
    if(storageBooks) {
        wishlists = JSON.parse(storageBooks)
    }
    return wishlists
}

export const saveBooks = book => {
    let books = getBooks()
    const isExiting = books.find(b => b.bookId === book.bookId)
    if (isExiting){
        return toast.error("Already have!.")
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast.success("Book Read successfully")

}

export const saveWishlists = wishlist => {
    let wishlists = getWishlist()
    const isExiting = wishlists.find(b => b.bookId === wishlist.bookId)
    if (isExiting){
        return toast.error("Already have!.")
    }
    wishlists.push(wishlist)
    localStorage.setItem('wishlists', JSON.stringify(wishlists))
    toast.success("Book Read successfully")

}



export const sortData = (data,d) => {
    const sortBooks = [...data].sort((a, b) => b[d] - a[d])
    return sortBooks
}


