function initHeader() {
    let header = document.createElement('header');
    let mainContent = document.getElementById('main-content');
    document.body.insertBefore(header, mainContent);
    header.outerHTML = '' +
    '    <header>' +
    '        <h1>' +
    '            <a href="../index.html">' +
    '                <span id="title">SCP Foundation - YC Branch</span>' +
    '            </a>' +
    '        </h1>' +
    '        <h2>Secure, Contain, Protect</h2>' +
    '        <nav id="popup-menu">' +
    '            <div class="popup-group">' +
    '                <span class="popup-button">Background</span>' +
    '            </div>' +
    '            <div class="popup-group">' +
    '                <span class="popup-button">Tales</span>' +
    '            </div>' +
    '            <div class="popup-group">' +
    '                <span class="popup-button">Library</span>' +
    '            </div>' +
    '            <div class="popup-group">' +
    '                <span class="popup-button">SCP-YC Series</span>' +
    '                <div class="popup-item">' +
    '                    <a href="series-1.html">YC Series Ⅰ (YC-001 - YC-999)</a>' +
    '                    <a href="#">» YC Series Ⅰ Tales</a>' +
    '                    <a href="#">Joke SCP-YCs</a>' +
    '                </div>' +
    '            </div>' +
    '        </nav>' +
    '        <div id="open-menu">' +
    '            <a href="#sidebar">≡</a>' +
    '        </div>' +
    '    </header>';
}