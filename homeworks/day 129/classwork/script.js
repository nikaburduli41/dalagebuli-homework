const div = document.getElementById('maindiv')


const emojis = [
  "😀",
  "😎",
  "🚀",
  "🌈",
  "🍕",
  "🐶",
  "🐱",
  "🌲",
  "🔥",
  "⚽",
  "💡",
  "🎉",
  "🤔",
  "👍",
  "😭",
  "💻",
  "🎨",
  "🧠",
  "😍",
  "😂"
];


const randomIndex = Math.floor(Math.random() * emojis.length)

maindiv.innerHTML = `
    <h1>${emojis[randomIndex]}</h1>

`