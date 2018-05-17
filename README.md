# threejs_guy

This is a js file that will return an instance of Guy that can be used in a three.js project. The guy.js file depends on three.js, and when I started making this I was using three.js r91.

## html
```
<!doctype html>
<html>
    <head>
        <title>Threejs Guy</title>
    </head>
    <body>
        <script src="three.min.js"></script>
        <script src="guy.js"></script>
        <script src="main.js"></script>
    </body>
</html>
```

## js
```js
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
```

this is the first repo of this kind of which there should be at least a few more I think because this is well...fun.

If I get to it I might expand this readme as I develop guy more.