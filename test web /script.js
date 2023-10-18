// Initialize Three.js scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a WebGL renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

// Create a rectangular card geometry
const cardGeometry = new THREE.BoxGeometry(1, 0.1, 2);
const cardMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFF00 }); // Yellow color
const card = new THREE.Mesh(cardGeometry, cardMaterial);
scene.add(card);

// Create an inner color for the card
const innerGeometry = new THREE.BoxGeometry(0.9, 0.09, 1.9);
const innerMaterial = new THREE.MeshBasicMaterial({ color: 0xFF0000 }); // Red color
const innerCard = new THREE.Mesh(innerGeometry, innerMaterial);
innerCard.position.y = 0.05; // Adjust the inner card's position
card.add(innerCard);

// Initialize variables for mouse interaction
const mouse = new THREE.Vector2();
let isMouseDown = false;
let previousMousePosition = { x: 0, y: 0 };

// Handle mouse events
document.addEventListener('mousedown', () => {
    isMouseDown = true;
    previousMousePosition = { x: 0, y: 0 };
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

document.addEventListener('mousemove', (event) => {
    if (isMouseDown) {
        const { clientX, clientY } = event;
        const deltaX = clientX - previousMousePosition.x;
        const deltaY = clientY - previousMousePosition.y;
        
        card.rotation.y += deltaX * 0.01;
        card.rotation.x += deltaY * 0.01;

        previousMousePosition = { x: clientX, y: clientY };
    }
});

// Animation loop
const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};
// ... (previous code)

// Initialize variables for mouse interaction and inertia
let cardRotationSpeed = 0.03;
let inertia = 0.98;

// Handle mouse events
document.addEventListener('mousedown', () => {
    isMouseDown = true;
    previousMousePosition = { x: 0, y: 0 };
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
    cardRotationSpeed = 0.01; // Reset rotation speed
});

document.addEventListener('mousemove', (event) => {
    if (isMouseDown) {
        const { clientX, clientY } = event;
        const deltaX = clientX - previousMousePosition.x;
        const deltaY = clientY - previousMousePosition.y;

        card.rotation.y -= deltaX * 0.01; // Reverse rotation directions
        card.rotation.x -= deltaY * 0.01; // Reverse rotation directions

        previousMousePosition = { x: clientX, y: clientY };
    }
});

// Add inertia to the card rotation
const updateRotation = () => {
    if (!isMouseDown) {
        card.rotation.x += cardRotationSpeed;
        card.rotation.y += cardRotationSpeed;

        cardRotationSpeed *= inertia;
    }

    requestAnimationFrame(updateRotation);
};

updateRotation();


animate();