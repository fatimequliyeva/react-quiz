import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)


    return (
        <>

            <button onClick={() => setCount(count + 1)}>artir</button>
            <button onClick={() => setCount(count - 1)}>azalt</button>
            <button onClick={() => setCount(0)}>sifirla</button>
            <p>{count}</p>



        </>

    )



}
export default Counter