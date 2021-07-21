let scene, camera, renderer;

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    addCube(1, 0x0000ff, 2, getRndInteger(), getRndInteger());
    addCube(1, 0x00ff00, 0.5, getRndInteger(), getRndInteger());
    addCube(1, 0xff0000, -1, getRndInteger(), getRndInteger());
    addCube(1, 0xff7700, -3, getRndInteger(), getRndInteger());

    camera.position.z = 5;
}

function addCube(cubeSize, cubeColor, x, y, z) {
    const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
    const material = new THREE.MeshBasicMaterial({ color: cubeColor });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    cube.position.x = x;
    cube.position.y = y;
    cube.position.z = z;
    animate();

    function animate() {
        requestAnimationFrame(animate);

        cube.rotation.x += Math.random() / 50;
        cube.rotation.y += Math.random() / 50;

        renderer.render(scene, camera);
    }
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function getRndInteger() {
    return Math.floor(Math.random() * (2 - -2)) + -2;
}

window.addEventListener("resize", onWindowResize, false);

init();
