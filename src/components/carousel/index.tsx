import React, {memo, useEffect, useMemo, useRef, useState} from "react";
import './index.css'
import ProgressBar from "../progress-bar";

let autoTimer: NodeJS.Timer;
function Carousel({defaultIndex=0, children}: {
    defaultIndex?: number;
    children: JSX.Element[];
}) {

    const [activeIndex, setActiveIndex] = useState(defaultIndex);
    const [paused, setPaused] = useState(false);
    const itemCount = children.length;
    const carouselRef = useRef<any>();
    const containerRef = useRef<any>();
    useEffect(() => {
        autoTimer = createAuto();

        return () => {
            autoTimer && clearInterval(autoTimer);
        }
    }, [])

    const createAuto = () => {
        return setInterval(() => {
            setActiveIndex((preIndex) => {
                let curIndex = preIndex + 1;
                if (curIndex >= itemCount) {
                    curIndex = 0
                }
                return curIndex
            });
        }, 3000)
    }
    const Bottom = memo(() => {
        return useMemo(() =>  (
            <>
                {
                    Array.from({length: itemCount}, (_, index) => (
                        <div className={'bottom-item'} key={index} onClick={() => setActiveIndex(index)}>
                            <ProgressBar running={activeIndex === index && !paused} progress={index === activeIndex? 100 : 0}/>
                        </div>
                    ))
                }
            </>
        ), [activeIndex, itemCount])
    })

    const distance = () => {
        const width = carouselRef.current? carouselRef.current.clientWidth : 0;
        return width * activeIndex * -1;
    }

    const onMouseEnterCarousel = () => {
        setPaused(true);
        clearInterval(autoTimer);
    }

    const onMouseLeaveCarousel = () => {
        setPaused(false);
        autoTimer = createAuto();
    }

    return (
        <div ref={carouselRef} className={'carousel'} onMouseEnter={onMouseEnterCarousel} onMouseLeave={onMouseLeaveCarousel}>
            <div ref={containerRef} className={'container'} style={{left: distance()}}>
                {
                    children.map((item, index) => (
                        <div className={'item'} key={index}>
                            {item}
                        </div>
                    ))
                }
            </div>
            <div className={'bottom'}>
                <Bottom />
            </div>
        </div>
    )
}

export default Carousel;