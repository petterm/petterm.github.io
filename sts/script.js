(function(){
    const changeTimoutSeconds = 1200;
    const currentTotalElement = document.getElementById("currentTotal");
    const currentChangeElement = document.getElementById("currentChange");
    let currentHP = 156;
    let change = 0;
    let changeTimout = null;

    window.modifyHP = (amount) => {
        console.log("Adding HP:", amount);
        change += amount;
        currentHP += amount;
        currentTotalElement.innerText = currentHP;
        currentChangeElement.innerText = change > 0 ? "+" + change : change;
        currentChangeElement.classList.remove("hidden");
        clearTimeout(changeTimout);
        changeTimout = setTimeout(() => {
            change = 0;
            currentChangeElement.classList.add("hidden");
        }, changeTimoutSeconds);
    };
})();