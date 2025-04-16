import { useState, useRef, useEffect } from "react";

export default function Career() {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [iframeHeight, setIframeHeight] = useState('800px');
    useEffect(() => {
        // Add message listener for height updates from Tally
        const handleMessage = (e: MessageEvent) => {
            try {
                if (e.data && typeof e.data === 'object' && e.data.type === 'tally.resize') {
                    if (e.data.height) {
                        // Add extra padding to ensure no scrollbar appears
                        const newHeight = `${parseInt(e.data.height) + 100}px`;
                        setIframeHeight(newHeight);
                    }
                }
            } catch (error) {
                console.error("Error handling iframe message:", error);
            }
        };
        
        window.addEventListener('message', handleMessage);
        
        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);

    return (
        <div className="py-24 text-center">
            <h2 className="text-3xl md:text-4xl font-bold relative inline-block pb-4 after:content-[''] after:absolute after:w-16 after:h-1 after:gradient-blue-purple after:bottom-0 after:left-1/2 after:-translate-x-1/2">
                Become A Developer
            </h2>
            <iframe
                ref={iframeRef}
                src="https://tally.so/embed/mB95XA?hideTitle=1&transparentBackground=1"
                style={{
                    width: '100%',
                    height: iframeHeight,
                    border: 'none',
                    display: 'block',
                }}
                title="Request a Demo"
                frameBorder="0"
                allowTransparency={true}
                onLoad={() => {
                    // Send a message to the iframe to request its height
                    iframeRef.current?.contentWindow?.postMessage('getHeight', '*');
                }}
            />
        </div>
    );
}