const container = document.getElementById("list");

fetch("./kanji.txt").then(res => res.text()).then(data => {
    const list = data.split(",");
    for (let key of list) {
        const div = document.createElement("tr");
        div.textContent = key;
        container.appendChild(div);
    }
});

const search = (text) => {
    for (let child of container.children) {
        if (child.textContent.includes(text)) {
            child.style.display = 'block';
        } else
            child.style.display = 'none'
    }
}

document.querySelector('input').addEventListener('keyup', e => {
    let text = e.target.value;

    if (/[a-zA-Z]/.test(text)) {
        text = wanakana.toKana(text);
    }

    document.querySelector('p').textContent = 'result for: ' + text;

    search(text);
})