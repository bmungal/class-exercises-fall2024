import React from "react";
import { Image } from "antd";
export default function App() {

    return (
        <>
            <header>
                <h1>Spotify Demo</h1>
            </header>
            <main>
                <p>Hello React!</p>
                <Image
                    width={200}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
            </main>
        </>
    );
}