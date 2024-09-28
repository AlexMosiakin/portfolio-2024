import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import gsap from 'gsap';
import { createBall } from './ball';
import { createGround } from './ground';
import { createWall } from './wall';

export type TBAll = THREE.Mesh & { body?: CANNON.Body };

let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer;
let world: CANNON.World, bricks: { mesh: THREE.Mesh, body: CANNON.Body }[] = [];
// let helloDiv = document.querySelector('.content_hello')
let ball: TBAll  // Invisible ball to smash the wall


// Initialize Three.js scene
function init() {
    scene = new THREE.Scene();

    // Camera is moved back so the whole wall fits into the view
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = -0.5;  // Adjusted distance to fit the entire wall
    camera.position.y = 0;  // Adjusted distance to fit the entire wall
    camera.position.z = 9;  // Adjusted distance to fit the entire wall

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    const canvas = renderer.domElement
    canvas.classList.add('webgl')
    document.body.appendChild(canvas);

    // Cannon.js world
    world = new CANNON.World();
    world.gravity.set(0, -9, 0);

    createGround(world, scene);
    createWall(bricks, world, scene);
    ball = createBall(ball, world, scene);  // Create invisible ball to destroy the wall
}

//resize
window.addEventListener('resize', () => {
    // Update camera aspect ratio first
    camera.aspect = window.innerWidth / window.innerHeight
    // Then update the projection matrix
    camera.updateProjectionMatrix()

    renderer.setSize(window.innerWidth, window.innerHeight)
})

// Animate the scene
function animate() {
    requestAnimationFrame(animate);
    world.step(1 / 60);

    // Update brick positions
    bricks.forEach(brick => {
        brick.mesh.position.copy(brick.body.position);
        brick.mesh.quaternion.copy(brick.body.quaternion);
    });

    // Update ball position
    if (ball.body) {
        ball.position.copy(ball.body.position);
    }

    renderer?.render(scene, camera);
}

// Shoot the ball towards the wall
function shootBall() {
    // helloDiv.style.height = '0';
    // Apply an impulse to the ball to move it forward
    let impulse = new CANNON.Vec3(0, 0, -100);
    if (ball.body) {
        ball.body.wakeUp()
        ball.body.applyImpulse(impulse, ball.body.position);
    }

    setTimeout(() => {
        const contentSubtitle = document.querySelector('.content_subtitle') as HTMLHtmlElement;
        contentSubtitle.style.height = 'auto';
        const contentTitle = document.querySelector('.content_title') as HTMLHtmlElement;
        contentTitle.style.height = 'auto';
        gsap.to('.logo', { opacity: 1, duration: 1 });
        gsap.to('.menu', { opacity: 1, duration: 1 });
        gsap.to('.content_subtitle', { opacity: 1, duration: 1 });
        gsap.to('.content_title', { opacity: 1, duration: 1 });
    }, 2000);
}

// Start destruction on click
// helloDiv?.addEventListener('click', () => {
//     gsap.to(helloDiv, { opacity: 0, duration: 1, onComplete: shootBall });
// });

export function threeRun() {
    init();
    animate();
}