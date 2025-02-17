$(document).ready(function() {
    $(document).foundation();

    $('form').on('submit', function(event) {
        event.preventDefault();
        // Obtén los valores de los campos del formulario
        const diametroPrimario = parseFloat($('input').eq(0).val());
        const relacionFocal = parseFloat($('input').eq(1).val());
        const diametroSecundario = parseFloat($('input').eq(2).val());
        const diametroTubo = parseFloat($('input').eq(3).val());
        const longitudTubo = parseFloat($('input').eq(4).val());
        const alturaFocuser = parseFloat($('input').eq(5).val());

        // Realiza cálculos básicos (ejemplo: calcular la longitud focal)
        const longitudFocal = diametroPrimario * relacionFocal;

        // Muestra los resultados (esto se puede mejorar con una mejor presentación)
        alert(`La longitud focal de tu telescopio es: ${longitudFocal} mm`);

        // Agregar aquí más código relacionado a la acción del formulario, si es necesario
    });

    // Verificación de Three.js (debería estar cargado ya)
    if (typeof THREE === 'undefined') {
        console.error("Three.js no está cargado. Asegúrate de que el script se cargue correctamente.");
        return;
    }

    // Obtener el contenedor para la simulación 3D.
    const container = document.getElementById('simulation');

    // Crear la escena, la cámara y el renderizador.
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Agregar un objeto: un cubo básico para la visualización.
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Posicionar la cámara.
    camera.position.z = 5;

    // Función de animación para renderizar la escena de forma continua.
    function animate() {
        requestAnimationFrame(animate);

        // Rotar el cubo para darle dinamismo.
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
    }
    animate();
});