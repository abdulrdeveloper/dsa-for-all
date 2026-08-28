let money = 25; // Sirf 25 rupay se shuru karte hain taake dry run asaan ho

// Function A
function buyApple(x) {
    if (x > 0) {
        console.log("Aapke paas hain", x, "Rs. Apple khareeda (10 Rs)");
        // Apple khareedne ke baad, bache hue paise doosre function ko pass kar diye
        buyBanana(x - 10); 
    }
}

// Function B
function buyBanana(x) {
    if (x > 0) {
        console.log("Aapke paas hain", x, "Rs. Banana khareeda (5 Rs)");
        // Banana khareedne ke baad, bache hue paise wapis pehle function ko pass kar diye
        buyApple(x - 5); 
    }
}

buyApple(money);