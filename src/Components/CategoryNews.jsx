import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "./Card";

const CategoryNews = () => {
    const { category } = useParams();
    const API_KEY = "c63f707245bb406f9f9a069e874d36a6";
    const [newsData, setNewsData] = useState(null);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const getData = async () => {
        try {
            const response = await fetch(
                `https://newsapi.org/v2/everything?q=${category}&apiKey=${API_KEY}`
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
    }, [category]);

    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    const handleSearch = () => {
        navigate(`/category/${search}`);
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

export default CategoryNews;