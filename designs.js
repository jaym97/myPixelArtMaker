// variable assignments to select the color picker, form inputs, the pixel canvas and buttons
let selectedColor, selectedHeight, selectedWidth;
selectedColor = $('.color-picker');
selectedWidth = $('.input-width');
selectedHeight = $('.input-height');
const GRID = $('.pixel-canvas');
const SUBMIT_BUTTON = $('#submitButton');
const RESET_BUTTON = $('#reset-button');
// selects the main help icon
const HELP_BUTTON = $('.main-help-icon');
// boolean to check if a pixel canvas has been created
let tableExists = false;

/**
* @description event listener to check for a click on the reset button and resets the grid only if a canvas has already been created
*/
RESET_BUTTON.click(function() {
        !tableExists ? alert('You have not created a canvas yet!') : GRID.find('tbody').remove() && makeGrid();
});
 /**
 * @description event listener to check for a click on the submit button and creates a grid, per the chosen input sizes, then makes the reset button visible
 */
SUBMIT_BUTTON.click(function() {
        if (!tableExists){
                makeGrid()
                document.getElementById('reset-button').style.visibility = 'visible';
        }
        else {
                alert('You have already created a grid!');
        }
});
/**
* @description event listener to check for a click on the main help icon and makes other tooltip icons visible
*/
HELP_BUTTON.click(function() {
        const helpElements = document.getElementsByClassName('help-icon');
        /**
        * @description function to make the other tooltip icons show when the main help icon is clicked
        */
        function makeVisible(){
                for (let i = 0; i < helpElements.length; i++){
                        helpElements[i].style.visibility = 'visible';
                }
        }
        tableExists ? makeVisible() : alert('You have not created a grid yet!');
});
/**
* @description function to create the grid using the height and width chosen by the user
*/
function makeGrid() {
        GRID.append('<tbody></tbody>');
        const GRID_WIDTH = selectedWidth.val();
        const GRID_HEIGHT = selectedHeight.val();
        const GRID_BODY = $('tbody');
        // a for loop to add rows to the grid
        for (let rows = 0; rows < GRID_HEIGHT; rows++){
                GRID_BODY.append('<tr></tr>');
        }
        const GRID_ROWS = $('tr');
        // a for loop to add columns to the rows
        for (let columns = 0; columns < GRID_WIDTH; columns++){
                GRID_ROWS.append('<td></td>');
        }
        // boolean to confirm a grid has been created
        tableExists = true;
}
/**
* @description event listener to check for a click on any of the cells in the grid and then adds the chosen color to it
*/
GRID.on('click', 'td', function() {
        if ($(this).attr('style')){
              $(this).removeAttr('style');
        }
        else {
                $(this).css('backgroundColor', selectedColor.val());
        }
});
/**
* @description event listener to check for a double click on any of the cells in the grid and then removes the color on it
*/
