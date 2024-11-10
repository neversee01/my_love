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
        popupContainer.classList.remove('hidden');
    });

    // Скрыть всплывающее сообщение
    closeButton.addEventListener('click', function () {
        popupContainer.classList.add('hidden');
    });

    // Показать тест
    takeTestButton.addEventListener('click', function () {
        testContainer.classList.remove('hidden');
    });

    // Скрыть окно теста
    closeTestContainer.addEventListener('click', function () {
        testContainer.classList.add('hidden');
    });

    // Отправить тест
    submitTestButton.addEventListener('click', function () {
        testResultContainer.classList.remove('hidden');
    });

    // Скрыть результаты теста
    closeTestResult.addEventListener('click', function () {
        testResultContainer.classList.add('hidden');
    });

    // Показать еще одно сообщение
    loveMessageButton.addEventListener('click', function () {
        loveMessagePopup.classList.remove('hidden');
    });

    // Скрыть сообщение любви
    closeLoveMessage.addEventListener('click', function () {
        loveMessagePopup.classList.add('hidden');
    });
});
