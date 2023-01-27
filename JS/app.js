// Selecting the element with (.text) className
const text = document.querySelector(".text");

// Creating array with the texts to render
const thinking = [
    `"Aspire to inspire before you expire."`,
    `"My wish for you is to become Hope, People need that and even if we fail, What better way there is to live."`,
    `"Believe in Yourself..."`,
    `"No one can win every battle but no one should fall without struggle."`,
    `"Blaming is actually easier than doing the actual work."`,
    `"Keep learning, Keep Smiling... ☆"`,
    `" Love You 3000 :) "`
];

// Function to render text on the screen
const typeText = () => {
    let textIndex = 0;
    setTimeout(() => {
        text.textContent = thinking[textIndex];
        textIndex++;
    }, 0);
    setTimeout(() => {
        text.textContent = thinking[textIndex];
        textIndex++;
    }, 4000);
    setTimeout(() => {
        text.textContent = thinking[textIndex];
        textIndex++;
    }, 8000);
    setTimeout(() => {
        text.textContent = thinking[textIndex];
        textIndex++;
    }, 12000);
    setTimeout(() => {
        text.textContent = thinking[textIndex];
        textIndex++;
    }, 16000);
    setTimeout(() => {
        text.textContent = thinking[textIndex];
        textIndex++;
    }, 20000);
    setTimeout(() => {
        text.textContent = thinking[textIndex];
        textIndex++;
    }, 24000);
    setInterval(typeText, 28000);
}

// Function call
typeText();