function calculateMortgage() {
    var P = parseFloat(document.getElementById("loanAmount").value);
    var annualRate = parseFloat(document.getElementById("annualRate").value);
    var years = parseInt(document.getElementById("loanDuration").value, 10);
    
    if (isNaN(P) || P <= 0) {
      alert("Veuillez entrer un montant de prêt positif.");
      return;
    }
    if (isNaN(annualRate) || annualRate <= 0) {
      alert("Veuillez entrer un taux d'intérêt annuel valide.");
      return;
    }
    if (isNaN(years) || years <= 0) {
      alert("Veuillez entrer une durée de prêt valide en années.");
      return;
    }
    var r = (annualRate / 100) / 12;
    var n = years * 12;
    
    var numerator = P * r * Math.pow(1 + r, n);
    var denominator = Math.pow(1 + r, n) - 1;
    var M = numerator / denominator;
    
    document.getElementById("result").innerText = "Paiement mensuel : " + M.toFixed(2) + " FCFA";
  }