let renda = 3002.00;
let impostoAPagar = 0;

if (renda >= 0.00 && renda <= 2000.00) {
    console.log('Isento');
}
else if (renda >= 2000.01 && renda <= 3000.00) {
    impostoAPagar = ((renda - 2000.00) * 0.08);
    console.log(impostoAPagar.toFixed(2));
}
else if (renda >= 3000.01 && renda <= 4500.00) {
    impostoAPagar = ((renda - 3000.00) * 0.18) + (1000.00 * 0.08);
    console.log(impostoAPagar.toFixed(2));
}
else {
    impostoAPagar = ((renda - 4500.00) * 0.28) + (1500.00 * 0.18) + (1000.00 * 0.08);
    console.log(impostoAPagar.toFixed(2));
}