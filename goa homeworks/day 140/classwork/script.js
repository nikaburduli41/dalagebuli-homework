let btn = document.getElementById('btn')
let chat = document.getElementById('chat')
let chat1 = document.getElementById('messages')
let inp1 = document.getElementById('inp1')

btn.addEventListener('click', async (e) => {
    e.preventDefault()

    let message = inp1.value
    if (message === '') {
        alert('please enter word')
        return
    }

    const paragraph = document.createElement('p')
    paragraph.textContent = message
    paragraph.id = 'user'
    chat1.appendChild(paragraph)

    const response = await fetch("https://api.openai.com/v1/responses", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "
        },
        body: JSON.stringify({
            model: "gpt-4.1-mini",
            input: `Write a short inspirational quote based on this idea: "${message}"`
        })
    })

    const data = await response.json()
    console.log(data.output[0].content[0].text)

})
