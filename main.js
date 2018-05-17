// SCENE
var scene = new THREE.Scene();

// GUY
var guy = new Guy();
scene.add(guy.group);

// CAMERA
var camera = new THREE.PerspectiveCamera(50,8/6,.05,100);
camera.position.set(10,10,10);
camera.lookAt(0,0,0);
camera.add(new THREE.PointLight());
scene.add(camera);

// RENDER
var renderer = new THREE.WebGLRenderer();
renderer.setSize(800,600);
document.body.appendChild(renderer.domElement);
renderer.render(scene,camera);