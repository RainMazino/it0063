document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".day-btn");
    const animatedBox = document.getElementById("animated-box");

    let currentDay = null;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const day = button.getAttribute("day");
            const color = button.style.backgroundColor;

            if (currentDay === day) return;

            animatedBox.style.transition = "top 0.5s ease-in-out";
            animatedBox.style.top = "-120%";

            setTimeout(() => {
                animatedBox.style.backgroundColor = color;
                animatedBox.style.transition = "top 0.8s ease-in-out, background-color 0.5s ease-in-out 0.5s";
                animatedBox.style.top = "0";
            }, 500);

            currentDay = day;
        });
    });

    particlesJS("particles-js", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            move: { enable: true, speed: 2, direction: "none" }
        }
    });
});
