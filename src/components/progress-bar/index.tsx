import React from "react"
import './index.css'

function ProgressBar({duration=3, progress=0, running=false,}: {
    duration?: number,
    running?: boolean,
    progress?: number
}) {
    return(
        <div className={'progress-bar'}>
            <div className={`content ${running? 'active': ''}`}
                 style={{width: progress+'%',animationDuration: duration + 's'}}> </div>
        </div>
    )
}

export default ProgressBar;