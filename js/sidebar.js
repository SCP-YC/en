function initSidebar() {
    let sidebar = document.createElement('div');
    let mainContent = document.getElementById('main-content');
    document.body.insertBefore(sidebar, mainContent);
    sidebar.outerHTML = '' +
    '    <div id="sidebar">' +
    '        <aside id="begin-news" class="side-block">' +
    '            <div class="side-head">Newbie\'s Info</div>' +
    '            <div class="side-item"><img src="../icons/help.png"><a href="#">Guide for Newbies</a></div>' +
    '            <div class="side-item"><img src="../icons/help.png"><a href="#">Site Rules</a></div>' +
    '            <div class="side-item"><img src="../icons/main.png"><a href="#">Join the Site!</a></div>' +
    '            <div class="side-item"><img src="../icons/help.png"><a href="#">How to write an SCP</a></div>' +
    '            <div class="side-item"><img src="../icons/default.png"><a href="#">SCP-YC Sandbox Site</a></div>' +
    '            <div class="side-item"><img src="../icons/help.png"><a href="#">FAQ</a></div>' +
    '        </aside>' +
    '        <aside id="index" class="side-block">' +
    '            <div class="side-item"><img src="../icons/home.png"><a href="index.html">Main</a></div>' +
    '' +
    '            <div class="side-head">SCP Library</div>' +
    '            <div class="side-item"><img src="../icons/series.png"><a href="series-1.html">SCP-YC Series I</a><span class="subtext">(001 - 999)</span></div>' +
    '' +
    '            <div class="side-head">Discover Content</div>' +
    '            <div class="side-item"><img src="../icons/default.png"><a href="#">Recently Created Pages</a></div>' +
    '            <div class="side-item"><img src="../icons/main.png"><a href="javascript: randomSCP();">Random SCP</a> | <a href="#">Tale</a></div>' +
    '            <div class="side-item"><img src="../icons/default.png"><a href="#">Recent Changes</a> | <a href="#">Edits</a></div>' +
    '            <div class="side-item"><img src="../icons/default.png"><a href="#">Highest Rated Pages</a></div>' +
    '            <div class="side-item"><img src="../icons/default.png"><a href="#">Lowest Rated Pages</a></div>' +
    '' +
    '            <div class="side-head">SCP Community</div>' +
    '            <div class="side-item"><img src="../icons/forum.png"><a href="#">Forum</a> | <a href="#">New Posts</a></div>' +
    '            <div class="side-item"><img src="../icons/help.png"><a href="#">Criticism Policy</a></div>' +
    '            <div class="side-item"><img src="../icons/default.png"><a href="#">Member\'s Pages</a> | <a href="#">YC</a></div>' +
    '' +
    '            <div class="side-head">Related Pages</div>' +
    '            <div class="side-item"><img src="../icons/default.png"><a href="#">SCP Foundation YC Discussion Forum</a></div>' +
    '        </aside>' +
    '        <a id="close-menu" href="#"></a>' +
    '    </div>';
}