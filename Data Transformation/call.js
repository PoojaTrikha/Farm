const documents = {
    1: {content: "I am a document", authorId: 1},
    2: {content: "I am also a document", authorId: 2},
    3: {content: "You guessed it!", authorId: 2}
}
const authors = {
    1: {name: "Adam"},
    2: {name: "Dave"}
}

function getDocument(documentId, callback) {
    function loadComplete() {
    callback(documents[documentId]) 
    }
    setTimeout(loadComplete, 100)
}

function getAuthor(authorId, callback) {
    function loadComplete() {
    callback(authors[authorId])
    }
    setTimeout(loadComplete, 500)
}


getDocument(3, (document)=>{
    console.log(3, document)
    getAuthor(document.authorId, (authors) => {
        console.log(document.authorId, authors)
    })
    
})


