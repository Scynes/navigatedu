import { useEffect, useState } from "react";

const PageTransition = ( { children } ) => {

    const [show, setShow] = useState(false);

    useEffect(() => {

        const timeout = setTimeout(() => setShow(true), 300);

        return () => {
            clearTimeout(timeout);
        }
    }, []);

    const transitionStyle = {
        transition: '600ms',
        transform: show ? 'scale(1)' : 'scale(0)',
        height: '100%'
    };

    return (
        <div style={transitionStyle}>{children}</div>
    );
}

export default PageTransition;