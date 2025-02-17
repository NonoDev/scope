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
});