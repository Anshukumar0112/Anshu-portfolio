import React from "react";
import "./InfoCard.css";

function InfoCard({ children }) {
    return (
        <div className="info-card">
            {children}
        </div>
    );
}

export default InfoCard;