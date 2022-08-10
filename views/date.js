module.exports = getDate;

function getDate() {

  let today = new Date();
  // se va a calcular si es un fin de semana

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", options);
  //el anterior codigo me trae el nombre del día, el mes y el valor del día

  return day;
}
