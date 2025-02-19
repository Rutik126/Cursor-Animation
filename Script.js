const cursor = document.querySelector(".cursor");
const heading = document.querySelector(".main h1");
const body = document.body;

// Follow cursor and create ripple effect
document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.top = `${y}px`;
    cursor.style.left = `${x}px`;
    cursor.style.display = "block";

    // Get window center for text rotation
    let centerX = window.innerWidth / 2;
    let centerY = window.innerHeight / 2;

    // Calculate rotation angles
    let rotateX = (centerY - y) / 20;
    let rotateY = (x - centerX) / 20;
    heading.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    // Generate a ripple-like radial gradient at cursor position
    let red = Math.floor((x / window.innerWidth) * 255);
    let green = Math.floor((y / window.innerHeight) * 255);
    let blue = Math.floor(255 - ((x / window.innerWidth) * 255));

    body.style.background = `
        radial-gradient(circle at ${x}px ${y}px, 
        rgba(${red}, ${green}, ${blue}, 0.5) 0%, 
        rgba(0, 0, 20, 0.8) 50%, 
        rgba(0, 0, 20, 1) 80%)`;
});

// Hide cursor when leaving the window
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});
