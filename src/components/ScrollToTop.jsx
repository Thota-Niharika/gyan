import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { key } = useLocation();

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        const forceScroll = () => {
            const scrollOptions = { top: 0, left: 0, behavior: 'instant' };
            window.scrollTo(scrollOptions);
            if (document.documentElement) document.documentElement.scrollTo(scrollOptions);
            if (document.body) document.body.scrollTo(scrollOptions);
        };

        // Immediate + staggered hits to ensure it sticks
        forceScroll();
        const t1 = setTimeout(forceScroll, 50);
        const t2 = setTimeout(forceScroll, 150);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, [key]);

    return null;
};

export default ScrollToTop;
