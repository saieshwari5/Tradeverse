import React, { useState, useEffect } from "react";

const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState();

    useEffect(() => {
        fetch("http://127.0.0.1:5000/api/leaderboard")  
            .then(response => response.json())
            .then(data => setLeaderboard(data))
            .catch(error => console.error("Error fetching leaderboard:", error));
    },);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
            {leaderboard.length > 0 ? (
                <ul>
                    {leaderboard.map((entry, index) => (
                        <li key={index}>
                            <strong>#{entry.rank}</strong> {entry.username} - <span>${entry.virtual_balance}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading leaderboard...</p>
            )}
        </div>
    );
};

export default Leaderboard;
