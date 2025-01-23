"use client"

import React, { useEffect } from "react";
import anime from "animejs";

const GRID_HEIGHT = 20;
const GRID_WIDTH = 20;

const StaggeredGrid = ({className = ""}) => {
    useEffect(() => {
        const centerX = (GRID_WIDTH - 1) / 2; // Center of the grid (x-axis)
        const centerY = (GRID_HEIGHT - 1) / 2; // Center of the grid (y-axis)
        const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2); // Max possible distance from the center
    
        anime({
            targets: ".dot",
            scale: function (_, i) {
                // Calculate grid position (row, col)
                const row = Math.floor(i / GRID_WIDTH);
                const col = i % GRID_WIDTH;
        
                // Calculate distance from the center
                const distance = Math.sqrt((col - centerX) ** 2 + (row - centerY) ** 2);
        
                return (distance/maxDistance) * 1.0; 
            },
            translateY: function (_, i) {
                const row = Math.floor(i / GRID_WIDTH);
                const col = i % GRID_WIDTH;
                const distance = Math.sqrt((col - centerX) ** 2 + (row - centerY) ** 2);
        
                // Map distance to X movement (closer dots move more)
                return (Math.random() * 2 - 1) * distance/maxDistance * 200;
            },
            translateX: function (_, i) {
                const row = Math.floor(i / GRID_WIDTH);
                const col = i % GRID_WIDTH;
                const distance = Math.sqrt((col - centerX) ** 2 + (row - centerY) ** 2);

                return (Math.random() * 2 - 1) * distance/maxDistance * 400;
            },

            easing: "easeInOutQuad",
            duration: 5000,
            loop: true,
            delay: anime.stagger(500, { grid: [GRID_WIDTH, GRID_HEIGHT], from: "center" }),
            direction: "alternate",
        });
    }, []);

    const dots = Array.from({ length: GRID_HEIGHT * GRID_WIDTH });
    console.log(className);
    return (
        <div
            className={`${className}`}
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)`,
                gap: "30px",
                justifyContent: "center",
                alignItems: "center",
            }}
            >
            {dots.map((_, index) => (
                <div
                key={index}
                className="dot"
                style={{
                    width: "4px",
                    height: "4px",
                    backgroundColor: "white",
                    borderRadius: "50%",
                }}
                ></div>
            ))}
        </div>
    );
};

export default StaggeredGrid;