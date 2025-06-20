
        let ticketAmount = 0;
        const ticketAmountDisplay = document.getElementById("ticket");
        const minusButton = document.getElementById("minus");
        const plusButton = document.getElementById("plus");
        function updateDisplay() {
            ticketAmountDisplay.innerText = ticketAmount;
            minusButton.disabled = ticketAmount === 0;
        }
        minusButton.addEventListener("click", () => {
            if (ticketAmount > 0) {
                ticketAmount--;
                updateDisplay();
            }
        });
        plusButton.addEventListener("click", () => {
            ticketAmount++;
            updateDisplay();
        });
        updateDisplay();
