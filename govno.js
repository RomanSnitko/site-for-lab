function calculateResult() {
    var form = document.getElementById('quiz-form');
    var result = document.getElementById('result');
    var answers = {
        "ФРЭ": 0,
        "ФИТУ": 0,
        "ИЭФ": 0,
        "ФИБ": 0
    };

    for (var i = 1; i <= 15; i++) {
        var q = form['q' + i];
        if (q) {
            for (var j = 0; j < q.length; j++) {
                if (q[j].checked) {
                    answers[q[j].value]++;
                }
            }
        }
    }

    var maxScore = Math.max(answers["ФРЭ"], answers["ФИТУ"], answers["ИЭФ"], answers["ФИБ"]);
    var faculty;

    if (answers["ФРЭ"] === maxScore) {
        faculty = "Факультет радиоэлектроники";
    } else if (answers["ФИТУ"] === maxScore) {
        faculty = "Факультет информационных технологий и управления";
    } else if (answers["ИЭФ"] === maxScore) {
        faculty = "Инженерно-экономический факультет";
    } else {
        faculty = "Факультет информационной безопасности";
    }

    result.textContent = "Вы подходите для: " + faculty;
    result.style.display = "block"; // Показываем результат
}
