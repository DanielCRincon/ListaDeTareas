exports.getDate = function() {

  let today = new Date();
  // se va a calcular si es un fin de semana

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return today.toLocaleDateString("en-US", options);
  //el anterior codigo me trae el nombre del día, el mes y el valor del día


}


exports.getDay = function() {

  let today = new Date();
  // se va a calcular si es un fin de semana

  let options = {
    weekday: "long"
  };

return today.toLocaleDateString("en-US", options);
  //el anterior codigo me trae el nombre del día, el mes y el valor del día


}
