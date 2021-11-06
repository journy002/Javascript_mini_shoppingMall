// Fetch the items from the JSON file
// Fetch 를 사용하여 json파일을 가져와 아이템들을 리턴 시켜준다.
function loadItems() {
    return fetch('data/data.json') // fetch로 데이터를 받아오고
    .then(response => response.json()) // 성공적으로 데이터를 받아오면 그걸 json으로 바꿔준 다음
    .then(json => json.items) // json안에 있는 items를 return
}

// Update the list with the given items
// 주어진 아이템들을 사용하여 리스트를 업데이트
function displayItems(items) {
    const container = document.querySelector('.items');
    // const html = items.map(item => createHTMLString(item)).join();
    // console.log(html,'htmlhtml')
    container.innerHTML = items.map(item => createHTMLString(item)).join('');

}

// Create HTML list item from the given item
// 주어진 아이템을 HTML에 리스트로 뿌려준다.
function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `
}

// main
loadItems()
    .then(items => {
        displayItems(items);
        // setEventListeners(items)
    })
    .catch(console.log());
