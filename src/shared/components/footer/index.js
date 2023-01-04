
import useElementIsIntersecting from "hooks/useElementIsIntersecting"
import React, { Suspense } from "react"


const Footer = React.lazy(
    () => import('./Footer')
)

export default function LazyFooter(){

    const {show, eleRef} = useElementIsIntersecting({options:{rootMargin:'50px'}})

    return (
        <Suspense fallback={"Estoy CARGANDO-------"}>
            <div ref={eleRef} className="container footer-container">
                {show ? <Footer/> : null}
            </div>
        </Suspense>
    )
}