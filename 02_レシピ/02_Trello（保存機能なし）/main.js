const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

console.dir(inputElement)
console.dir(container)
console.dir(addButton)

addButton.onclick = function () {
  const text = inputElement.value
  const card = document.createElement("div")
  card.className = "card"

  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text

  card.append(todo)
  container.append(card)

  // 削除ボタンを作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  // 削除ボタンを押したときの処理を登録
  deleteButton.onclick = function () {
    // カードを削除する
    card.remove()
  }
  card.append(deleteButton)
  container.append(card)

  // 入力欄を空にする
  inputElement.value = ""
}
