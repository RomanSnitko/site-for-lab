function calculateResult() {
    var form = document.getElementById('quiz-form');
    var scores = {
        'ФРЭ': 0,
        'ФИТУ': 0,
        'ИЭФ': 0,
        'ФИБ': 0
    };

    // Считаем все адказы чела который вводит
    for (var i = 1; i <= 15; i++) {
        var question = form['q' + i];
        if (question) {
            for (var j = 0; j < question.length; j++) {
                if (question[j].checked) {
                    scores[question[j].value]++;
                }
            }
        }
    }

  
    var maxScore = Math.max(scores['ФРЭ'], scores['ФИТУ'], scores['ИЭФ'], scores['ФИБ']);
    var bestFaculties = Object.keys(scores).filter(function(faculty) {
        return scores[faculty] === maxScore;
    });

    var resultPage = 'result.html?faculties=' + bestFaculties.join(',');
    window.location.href = resultPage;
}
