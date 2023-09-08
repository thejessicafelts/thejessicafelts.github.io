function openCalculator(evt, calculatorName) {
    var i, tabcontent, tablinks;

    // Get the infoNotice and note elements
    var infoNotice = document.querySelector('.infoNotice');
    var note = document.querySelector('.note');

    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(calculatorName).style.display = "block";
    evt.currentTarget.className += " active";

    // Set display properties based on active tab
    if (calculatorName === 'infoTab') {
        infoNotice.style.display = 'block';
        note.style.display = 'none';
    } else {
        infoNotice.style.display = 'none';
        note.style.display = 'block';
    }
}

// Michigan Income Tax - 4.25%
// OASDI Tax - 6.2% of the first $160,200
// Medicare Tax - 1.45%
// Additional Medicare Tax - 0.9% over $200,000

// Net Income is your wage after taxes and other deductions have been taken out.

function netIncomeCalculation(){

    function formatCurrency(num) {
        return '$' + Number(num).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    let income = parseInt(document.getElementById("incomeInput").value, 10);
    let incomeFormatted = formatCurrency(income)

    // Michigan Income Tax
    let michiganIncomeTax = (income * 0.0425);
    let michiganIncomeTaxFormatted = formatCurrency(michiganIncomeTax);

    // OASDI Tax
    let oasdiTax;
    if(income > 160200){
        oasdiTax = (160200 * 0.062);
    } else {
        oasdiTax = (income * 0.062);
    };
    let oasdiTaxFormatted = formatCurrency(oasdiTax);

    // Medicare Tax
    let medicareTax;
    if(income > 200000){
        medicareTax = ((income * 0.0145) + ((income - 200000) * 0.009));
    } else {
        medicareTax = (income * 0.0145);
    };
    let medicareTaxFormatted = formatCurrency(medicareTax);

    // Federal Income Tax
    let federalTax;

    if((income >= 0) && (income <= 11000)){
        federalTax = (income * 0.10);

    } else if((income > 11000) && (income <= 44725)) {
        federalTax = (1100 + ((income - 11000) * 0.12));

    } else if((income > 44725) && (income <= 95375)) {
        federalTax = (5147 + ((income - 44725) * 0.22));

    } else if((income > 95375) && (income <= 182100)) {
        federalTax = (16290 + ((income - 95375) * 0.24));

    } else if((income > 182100) && (income <= 231250)) {
        federalTax = (37104 + ((income - 182100) * 0.32));

    } else if((income > 231250) && (income <= 578125)) {
        federalTax = (52832 + ((income - 231250) * 0.35));

    } else if(income > 578125) {
        federalTax = (174238.25 + ((income - 578125) * 0.37));

    } else {
        federalTax = "Error";
    }
    let federalTaxFormatted = formatCurrency(federalTax);

    /**
     * 2023 Federal Income Tax Brackets:
     *
     * $0       - $11,000       10%     ---             10% of Taxable Income
     * $11,001  - $44,725       12%     $1,100       +  12% of the amount over $11,000.00
     * $44,726  - $95,375       22%     $5,147       +  22% of the amount over $44,725.00
     * $95,376  - $182,100      24%     $16,290      +  24% of the amount over $95,375.00
     * $182,101 - $231,250      32%     $37,104      +  32% of the amount over $182,100.00
     * $231,251 - $578,125      35%     $52,832      +  35% of the amount over $231,250.00
     * $578,126 - ...           37%     $174,238.25  +  37% of the amount over $578,125.00
     *
     */

    // Net Income Calculation
    let netIncome = income - michiganIncomeTax - oasdiTax - medicareTax - federalTax;
    let netIncomeFormatted = formatCurrency(netIncome);

    // Toggle visibility of netDemoDiv first
    // Always set the display to block when the function runs
    var netDemoDiv = document.getElementById("netdemo");
    netDemoDiv.style.display = "block";

    // Then update the display elements only when netDemoDiv is visible
    document.getElementById("incomeProvided").innerHTML = "<strong>Gross Income:</strong> " + incomeFormatted;
    document.getElementById("michiganTax").innerHTML = "<strong>Michigan Income Tax:</strong> " + michiganIncomeTaxFormatted;
    document.getElementById("oasdiTax").innerHTML = "<strong>OASDI Withholdings:</strong> " + oasdiTaxFormatted;
    document.getElementById("medicareTax").innerHTML = "<strong>Medicare Withholdings:</strong> " + medicareTaxFormatted;
    document.getElementById("federalTax").innerHTML = "<strong>Federal Income Tax:</strong> " + federalTaxFormatted;
    document.getElementById("netIncome").innerHTML = "<strong>Net Income:</strong> " + netIncomeFormatted;
}
