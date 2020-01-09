<h1>App Structure</h1>
<hr>
<b><i>Directories</i></b>
<ul>
<li><b>BUILD (PROD)</b> - npm build folder (overwritten on npm build via Heroku); This directory was built to troubleshoot Heroku deploy
<li><b>DATA</b> - Contains FOOD ITEMS (foods.json) for PLAY component</li>
<li><b>NODE MODULES</b> - Installed Node NPM Packages</li>
<li><b>PUBLIC</b> - Development Index.html, favicons, and other static assets (upon build, the Index.html within the BUILD directory is leveraged)</li>
<li><b>SERVER</b> - Express and client-side routing in <b>index.js</b></li>
<li><b>SRC</b> - Primary React Components and assets referenced: 
    <ul><li>CSS – Styling for the app</li>
        <li>DATA – Component and JSON files for PLAY food elements
        <ul><li>FoodList.js - Component calling items from JSON file foods.json</li>
            <li>foods.json - JSON file holding individual food data (Img url, Calories, Carbs, Fat, Protien)
            </li>
        </ul>
        <li>IMG - All images used in application</li>
    </li>
</ul>
<li><b>App.js</b> - React App file</li>
<li><b>App.test.js</b> - Standard test file packaged w/React</li>
<li><b>index.css</b> - Standard React styles (not needed, but referenced; I can remove these eventually)</li>
<li><b>index.js</b> - React index file</li>
<li><b>serviceWorker.js, setupTests.js</b> - React standard files</li>
<li><b>staticHTML</b> - All unused, initial foundational files</li><li><b>Other</b> - Other files are standard Create-React-App installed files that shouldn't require reworking</li>
