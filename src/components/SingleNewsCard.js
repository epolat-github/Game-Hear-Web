import React from "react";

const SingleNewsCard = ({ date, header, image, news }) => {
    const formatDate = (date) => {
        const year = date.getUTCFullYear();
        const month = ("0" + (date.getMonth() + 1)).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);

        return `${month}/${day}/${year}`;
    };

    return (
        <section className="single-news-card">
            <h1>{header}</h1>
            <p className="single-news-date">{formatDate(date)}</p>
            <img
                src={
                    image.url +
                    `?width=${image.dimensions.width}&height=${image.dimensions.height}`
                }
                alt="Featured image of GTA5 news"
            />
            <ul className="weekly-news-list">
                {news.map((item, index) => (
                    <li
                        className="weekly-news-list-item"
                        key={index.toString()}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default SingleNewsCard;
