import React, {useState, useEffect} from 'react'
import Editor from './Editor'
import useLocalStorage from '../hooks/useLocalStorage'
import FileExplore from './fileExplorer'
function App() {
  const [html, setHtml] = useLocalStorage('html','')
  const [css, setCss] = useLocalStorage('css','')
  const [js, setJs] = useLocalStorage('js','')

  

  const srcDoc = `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
  `

  return (
    <>
    
    <div className="pane top-pane">
    <FileExplore/>
    <Editor
    language="xml"
    displayName="index.html"
    value={html}
    onChange={setHtml}
    />
    <Editor
    language="css"
    displayName="index.css"
    value={css}
    onChange={setCss}
    />
    <Editor
    language="js"
    displayName="index.js"
    value={js}
    onChange={setJs}
    />
    </div>
    <div className="pane">
      <iframe 
        srcDoc = {srcDoc}
        title="output"
        sandbox="allow-scripts"   //ensure that when we run a codepen application it does not access other things like doc cookie
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </div>
    </>
  );
}

export default App;
