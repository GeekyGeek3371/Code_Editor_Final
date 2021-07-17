import React, {useState, useEffect} from 'react'

export default function FileExplorer() {
    const [ishtm, sethtm] = useState(false);
    const [iscss, setcss] = useState(false);
    const [isjs, setjs] = useState(false);

    const toggleHtm = () => {
        sethtm(!ishtm);
        setcss(false);
        setjs(false);
    };
    const toggleCss = () => {
        sethtm(false)
        setcss(!iscss);
        setjs(false)
    };
    const toggleJs = () => {
        sethtm(false)
        setcss(false);
        setjs(!isjs);
    };
    return (
        <>
            <div className="fileExplor">
                <h1>Files</h1>
                <ul>
                    <li className={ishtm ? 'html': null} 
onClick={toggleHtm} >index.html</li>
                    <li className={iscss ? 'css': null} 
      onClick={toggleCss} >index.css</li>
                    <li className={isjs ? 'js': null} 
      onClick={toggleJs} >index.js</li>
                </ul>
            </div>

        </>
    )
}
