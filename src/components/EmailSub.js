import React, { useState, useEffect } from "react";
import Header from "./Header";
import * as EmailValidator from "email-validator";

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

const Form = () => {
    const [email, setEmail] = useState("");
    const [checkedItems, setCheckedItems] = useState({});
    const [emailError, setEmailError] = useState("");
    const [checkedItemsError, setCheckedItemsError] = useState("");
    const [submitResult, setSubmitResult] = useState("");

    // show the result message for a time
    useEffect(() => {
        setTimeout(() => {
            setSubmitResult("");
        }, 2000);
    }, [submitResult]);

    const validate = () => {
        let validation = true;

        // empty email input
        if (email === "") {
            setEmailError("Email can't be empty.");
            validation = false;
        }
        // email validation
        else if (!EmailValidator.validate(email)) {
            setEmailError("Email is not valid.");
            validation = false;
        }
        // if email is valid
        else {
            setEmailError("");
        }

        // if nothing checked
        if (
            Object.keys(checkedItems).filter(
                (item) => checkedItems[item] === true
            ).length == 0
        ) {
            setCheckedItemsError("Nothing is checked.");
            validation = false;
        }

        // if checkboxes are valid
        else {
            setCheckedItemsError("");
        }
        return validation;
    };

    const handleChange = (event) => {
        setCheckedItems({
            ...checkedItems,
            [event.target.name]: event.target.checked,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (validate() === false) {
            return false;
        }

        const requestBody = {
            email,
            games: Object.keys(checkedItems).filter(
                (item) => checkedItems[item] === true
            ),
        };

        const url = "https://game-hear-backend.herokuapp.com/api/subscribe";
        // const url = "http://localhost:3000/api/subscribe";

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
                setCheckedItemsError("");
                setEmailError("");
                setSubmitResult(result.message);
            } else {
                // games checkbox SERVER VALIDATION handler
                if (result.message.includes("games")) {
                    setCheckedItemsError("Nothing is checked.");
                } else {
                    setCheckedItemsError("");
                }

                // Email input SERVER VALIDATION handler
                if (result.message.includes("email")) {
                    setEmailError("Email is not valid.");
                } else {
                    setEmailError("");
                }

                if (
                    !result.message.includes("games") &&
                    !result.message.includes("email")
                ) {
                    throw new Error("Something went wrong. Sorry.");
                }
            }
        } catch (err) {
            console.log("ERROR: ", err.message);
            setSubmitResult("Something went wrong. Sorry.");
        }
    };

    const checkboxes = [
        {
            name: "gta5",
            id: "gta5-checkbox",
            key: "gta5",
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
                // type="email"
                id="email-input"
                name="email"
                placeholder="head@shot.com"
                value={email}
                onChange={(e) => setEmail(e.target.value.trim())}
            />
            <p className="error-message">{emailError}</p>
            <label>Fav games</label>
            <section id="game-checkboxes">
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
            </section>
            <p className="error-message">{checkedItemsError}</p>

            <input
                type="submit"
                className="primary-button"
                id="submit-button"
                value="Shoot!"
            />
            {submitResult !== "" && <p id="result-text">{submitResult}</p>}
        </form>
    );
};

const EmailSub = () => {
    return (
        <section id="email-sub-container">
            <Header />
            <Form />
            {/* {submitResult !== "" && <p id="result-text">{submitResult}</p>} */}
        </section>
    );
};

export default EmailSub;
