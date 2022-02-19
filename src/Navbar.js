import React, {useEffect} from 'react';

const Navbar = () => {
    useEffect(() => {

    // Initialize deferredPrompt for use later to show browser install prompt.
    let deferredPrompt;
    function showInstallPromotion(){
        console.log("Ciaoooooo")
    }
    window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent the mini-infobar from appearing on mobile
        e.preventDefault();
        // Stash the event so it can be triggered later.
        deferredPrompt = e;
        // Update UI notify the user they can install the PWA
        showInstallPromotion();
        // Optionally, send analytics event that PWA install promo was shown.
        console.log(`'beforeinstallprompt' event was fired.`);
        });


        let buttonInstall = document.getElementById("buttonInstall");
        buttonInstall.addEventListener('click', async (e, deferredPrompt) => {

            e.preventDefault();
            // Show the install prompt
            deferredPrompt.prompt();
            // Wait for the user to respond to the prompt
            const { outcome } = await deferredPrompt.userChoice;
            // Optionally, send analytics event with outcome of user choice
            console.log(`User response to the install prompt: ${outcome}`);
            // We've used the prompt, and can't use it again, throw it away
            deferredPrompt = null;
          });
    })
    return (
         
        <>
        <nav>
                <div className="nav-items">
                <svg id="logo" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <a href="/ico">
                        <g className="logo-item" id="logo-box" fill="white">
                            <path
                                d="M197.959 0H145.306H0V54.966H145.306H197.959H200V0H197.959ZM142.585 52.2449H2.44898V2.44898H142.585V52.2449ZM189.116 41.9592L187.265 43.8095C186.667 44.4354 185.66 44.4354 185.034 43.8095L178.449 37.2789C178.15 36.9796 177.959 36.5714 177.959 36.1633V35.102C175.51 36.9252 172.762 37.9864 169.605 37.9864C162.068 37.9864 155.973 31.8639 155.973 24.3265C155.973 16.7891 162.095 10.6667 169.633 10.6667C177.17 10.6667 183.293 16.7347 183.293 24.2721C183.293 27.4558 182.231 30.449 180.408 32.6259H181.469C181.878 32.6259 182.286 32.8163 182.585 33.1156L189.116 39.6735C189.741 40.3265 189.741 41.3605 189.116 41.9592Z" />
                            <path
                                d="M169.632 15.9182C164.979 15.9182 161.224 19.6733 161.224 24.3264C161.224 28.9794 164.979 32.7345 169.632 32.7345C174.285 32.7345 178.04 28.9794 178.04 24.3264C178.04 19.6733 174.258 15.9182 169.632 15.9182Z" />
                        </g>
                    </a>
                    <a href="/img">
                        <path id="logo-img" className="logo-item" d="M45.85 10.5305H12.0269V44.3536H45.85V10.5305Z"
                            fill="white" />
                    </a>
                    <a href="/vec">
                        <path id="logo-vec" className="logo-item"
                            d="M72.0548 44.3538C81.3723 44.3538 88.9256 36.8005 88.9256 27.4831C88.9256 18.1656 81.3723 10.6123 72.0548 10.6123C62.7374 10.6123 55.1841 18.1656 55.1841 27.4831C55.1841 36.8005 62.7374 44.3538 72.0548 44.3538Z"
                            fill="white" />
                    </a>
                    <a href="/vid">
                        <path id="logo-vid" className="logo-item"
                            d="M98.3673 8.05444L132 27.483L98.3673 46.9116L98.3673 8.05444Z" fill="white" />
                    </a>
                </svg>
                 <ul>
                        <li className="nav-link" >
                            <a href="/" id="buttonInstall">
                                <img src="./img/navbar/download.svg" alt="home"/>
                            </a>
                        </li>
                    </ul>
                    {/* <ul>
                        <li className="nav-link">
                            <a href="/">
                                <img src="./img/navbar/home.svg" alt="home"/>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="https://filippovicari.com"rel="noopener noreferrer"  target="_blank">
                                <img src="./img/navbar/fv.svg" alt="fv"/>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="https://github.com/filvi" rel="noopener noreferrer" target="_blank">
                                <img src="./img/navbar/github.svg" alt="github"/>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="https://github.com/filvi/media-search/issues">
                                <img src="./img/navbar/bug.svg" alt="bug"/>
                            </a>
                        </li>
                    </ul> */}

                </div>
                {/* <div className="nav-search text-white">
                    <input type="text" id="call-to-action-input" name="q" placeholder="eg. technology" className="src recursive"/>
                    <button className="src recursivefocused" id="call-to-action-btn" role="search" >Search</button>
                </div> */}
            </nav>
            </>
     );
}
 
export default Navbar;