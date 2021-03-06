import React, {useState, useEffect} from "react";
import PICTURES from './data/pictures';

const SECONDS = 1000;
const minimumDelay = 1 * SECONDS;

function Gallery() {
    const [index, setIndex] = useState(0);
    const [delay, setDelay] = useState(3000);
    const [increment, setIncriment] = useState(1);

    useEffect( () => {
        const interval = setInterval ( () => {
             setIndex(storedIndex => {
                    return (storedIndex+1) %PICTURES.length;
                })
        }, delay);

        return () => {
            clearInterval(interval);
        }
    }, [delay]);

    const updateDelay = event => {
        const delay = Number(event.target.value) * SECONDS;
        setDelay( delay < minimumDelay ? minimumDelay : delay);
    };

    return (
        <div className='Gallery'>
            <img
                src={PICTURES[index].image}
                alt='gallery'
                />
            <div className="multiform">
                <div>
                    Gallery transition delay (seconds):
                    <input type="number" onChange={updateDelay} />
                </div>
            </div>
        </div>
    )
}

export default Gallery;