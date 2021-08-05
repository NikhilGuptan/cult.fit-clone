var Alert = new CustomAlert();
function CustomAlert ()
{
    this.render = function ()
    {
        //Show Modal
        let popUpBox = document.getElementById( 'popUpBox' );
        popUpBox.style.display = "block";
    }
}
function hide ()
{
    document.getElementById( 'popUpBox' ).style.display = "none";
    document.getElementById( 'popUpOverlay' ).style.display = "none";
}