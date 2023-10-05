import React, { Suspense, lazy } from "react";

const App = lazy(() => import('./App'))

const LazyLoading = () => {
    return(
        <Suspense fallback={<img className="loading" src="https://media3.giphy.com/media/YOw8mpVUyG8RIyR4uM/giphy.gif"></img>}>
            <App/>
        </Suspense>
    )
}
export default LazyLoading