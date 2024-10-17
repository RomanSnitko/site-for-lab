document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    var results = {
        ФРЭ: 0,
        ФИТУ: 0,
        ИЭФ: 0,
        ФИБ: 0,
        КСИС: 0
    };

    // Подсчет результатов
    for (var i = 1; i <= 13; i++) {
        var answer = document.querySelector('input[name="q' + i + '"]:checked');
        if (answer) {
            results[answer.value]++;
        }
    }

    // Определение типа студента
    var maxValue = Math.max(results.ФРЭ, results.ФИТУ, results.ИЭФ, results.ФИБ, results.КСИС);
    var studentType = '';

    for (var key in results) {
        if (results[key] === maxValue) {
            studentType = key;
            break;
        }
    }

    var resultText = "Вы - ";
    switch (studentType) {
        case "ФРЭ":
            resultText += "ФРЭШНИК";
            break;
        case "ФИТУ":
            resultText += "ФИТУШНИК";
            break;
        case "ИЭФ":
            resultText += "ИЭФ";
            break;
        case "ФИБ":
            resultText += "ФИБ";
            break;
        case "КСИС":
            resultText += "КСИС";
            break;
        default:
            resultText += "студент БГУИР.";
    }

    document.getElementById("result").innerText = resultText;
    document.getElementById("result").style.display = "block"; // Показываем результат
});
