async function searchBooks(page=1){
    const bookName=document.querySelector("#bookName").value
    const query=bookName.split("").join("+")
    const url=`http://openlibrary.org/search.json . ${query} & ${page}`

    const response=await fetch(url)
    const data=await response.json()

    displayResults(data)
    displayPagination(data.numFound,page)
}

function displayResults(data) {
    const results=document.querySelector("#results")
    results.innerHTML=""

    if (results.numFound===0) {
        results.innerHTML="No results have found"
        return
    }
    const numResults=document.querySelector("#")
}