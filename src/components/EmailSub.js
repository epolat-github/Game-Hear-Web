import React, { useState } from "react";
import Header from "./Header";

const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
    return (
        <input type={type} name={name} checked={checked} onChange={onChange} />
    );
};

const Form = () => {
    const [email, setEmail] = useState("");
    const [checkedItems, setCheckedItems] = useState({});

    const handleChange = (event) => {
        setCheckedItems({
            ...checkedItems,
            [event.target.name]: event.target.checked,
        });
    };

    const checkboxes = [
        {
            name: "gta-checkbox",
            id: "gta-checkbox",
            key: "gta",
            label: "GTA5: Online",
        },
        {
            name: "valorant-checkbox",
            id: "valorant-checkbox",
            key: "valorant",
            label: "Valorant",
        },
        {
            name: "lol-checkbox",
            id: "lol-checkbox",
            key: "lol",
            label: "League of Legends",
        },
    ];

    return (
        <form id="sub-form">
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email-input"
                name="email"
                placeholder="head@shot.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label>Fav games:</label>
            {checkboxes.map((item) => (
                <label key={item.key}>
                    {item.label}
                    <Checkbox
                        name={item.name}
                        checked={checkedItems[item.name]}
                        onChange={handleChange}
                    />
                </label>
            ))}
            {/* <input type="checkbox" id="gta5" name="gta5" value="gta5" />
            <label htmlFor="gta5">GTA5: Online</label>
            <input
                type="checkbox"
                id="valorant"
                name="valorant"
                value="valorant"
            />
            <label htmlFor="valorant">Valorant</label>
            <input type="checkbox" id="lol" name="lol" value="lol" />
            <label htmlFor="lol">League of Legends </label> */}
            <input
                type="submit"
                className="primary-button"
                id="submit-button"
                value="Shoot!"
            />
        </form>
    );
};

const EmailSub = () => {
    return (
        <section id="email-sub-container">
            <Header />
            <Form />
        </section>
    );
};

export default EmailSub;
