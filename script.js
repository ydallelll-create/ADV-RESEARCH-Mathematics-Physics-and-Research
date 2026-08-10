```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    --bg: #050505;
    --panel: #0b0b0b;
    --panel2: #101010;
    --border: #242424;
    --text: #eeeeee;
    --muted: #858585;
    --soft: #bdbdbd;
}

body {
    background: var(--bg);
    color: var(--text);
    font-family:
        Arial,
        Helvetica,
        sans-serif;
    min-height: 100vh;
}

button,
input,
textarea {
    font: inherit;
}

button {
    cursor: pointer;
}

.topbar {
    height: 76px;

    background: #080808;

    border-bottom:
        1px solid var(--border);

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 0 28px;

    position: sticky;

    top: 0;

    z-index: 100;
}

.brand-name {
    font-weight: bold;

    letter-spacing: 3px;

    font-size: 20px;
}

.brand-subtitle {
    color: var(--muted);

    font-size: 11px;

    letter-spacing: 1px;

    margin-top: 2px;
}

.header-author {
    display: flex;

    flex-direction: column;

    text-align: right;

    font-size: 13px;
}

.header-author span {
    color: var(--muted);

    font-size: 11px;

    margin-top: 2px;
}

.app {
    display: flex;

    min-height: calc(100vh - 76px);
}

.sidebar {
    width: 230px;

    flex-shrink: 0;

    background: #080808;

    border-right:
        1px solid var(--border);

    padding: 20px 12px;
}

.nav-button {
    width: 100%;

    background: transparent;

    color: #aaa;

    border: 1px solid transparent;

    border-radius: 7px;

    text-align: left;

    padding: 12px;

    margin-bottom: 4px;

    transition: 0.2s;
}

.nav-button:hover,
.nav-button.active {
    background: #151515;

    color: white;

    border-color: #292929;
}

.sidebar-line {
    height: 1px;

    background: var(--border);

    margin: 20px 5px;
}

.sidebar-title {
    color: #555;

    font-size: 10px;

    letter-spacing: 2px;

    padding: 0 12px 10px;
}

.workspace {
    flex: 1;

    min-width: 0;

    padding: 35px;

    overflow-x: hidden;
}

.screen {
    display: none;

    max-width: 1200px;

    margin: auto;
}

.screen.active {
    display: block;
}

.home-hero {
    min-height: 430px;

    display: flex;

    flex-direction: column;

    justify-content: center;

    align-items: center;

    text-align: center;

    position: relative;
}

.home-label {
    color: #666;

    font-size: 11px;

    letter-spacing: 3px;

    margin-bottom: 20px;
}

.home-hero h1 {
    font-size:
        clamp(45px, 8vw, 90px);

    letter-spacing: 8px;
}

.home-hero > p {
    color: #888;

    margin-top: 15px;

    font-size: 17px;
}

.einstein-quote {
    margin-top: 50px;

    color: #aaa;

    font-size: 19px;

    font-style: italic;
}

.einstein-quote span {
    display: block;

    color: #555;

    font-size: 13px;

    margin-top: 10px;
}

.bureau-grid {
    display: grid;

    grid-template-columns:
        repeat(2, minmax(0, 1fr));

    gap: 20px;
}

.bureau-card {
    background: var(--panel);

    border: 1px solid var(--border);

    border-radius: 12px;

    padding: 30px;

    display: flex;

    gap: 25px;

    align-items: center;

    cursor: pointer;

    transition: 0.25s;
}

.bureau-card:hover {
    transform: translateY(-4px);

    border-color: #555;
}

.bureau-symbol {
    font-size: 55px;

    width: 80px;

    text-align: center;
}

.bureau-card p {
    color: var(--muted);

    margin-top: 7px;
}

.formula-background {
    text-align: center;

    color: #252525;

    font-size: 26px;

    margin: 80px 0;
}

.screen-header {
    display: flex;

    align-items: flex-start;

    gap: 25px;

    margin-bottom: 40px;
}

.screen-kicker {
    color: #666;

    font-size: 10px;

    letter-spacing: 3px;

    margin-bottom: 7px;
}

.screen-header h1 {
    font-size: 42px;
}

.screen-header p {
    color: var(--muted);

    margin-top: 8px;
}

.back-button {
    background: #111;

    color: #ccc;

    border: 1px solid #292929;

    border-radius: 6px;

    padding: 10px 14px;
}

.back-button:hover {
    background: #1b1b1b;
}

.subject-grid {
    display: grid;

    grid-template-columns:
        repeat(2, minmax(0, 1fr));

    gap: 18px;
}

.subject-card {
    background: var(--panel);

    border: 1px solid var(--border);

    border-radius: 10px;

    padding: 28px;

    cursor: pointer;

    transition: 0.2s;
}

.subject-card:hover {
    border-color: #666;

    transform: translateY(-3px);
}

.subject-symbol {
    font-size: 38px;

    margin-bottom: 15px;
}

.subject-card p {
    color: var(--muted);

    margin-top: 8px;
}

.project-actions {
    margin-bottom: 30px;
}

.primary-button,
.save-button {
    background: #eee;

    color: #050505;

    border: none;

    border-radius: 6px;

    padding: 11px 17px;

    font-weight: bold;
}

.primary-button:hover,
.save-button:hover {
    background: white;
}

.content-title {
    font-size: 21px;

    margin: 25px 0 18px;
}

.project-grid {
    display: grid;

    grid-template-columns:
        repeat(auto-fill, minmax(270px, 1fr));

    gap: 16px;
}

.project-card {
    background: var(--panel);

    border: 1px solid var(--border);

    border-radius: 9px;

    padding: 22px;

    min-height: 150px;

    display: flex;

    flex-direction: column;

    justify-content: space-between;
}

.project-card h3 {
    font-size: 19px;
}

.project-meta {
    color: #666;

    font-size: 12px;

    margin-top: 7px;
}

.project-open {
    margin-top: 20px;

    background: #111;

    color: #ddd;

    border: 1px solid #303030;

    padding: 8px 12px;

    border-radius: 5px;
}

.project-open:hover {
    background: #1b1b1b;
}

.empty-projects {
    border: 1px dashed #292929;

    color: #666;

    padding: 35px;

    border-radius: 9px;

    text-align: center;
}

.editor-topbar {
    display: flex;

    justify-content: space-between;

    align-items: center;

    margin-bottom: 20px;
}

.editor-actions {
    display: flex;

    gap: 8px;
}

.editor-actions button:not(.save-button) {
    background: #111;

    color: #ddd;

    border: 1px solid #333;

    border-radius: 6px;

    padding: 10px 14px;
}

.paper {
    background: #0d0d0d;

    border: 1px solid var(--border);

    border-radius: 10px;

    overflow: hidden;
}

.paper-header {
    padding: 40px;

    border-bottom: 1px solid var(--border);
}

.paper-label {
    color: #555;

    font-size: 10px;

    letter-spacing: 3px;

    margin-bottom: 20px;
}

.paper-title {
    width: 100%;

    background: transparent;

    border: none;

    outline: none;

    color: white;

    font-size: 38px;

    font-weight: bold;
}

.paper-title::placeholder {
    color: #444;
}

.paper-meta {
    display: flex;

    flex-wrap: wrap;

    gap: 25px;

    margin-top: 22px;

    color: #666;

    font-size: 12px;
}

.paper-meta strong {
    color: #aaa;
}

.paper-toolbar {
    display: flex;

    gap: 6px;

    flex-wrap: wrap;

    padding: 12px;

    border-bottom: 1px solid var(--border);

    background: #090909;
}

.paper-toolbar button {
    background: #111;

    color: #aaa;

    border: 1px solid #292929;

    border-radius: 5px;

    padding: 7px 11px;

    font-size: 12px;
}

.paper-toolbar button:hover {
    color: white;

    background: #1a1a1a;
}

.paper-editor {
    display: block;

    width: 100%;

    min-height: 500px;

    resize: vertical;

    border: none;

    outline: none;

    background: #080808;

    color: #ddd;

    padding: 35px;

    font-family:
        "Courier New",
        monospace;

    font-size: 15px;

    line-height: 1.8;
}

.paper-preview-title {
    padding: 13px 35px;

    color: #555;

    font-size: 10px;

    letter-spacing: 2px;

    border-top: 1px solid var(--border);

    border-bottom: 1px solid var(--border);
}

.paper-preview {
    padding: 40px;

    color: #ddd;

    line-height: 1.8;

    min-height: 150px;
}

.paper-preview h2 {
    margin: 25px 0 10px;
}

.paper-preview img {
    max-width: 100%;

    display: block;

    margin: 20px auto;

    border-radius: 6px;
}

.paper-preview video {
    max-width: 100%;

    display: block;

    margin: 20px auto;
}

.paper-preview a {
    color: #ccc;

    text-decoration: underline;
}

footer {
    border-top: 1px solid var(--border);

    text-align: center;

    padding: 30px;

    color: #666;

    font-size: 12px;
}

footer span {
    display: block;

    margin-top: 5px;

    color: #444;
}

@media (max-width: 850px) {

    .sidebar {
        width: 180px;
    }

    .bureau-grid,
    .subject-grid {
        grid-template-columns: 1fr;
    }

    .workspace {
        padding: 22px;
    }

}

@media (max-width: 650px) {

    .topbar {
        height: auto;

        padding: 15px;

        gap: 12px;

        flex-direction: column;

        align-items: flex-start;
    }

    .header-author {
        text-align: left;
    }

    .app {
        flex-direction: column;
    }

    .sidebar {
        width: 100%;

        border-right: none;

        border-bottom: 1px solid var(--border);

        display: flex;

        overflow-x: auto;

        gap: 5px;
    }

    .nav-button {
        width: auto;

        white-space: nowrap;
    }

    .sidebar-line,
    .sidebar-title {
        display: none;
    }

    .home-hero h1 {
        letter-spacing: 3px;
    }

    .paper-header {
        padding: 25px;
    }

    .paper-title {
        font-size: 28px;
    }

    .paper-editor,
    .paper-preview {
        padding: 25px;
    }

}
```
