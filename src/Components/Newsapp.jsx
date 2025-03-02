import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

const Newsapp = () => {
    const API_KEY = "c63f707245bb406f9f9a069e874d36a6";
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null);
    const navigate = useNavigate();

    const getData = async () => {
        try {
            const response = await fetch(
                `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
            );
            const jsonData = await response.json();
            console.log(jsonData.articles);
            setNewsData(jsonData.articles);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handleInput = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    };

    const handleCategoryClick = (category) => {
        navigate(`/category/${category}`);
    };

    return (
        <div>
            <nav>
                <div>
                    <h1>NEWS API</h1>
                </div>
                <ul>
                    <a>📰(0´◡`0)</a>
                </ul>
                <div className="searchBar">
                    <input
                        type="text"
                        value={search}
                        placeholder="Search News"
                        onChange={handleInput}
                    />
                    <button onClick={getData}>Search</button>
                </div>
            </nav>
            <div>
                <p className="head">Welcome Users</p>
            </div>
            <div className="categoryBtn">
                <button onClick={() => handleCategoryClick("sports")}>
                    Sports
                </button>
                <button onClick={() => handleCategoryClick("politics")}>
                    Politics
                </button>
                <button onClick={() => handleCategoryClick("entertainment")}>
                    Entertainment
                </button>
                <button onClick={() => handleCategoryClick("health")}>
                    Health
                </button>
                <button onClick={() => handleCategoryClick("fitness")}>
                    Fitness
                </button>
            </div>
            <div>{newsData ? <Card data={newsData} /> : null}</div>
        </div>
    );
};

export default Newsapp;