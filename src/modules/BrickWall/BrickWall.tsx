import { useLayoutEffect, useRef } from 'react'
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import gsap from 'gsap';
import { createBall } from '../../three/ball';
import { createGround } from '../../three/ground';
import { createWall } from '../../three/wall';

export type TBAll = THREE.Mesh & { body?: CANNON.Body };

export const BrickWall = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useLayoutEffect(() => {
        let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer;
        let world: CANNON.World, bricks: { mesh: THREE.Mesh, body: CANNON.Body }[] = [];
        let helloDiv = document.querySelector('.content-hello') as HTMLHtmlElement;
        let ball: TBAll  // Invisible ball to smash the wall
        let frameCount = 0;
        const targetFPS = 60;


        // Initialize Three.js scene
        function init() {
            scene = new THREE.Scene();

            // Camera is moved back so the whole wall fits into the view
            camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.x = -0.5;  // Adjusted distance to fit the entire wall
            camera.position.y = 0;  // Adjusted distance to fit the entire wall
            camera.position.z = 9;  // Adjusted distance to fit the entire wall

            renderer = new THREE.WebGLRenderer({ alpha: true, canvas: canvasRef.current as HTMLCanvasElement, });
            renderer.shadowMap.enabled = false;
            renderer.setSize(window.innerWidth, window.innerHeight);

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
            if (frameCount % (60 / targetFPS) === 0) {
                world.step(1 / targetFPS);
            }

            // Update brick positions
            bricks.forEach(brick => {
                brick.mesh.position.copy(brick.body.position);
                brick.mesh.quaternion.copy(brick.body.quaternion);
            });

            // Update ball position
            if (ball.body) {
                ball.position.copy(ball.body.position);
            }

            if (frameCount % (60 / targetFPS) === 0) {
                renderer?.render(scene, camera);
            }
            frameCount++;
        }

        // Shoot the ball towards the wall
        function shootBall() {
            helloDiv.style.height = '0';
            // Apply an impulse to the ball to move it forward
            let impulse = new CANNON.Vec3(0, 0, -100);
            if (ball.body) {
                ball.body.wakeUp()
                ball.body.applyImpulse(impulse, ball.body.position);
            }

            setTimeout(() => {
                gsap.to('.header-wrapper', { display: "flex", opacity: 1, duration: 1 });
                gsap.to('.content-subtitle', { display: "block", opacity: 1, duration: 1 });
                gsap.to('.content-title', { display: "block", opacity: 1, duration: 1 });
                gsap.to('body', { overflowY: "scroll", duration: 1 });
            }, 2000);
        }

        // Start destruction on click
        helloDiv?.addEventListener('click', () => {
            helloDiv.style.textShadow = '4px 19px 28px #580EF6';
            gsap.to(helloDiv, { display: "none", opacity: 0, duration: 1, onComplete: shootBall });
        });
        init();
        animate();
    }, [])

    return (
        <canvas className="webgl" ref={canvasRef}></canvas>
    )
}
