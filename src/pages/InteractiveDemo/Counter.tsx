import { useState } from "react";
import styled from "styled-components";

const CounterDiv = styled.div`
    padding: 32px;
    border: 1px solid red;

    button {
        font-size: 32px;
        width: 64px;
        height: 64px;
    }
`;

export function Counter({
    initialCount
}: {
    initialCount?: number
}) {
    const [count, setCount] = useState(initialCount || 0);

    return <CounterDiv>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>
            +
        </button>
        <button onClick={() => setCount(count - 1)}>
            -
        </button>
    </CounterDiv>;
}