import { useEffect, useRef, useState } from "react";


export default function useElementIsIntersecting({autoDisconnect = true, options = {}}) {

    const [show, setShow] = useState(false);
    const eleRef = useRef()

    useEffect(() => {

        const onChanges = (entries) => {
            const ele = entries[0]

            if (ele.isIntersecting) {
                if (autoDisconnect) observer.disconnect()
                setShow(true);

            } else setShow(false);
            
        }
        const observer = new IntersectionObserver(onChanges, options)
        eleRef.current && observer.observe(eleRef.current)
        return () => observer.disconnect()

    })
    return { show, eleRef }
}