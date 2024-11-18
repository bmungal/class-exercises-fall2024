import "./Profile.css";
import React from "react";

export default function Profile({ name, picture, button }) {
    return (
        <section className="profile">

            <h3>{name}</h3>
            <img src={picture} />
            {button && <button onClick={() => setCount(count + 1)}>
                Increment Count
            </button>}
        </section>

    );
}