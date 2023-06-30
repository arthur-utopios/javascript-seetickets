$('#clicker').on('click', (e) => {
    e.preventDefault()
    // $('#secret').fadeIn(); Q1
    // $('#secret').slideDown(); Q2
    // $('#secret').fadeToggle(); // Q3

    let transition = $('input[name=transition]:checked').val();
    $('#secret')[transition]();
})