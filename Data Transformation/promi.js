
const documents = {
    1: {content: "I am a document", authorId: 1},
    2: {content: "I am also a document", authorId: 2},
    3: {content: "You guessed it!", authorId: 2}
  }
  const authors = {
    1: {name: "Adam"},
    2: {name: "Dave"}
  }
  
  function getDocument(documentId, callback) { // callback () => {}
    function loadComplete() {
        callback(documents[documentId]) 
    }
    setTimeout(loadComplete, 5000)
  }
  
  function getAuthor(authorId, callback) {
    function loadComplete() {
        callback(authors[authorId])
    }
    setTimeout(loadComplete, 100)
  }
  
  function getAuthorWrappedPromise(authorId){
    return new Promise((resolve) => {
      getAuthor(authorId, resolve)
    })
  }
  
  function getDocumentWrappedPromise(documentId) {
    return new Promise((resolve) => {
      getDocument(documentId, resolve)
    })  
  }
  
  const getDocumentPromise = (documentId) => {
    return new Promise((resolve) => {
      const loadComplete = () => {
        resolve(documents[documentId])
      }
      setTimeout(loadComplete, 1000)
    })
  }
  
  const getAuthorPromise = (authorId) => {
    return new Promise((resolve) => {
      const loadComplete = () => {
        resolve(authors[authorId])
      }
      setTimeout(loadComplete, 1000)
    })
  }
  
  getDocument(3, (document) => {
    getAuthor(document.authorId, (author) => {
      console.log(author.name)
    })
  })
  
  getDocumentPromise(1)
    .then(document => getAuthorPromise(document.authorId))
    .then(author => console.log(author.name))
  
  getDocumentWrappedPromise(2)
    .then(document => getAuthorWrappedPromise(document.authorId))
    .then(author => console.log(author.name))
  

