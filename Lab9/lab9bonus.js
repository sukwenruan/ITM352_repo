function calculateTax(monthly_sales, tax_rate) {
    if(Number(tax_rate) !=tax_rate) {
        errors.push('Invalid tax rate.');
    }
    if (!Array.isArray(monthly_sales)) {
        errors.push('Invalid input. Monthly sales must be an array of numbers.');
    }
    const tax_owing = monthly_sales.map(sales => sales*tax_rate);
    return tax_owing;
};

