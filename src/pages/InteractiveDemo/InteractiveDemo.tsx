import styled from "styled-components"
import { Counter } from "./Counter";

const InteractiveDemoDiv = styled.div`
    color: yellow;
`;

export function InteractiveDemoPage() {
    return <InteractiveDemoDiv>
        <h1>Interactive Demo</h1>
        <p>
            This example/template is based on what I have found works for me when writing static websites.
        </p>
        <Counter initialCount={5}/>
    </InteractiveDemoDiv>;
}