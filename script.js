function calcular() {
    // Obtener valores de entrada
    const a = parseFloat(document.getElementById("ancho").value);
    const l = parseFloat(document.getElementById("largo").value);
    const e = parseFloat(document.getElementById("espesor").value);
    const c = parseInt(document.getElementById("cantidad").value);
    const d = 0.093;

    // Cálculos
    const pu = a * l * e * d * 2; // Peso unidad (g)
    const pm = a * 100 * e * d * 2; // Peso metro (g)
    
    // Cálculo de unidades al saco
    let us = Math.floor(20000 / pu);
    us = Math.floor(us / 10) * 10; // Ajustar al múltiplo de 10
    
    const ps = us * pu / 1000; // Peso del saco en kilos
    
    // Calcular fuelles y ancho óptico
    const f = a <= 99 ? "No" : 20;
    const op = a <= 99 ? a : a - 40;

    // Kilos Extrusión
    const kge = pu * c / 1000;

    // Kilos Bobinas (múltiplo de 2 y <= 100)
    let kgb = Math.min(Math.floor(kge / 2) * 2, 100);

    // Cantidad de Bobinas
    const cb = (kge / kgb).toFixed(2);

    // Sacos Aproximados
    const sa = Math.ceil(c / us);

    // Mostrar resultados
    const resultados = `
        <strong>Especificaciones de Extrusión:</strong><br>
        Ancho: ${a} cm<br>
        Espesor: ${e} micrones<br>
        Fuelles: ${f}<br>
        Ancho óptico: ${op} cm<br>
        Peso metro: ${pm.toFixed(2)} g<br>
        Kilos Extrusión: ${kge.toFixed(2)} kg<br>
        Kilos Bobinas: ${kgb.toFixed(2)} kg<br>
        Cantidad Bobinas: ${cb} unidades<br><br>

        <strong>Especificaciones de Sellado:</strong><br>
        Unidades al saco: ${us} unidades<br>
        Paquetes al saco: ${(us / 10)} paquetes<br>
        Peso saco: ${ps.toFixed(2)} kg<br>
        Sacos Aproximados: ${sa} sacos
    `;
    document.getElementById("resultados").innerHTML = resultados;
}
