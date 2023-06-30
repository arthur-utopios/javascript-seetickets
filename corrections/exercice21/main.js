function searchBankHolidays() {
  let year = $("#year").val();

    if(year === '') {
        $('<p>ERREUR DE SAISIE</p>')
        .css('color', 'red')
        .fadeIn()
        .fadeOut(3000)
        .appendTo('body')
        return;
    }

  $.ajax({
    url: `https://calendrier.api.gouv.fr/jours-feries/metropole/${year}.json`,
    method: "get",
    dataType: "json",
  }).done((days) => {
    console.log(days);
    for (const [index, value] of Object.entries(days)) {
      $(`<li>${index} - ${value} </li>`).appendTo("#days");
    }
  });
}

$("#send").on("click", (e) => {
  e.preventDefault();
  searchBankHolidays();
});


function is_numeric(str){
    return /^\d+$/.test(str);
}