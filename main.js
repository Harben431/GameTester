import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const floorGeometry = new THREE.BoxGeometry(4, 0.1, 4);
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x421308 });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
scene.add(floor);

const wallMaterial = new THREE.MeshBasicMaterial({ color: 0xc0c0c0 });

const backWallGeometry = new THREE.BoxGeometry(4, 2, 0.1);
const backWall = new THREE.Mesh(backWallGeometry, wallMaterial);
backWall.position.z = -2;
backWall.position.y = 1;
scene.add(backWall);

const leftWallGeometry = new THREE.BoxGeometry(0.1, 2, 4);
const leftWall = new THREE.Mesh(leftWallGeometry, wallMaterial);
leftWall.position.x = -2;
leftWall.position.y = 1;
scene.add(leftWall);

const bedBaseGeometry = new THREE.BoxGeometry(2, 0.2, 1);
const bedBaseMaterial = new THREE.MeshBasicMaterial({ color: 0x8b4513 });
const bedBase = new THREE.Mesh(bedBaseGeometry, bedBaseMaterial);
bedBase.position.set(0, 0.2, 1);
scene.add(bedBase);

const bedMattressGeometry = new THREE.BoxGeometry(2, 0.1, 1);
const bedMattressMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const bedMattress = new THREE.Mesh(bedMattressGeometry, bedMattressMaterial);
bedMattress.position.set(0, 0.35, 1);
scene.add(bedMattress);

const tableTopGeometry = new THREE.BoxGeometry(1, 0.1, 1);
const tableTopMaterial = new THREE.MeshBasicMaterial({ color: 0x964b00 });
const tableTop = new THREE.Mesh(tableTopGeometry, tableTopMaterial);
tableTop.position.set(-1.5, 0.6, -1);
scene.add(tableTop);

const legGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.6, 32);
const legMaterial = new THREE.MeshBasicMaterial({ color: 0x8b4513 });

function createTableLeg(x, z) {
  const leg = new THREE.Mesh(legGeometry, legMaterial);
  leg.position.set(x, 0.3, z);
  scene.add(leg);
}

createTableLeg(-2, -0.5);
createTableLeg(-1, -0.5);
createTableLeg(-2, -1.5);
createTableLeg(-1, -1.5);

const windowGeometry = new THREE.PlaneGeometry(0.8, 0.8);
const windowMaterial = new THREE.MeshBasicMaterial({ color: 0x87ceeb, side: THREE.DoubleSide, transparent: true, opacity: 0.6 });

const leftWindow = new THREE.Mesh(windowGeometry, windowMaterial);
leftWindow.position.set(-1, 1.2, -1.5);
scene.add(leftWindow);

const rightWindow = new THREE.Mesh(windowGeometry, windowMaterial);
rightWindow.position.set(1, 1.2, -1.5);
scene.add(rightWindow);

camera.position.z = 4;
camera.position.y = 1.5;
camera.position.x = 4;
camera.rotation.y = 1;

function animate() {
  renderer.render(scene, camera);
}