```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background: #050505;
    color: #eeeeee;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.7;
}

header {
    position: sticky;
    top: 0;
    z-index: 1000;

    background: #080808;
    border-bottom: 1px solid #252525;

    padding: 18px 5%;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 2px;
}

nav {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

button {
    background: #111111;
    color: #dddddd;

    border: 1px solid #333333;
    border-radius: 6px;

    padding: 10px 16px;

    cursor: pointer;

    transition: 0.2s;
}

button:hover {
    background: #222222;
    border-color: #777777;
}

main {
    width: 90%;
    max-width: 1200px;
    margin: auto;
}

.page {
    display: none;
    padding: 65px 0;
}

.page.active {
    display: block;
}

.hero {
    min-height: 70vh;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    text-align: center;
}

.hero h1 {
    font-size: clamp(45px, 9vw, 100px);
    letter-spacing: 8px;
    margin-bottom: 15px;
}

.subtitle {
    font-size: 20px;
    color: #999999;
}

.quote {
    margin-top: 50px;

    max-width: 700px;

    font-size: 20px;
    font-style: italic;

    color: #bbbbbb;
}

.quote span {
    display: block;
    margin-top: 10px;

    font-size: 15px;
    color: #777777;
}

.researcher {
    margin-top: 45px;
}

.researcher h2 {
    font-size: 25px;
}

.researcher p {
    color: #888888;
}

.section-title {
    margin: 65px 0 25px;
    font-size: 30px;
}

.cards {
    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(280px, 1fr));

    gap: 25px;
}

.card {
    background: #0d0d0d;

    border: 1px solid #252525;

    border-radius: 12px;

    padding: 35px;

    cursor: pointer;

    transition: 0.25s;
}

.card:hover {
    transform: translateY(-5px);
    border-color: #666666;
}

.card h2 {
    margin: 15px 0;
}

.card p {
    color: #999999;
}

.icon {
    font-size: 50px;
}

.topic-grid {
    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(250px, 1fr));

    gap: 20px;

    margin-top: 40px;
}

.topic {
    background: #0d0d0d;

    border: 1px solid #252525;

    border-radius: 10px;

    padding: 28px;

    transition: 0.25s;
}

.topic h2 {
    margin-bottom: 10px;
}

.topic p {
    color: #999999;
}

.topic-icon {
    font-size: 42px;
    margin-bottom: 10px;
}

.clickable {
    cursor: pointer;
}

.clickable:hover {
    transform: translateY(-5px);
    border-color: #666666;
}

.back-button {
    margin-bottom: 30px;
}

.intro {
    color: #999999;
    font-size: 18px;
    margin-bottom: 35px;
}

.research-topic {
    background: #0d0d0d;

    border: 1px solid #252525;

    border-radius: 10px;

    padding: 28px;

    margin-bottom: 20px;
}

.research-topic h2 {
    margin-bottom: 12px;
}

.research-topic p {
    color: #aaaaaa;
}

.equation {
    margin-top: 25px;

    padding: 25px;

    background: #070707;

    border-left: 3px solid #777777;

    overflow-x: auto;

    text-align: center;

    font-size: 21px;
}

.editor {
    background: #0d0d0d;

    border: 1px solid #292929;

    border-radius: 12px;

    padding: 30px;
}

.editor label {
    display: block;

    margin-top: 20px;
    margin-bottom: 7px;

    color: #aaaaaa;
}

.editor input,
.editor select,
.editor textarea {
    width: 100%;

    background: #050505;

    color: #eeeeee;

    border: 1px solid #333333;

    border-radius: 6px;

    padding: 13px;

    font-size: 16px;
}

.editor textarea {
    min-height: 450px;

    resize: vertical;

    font-family: "Courier New", monospace;

    line-height: 1.7;
}

.editor-buttons {
    display: flex;

    gap: 10px;

    margin-top: 20px;

    flex-wrap: wrap;
}

.save-button {
    background: #eeeeee;
    color: #050505;

    font-weight: bold;
}

.research-item {
    background: #0d0d0d;

    border: 1px solid #252525;

    border-radius: 10px;

    padding: 25px;

    margin-bottom: 20px;
}

.research-item h3 {
    font-size: 23px;
}

.research-meta {
    color: #888888;

    font-size: 14px;

    margin: 5px 0 15px;
}

.research-content {
    white-space: pre-wrap;

    color: #cccccc;
}

.research-card-button {
    margin-top: 20px;
}

footer {
    margin-top: 100px;

    padding: 40px 5%;

    border-top: 1px solid #222222;

    text-align: center;

    color: #777777;
}

@media (max-width: 700px) {

    header {
        flex-direction: column;
        gap: 15px;
    }

    nav {
        justify-content: center;
    }

    .hero h1 {
        letter-spacing: 3px;
    }

    .page {
        padding: 40px 0;
    }

    .editor {
        padding: 18px;
    }

    .equation {
        font-size: 17px;
    }
}
```
