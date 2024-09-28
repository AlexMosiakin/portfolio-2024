import * as CANNON from 'cannon-es';
import * as THREE from 'three';

let rows = 28, cols = 20;
let brickSize = { x: 1.25, y: 0.5, z: 0.5 };  // Adjusted for 20 bricks wide, 24 rows tall

// Create individual brick
export function createBrick(x: number, y: number, world: CANNON.World, scene: THREE.Scene) {
    let brickGeometry = new THREE.BoxGeometry(brickSize.x, brickSize.y, brickSize.z);
    let brickMaterial = new THREE.MeshBasicMaterial({ color: 0x1A1C22 }); // Black with white outline
    let brick = new THREE.Mesh(brickGeometry, brickMaterial);

    let edgesGeometry = new THREE.EdgesGeometry(brick.geometry); // or WireframeGeometry
    let edgesMaterial = new THREE.LineBasicMaterial({ color: 0xF7F7F7, linewidth: 2 });
    let edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
    brick.add(edges); // add wireframe as a child of the parent mesh

    brick.position.set(x, y, 0);
    scene.add(brick);

    // Add physical body for the brick
    let shape = new CANNON.Box(new CANNON.Vec3(brickSize.x / 2, brickSize.y / 2, brickSize.z / 2));
    let body = new CANNON.Body({ mass: 1 });
    body.addShape(shape);
    body.position.set(x, y, 0);
    body.sleep(); // Initially bricks are sleeping
    world.addBody(body);

    return { mesh: brick, body: body };
}

// Create the brick wall, scaled to the screen
export function createWall(bricks: { mesh: THREE.Mesh, body: CANNON.Body }[], world: CANNON.World, scene: THREE.Scene) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let brick = createBrick(
                j * (brickSize.x) - (cols * (brickSize.x)) / 2,
                i * (brickSize.y) - (rows * (brickSize.y)) / 2,
                world,
                scene
            );
            bricks.push(brick);
        }
    }
}