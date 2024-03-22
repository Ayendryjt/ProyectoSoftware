document.getElementById('goalForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var employee = document.getElementById('employee').value;
    var goal = document.getElementById('goal').value;

    // Aquí enviarías los datos al servidor para almacenarlos en la base de datos
    // Por simplicidad, no se muestra la lógica del servidor aquí

    alert('Objetivo definido para ' + employee + ': ' + goal);
});

document.addEventListener('DOMContentLoaded', function() {
    const defineGoalLink = document.getElementById('defineGoal');
    const evaluateLink = document.getElementById('evaluate');
    const feedbackLink = document.getElementById('feedback');
    const generateReportLink = document.getElementById('generateReport');
    const mainContent = document.querySelector('.main-content');

    // Manejador de eventos para el enlace "Definir Objetivos"
    defineGoalLink.addEventListener('click', function(event) {
        event.preventDefault();
        mainContent.innerHTML = '<h2>Definir Objetivos</h2>' +
                                '<form id="goalForm">' +
                                '   <label for="employee">Empleado:</label>' +
                                '   <input type="text" id="employee" name="employee" required>' +
                                '   <label for="goal">Objetivo:</label>' +
                                '   <textarea id="goal" name="goal" required></textarea>' +
                                '   <button type="submit">Enviar</button>' +
                                '</form>';
        // Aquí puedes agregar el código para enviar los datos del formulario al servidor y manejar la respuesta
    });

    // Agregar manejadores de eventos para los otros enlaces (Evaluar Desempeño, Retroalimentación, Generar Informes) de manera similar

});
