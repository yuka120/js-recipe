const hikakin = {
  name: "ヒカキン",
  age: 24,
  hobbies: ["ゲーム", "動画編集", "猫と遊ぶこと"],
  isHappy: true,
  address: {
    country: "日本",
    city: "東京",
  },
  sayHello: function () {
    console.log("ブンブンハロー YouTube")
  },
}

// 練習問題
// hikakin オブジェクトに入っている sayHello メソッドを実行してください。
hikakin.sayHello() // ×hikakin.sayHello
// [やってみよう]
// hikakin オブジェクト を真似して自分のプロフィールをオブジェクトで作ってください。
const yuka = {
  neme: "ゆかたん",
  age: 20,
  hobbies: ["cooking", "volley ball", "singing"],
  isHappy: true,
  address: {
    country: "日本",
    city: "福岡",
  },
  sayHello: function () {
    console.log("やっほー")
  },
}

yuka.sayHello()

// オブジェクトにはたくさんのプロパティを追加してください。
yuka.color = "yellow"
yuka.hair = "long"
yuka.school = "九州大学"
console.log(yuka)
