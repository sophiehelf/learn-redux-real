export function selectBook(book) {
    //selectBook is an action creator, must return an action
    // an object with a type property. 
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}

// this gets imported into book-list as a prop function