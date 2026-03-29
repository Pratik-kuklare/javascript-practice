let calculation = localStorage.getItem('calculation') || '';
        displayCalculation();

        function updateCalculation(value) {
            calculation += value;
            displayCalculation();
            localStorage.setItem('calculation', calculation);
        }

        function displayCalculation() {
            document.querySelector('.js-calculation')
                .innerHTML = calculation;
        }

        function deletelast() {
            calculation = calculation.slice(0, -1);
            displayCalculation();
            localStorage.setItem('calculation', calculation);
        }