document.addEventListener("DOMContentLoaded",()=>{
    let count=0;
    const counterDisplay=document.getElementById("counter_no");
    const decrease=document.getElementById("decrease");
    const increase=document.getElementById("increase");
    const reset=document.getElementById("reset");

    function updateCounter() {
        counterDisplay.textContent = count;
    }

    decrease.addEventListener('click',()=>{
        count--;
        updateCounter()
    });

    reset.addEventListener('click',()=>{
        count=0;
        updateCounter()
    });

    increase.addEventListener('click',()=>{
        count++;
        updateCounter()
    });
});