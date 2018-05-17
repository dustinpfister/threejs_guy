// SCENE
var scene = new THREE.Scene();

// GUY
var guy1 = new Guy();
scene.add(guy1.group);

var guy2 = new Guy();
guy2.group.position.set(5, 0, 0);
scene.add(guy2.group);

var guy3 = new Guy();
guy3.group.position.set(-5, 0, 0);
scene.add(guy3.group);

// CAMERA
var camera = new THREE.PerspectiveCamera(50, 8 / 6, .05, 100);
camera.position.set(10, 10, 10);
camera.lookAt(0, 0, 0);
camera.add(new THREE.PointLight());
scene.add(camera);

new THREE.OrbitControls(camera);

// RENDER
var renderer = new THREE.WebGLRenderer();
renderer.setSize(800, 600);
document.body.appendChild(renderer.domElement);

var frame = 0, maxFrame = 100;
var loop = function () {

    var per = frame / maxFrame,
    bias = Math.abs(.5 - per) / .5,
    r = Math.PI * 2 * per;

    requestAnimationFrame(loop);

    // guy1 waves and walaks
    guy1.moveArm('arm_right', .4 + .2 * bias, .25);
    guy1.moveArm('arm_left',  - .05 + .1 * bias, 0);
    guy1.moveHead(.05 - .1 * bias);
    guy1.moveLegs(per * 8);
    guy1.group.position.set(
        Math.cos(r) * 5 - 5,
        0,
        Math.sin(r) * 5);
    guy1.group.lookAt(
        Math.cos(r + 1) * 5 - 5,
        0,
        Math.sin(r + 1) * 5);

    // guy 2 shakes his head
    guy2.moveHead(.125 - .25 * bias);

    guy3.moveArm('arm_right', 0, bias * 2);
    guy3.moveArm('arm_left', 0, bias * 2);

    renderer.render(scene, camera);

    frame += 1;
    frame %= maxFrame;

};

loop();
