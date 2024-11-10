document.addEventListener('DOMContentLoaded', function () {
    const clickMeButton = document.getElementById('clickMe');
    const closeButton = document.getElementById('closeButton');
    const popupContainer = document.getElementById('popup-container');
    const takeTestButton = document.getElementById('takeTestButton');
    const testContainer = document.getElementById('test-container');
    const submitTestButton = document.getElementById('submitTest');
    const testResultContainer = document.getElementById('test-result-container');
    const closeTestResult = document.getElementById('closeTestResult');
    const closeTestContainer = document.getElementById('closeTestContainer');
    const loveMessageButton = document.getElementById('loveMessageButton');
    const loveMessagePopup = document.getElementById('love-message-popup');
    const closeLoveMessage = document.getElementById('closeLoveMessage');

    // Показать всплывающее сообщение
    clickMeButton.addEventListener('click', function () {
        popupContainer.style.display = 'flex';
    });

    // Скрыть всплывающее сообщение
    closeButton.addEventListener('click', function () {
        popupContainer.style.display = 'none';
    });

    // Показать тест
    takeTestButton.addEventListener('click', function () {
        testContainer.style.display = 'block';
    });

    // Скрыть окно теста
    closeTestContainer.addEventListener('click', function () {
        testContainer.style.display = 'none';
    });

    // Отправить тест
    submitTestButton.addEventListener('click', function () {
        testResultContainer.style.display = 'block';
    });

    // Скрыть результаты теста
    closeTestResult.addEventListener('click', function () {
        testResultContainer.style.display = 'none';
    });

    // Показать еще одно сообщение
    loveMessageButton.addEventListener('click', function () {
        loveMessagePopup.style.display = 'flex';
    });

    // Скрыть сообщение любви
    closeLoveMessage.addEventListener('click', function () {
        loveMessagePopup.style.display = 'none';
    });
});
