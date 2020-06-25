import React, { useState } from "react";
import Header from "./Header";

const Checkbox = ({
    id,
    type = "checkbox",
    name,
    checked = false,
    onChange,
}) => {
    return (
        <input
            id={id}
            type={type}
            name={name}
            checked={checked}
            onChange={onChange}
        />
    );
};

const Form = ({ onSubmit }) => {
    const [email, setEmail] = useState("");
    const [checkedItems, setCheckedItems] = useState({});

    const handleChange = (event) => {
        setCheckedItems({
            ...checkedItems,
            [event.target.name]: event.target.checked,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const requestBody = {
            email,
            games: Object.keys(checkedItems).filter(
                (item) => checkedItems[item] === true
            ),
        };

        const url = "http://localhost:3000/api/subscribe";

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });

            const result = await response.json();

            //reset
            if (response.ok) {
                setEmail("");
                setCheckedItems({});
            }

            onSubmit(result.message);
        } catch (err) {
            onSubmit(err.message);
        }
    };

    const checkboxes = [
        {
            name: "gta",
            id: "gta-checkbox",
            key: "gta",
            label: "GTA5: Online",
        },
        {
            name: "valorant",
            id: "valorant-checkbox",
            key: "valorant",
            label: "Valorant",
        },
        {
            name: "lol",
            id: "lol-checkbox",
            key: "lol",
            label: "League of Legends",
        },
    ];

    return (
        <form id="sub-form" onSubmit={handleSubmit} method="POST">
            <label htmlFor="email-input">Email</label>
            <input
                type="email"
                id="email-input"
                name="email"
                placeholder="head@shot.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label>Fav games</label>
            {checkboxes.map((item) => (
                <label key={item.key}>
                    <Checkbox
                        name={item.name}
                        id={item.id}
                        checked={checkedItems[item.name]}
                        onChange={handleChange}
                    />
                    {item.label}
                </label>
            ))}

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
    const [submitResult, setSubmitResult] = useState("");

    return (
        <section id="email-sub-container">
            <Header />
            <Form onSubmit={setSubmitResult} />
            {submitResult !== "" && <p>{submitResult}</p>}
        </section>
    );
};

export default EmailSub;
