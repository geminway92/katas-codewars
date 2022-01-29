function BankerPlan(f0, p, c0, n, i){
  for(let year = 1; year < n; year++){
    f0 = f0 + (p / 100) * f0 - c0;
    f0 = Math.trunc(f0)
    c0 = c0 + c0 * (p / 100)
    if(f0 < 0) {
      return false;
    }
  }
  return true
}

/**
 * f0: Deposito inicial
 * p: Porcentaje de interés anual
 * c0: Lo que puede retirar al año
 * n: Años que puedes seguir así
 * i: porcentaje
 */


module.exports = BankerPlan;
