import * as CANNON from 'cannon-es';
import * as THREE from 'three';
import { TBAll } from './main'

// Create the invisible ball to destroy the wall
export function createBall(ball: TBAll, world: CANNON.World, scene: THREE.Scene) {
    let radius = 10;
    let geometry = new THREE.SphereGeometry(radius, 32, 32);
    let material = new THREE.MeshBasicMaterial({ color: 0xffff00, transparent: true, opacity: 0 }); // Invisible ball
    ball = new THREE.Mesh(geometry, material);
    ball.position.set(-0.5, 0, 10);  // Start far behind the wall
    scene.add(ball);

    // Add physical body for the ball
    let shape = new CANNON.Sphere(radius);
    let body = new CANNON.Body({ mass: 3 });
    body.addShape(shape);
    body.position.set(-0.5, 0, 10);  // Sync with visual representation
    body.sleep(); // Initially ball is sleeping
    world.addBody(body);

    ball.body = body;

    return ball;
}