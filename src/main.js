// Fetch the items from the JSON file
function loadItems() {
    return fetch('data/data.json') // fetch로 데이터를 받아오고
    .then(response => response.json()) // 성공적으로 데이터를 받아오면 그걸 json으로 바꿔준 다음
    .then(json => json.items) // json안에 있는 items를 return
}

// main
loadItems()
    .then(items => {
        // displayItems(items);
        // setEventListeners(items)
    })
    .catch(console.log());

