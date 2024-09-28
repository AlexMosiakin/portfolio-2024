import * as CANNON from 'cannon-es';
import * as THREE from 'three';

let groundBody;  // Physical ground

// Create the ground plane
export function createGround(world: CANNON.World, scene: THREE.Scene) {
    let groundShape = new CANNON.Plane();
    groundBody = new CANNON.Body({ mass: 0 });  // Ground has mass 0 (immovable)
    groundBody.addShape(groundShape);
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);  // Rotate ground to be horizontal
    groundBody.position.set(0, -7.5, 0);  // Position ground right below the wall
    world.addBody(groundBody);

    // Visual ground (optional, hidden but helps visualize)
    let groundMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00, visible: false });
    let groundGeometry = new THREE.PlaneGeometry(100, 100);
    let ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.position.set(0, -7.5, 0);
    ground.rotation.x = -Math.PI / 2;
    scene.add(ground);
}