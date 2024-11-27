import Cell from "./Cell";
import { useState } from "react";
import './Board.css';

function Board() {
  //   const lightsArray = Array(3)
  //     .fill(true)
  //     .map(() => Array(3).fill(true));
  // console.log(lightsArray);

  const [array, setArray] = useState ([
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ]);
  //console.log(array);

  return (
    <div>
      {array.map((e, columnIndex) => {
        // console.log("printing a row");
        return (
          <div className='main-board'>
            {e.map((f, rowIndex) => {
              function toggleLights() {
                currentCell = [columnIndex, rowIndex];
                console.log(currentCell);
                
              newArray = [...array]; 
              updatedArray = [[rowIndex - 1], [rowIndex +1], [columnIndex - 1], [columnIndex + 1]] 
              
              const [ leftCell, rightCell, topCell, bottomCell ] = updatedArray;
               
              newArray[updatedArray] == true ? newArray[updatedArray] = false : newArray[updatedArray] = true;
              

              // newArray[columnIndex+1][rowIndex] == true ? newArray[columnIndex+1][rowIndex] = false : newArray[columnIndex+1][rowIndex] = true;
              //   setArray(newArray);
              //   console.log(newArray);
        
              }
              // console.log("Printing a cell");
              return (
                <Cell isOn={f} key={rowIndex} toggleLights={toggleLights} />
              );
              })}
          </div>
        );
      })}
    </div>
  );
}

export default Board;

// Next steps
// Button should call toggleLights
// toggleLights should update randomArray
// Pass a row and column to toggleLights
// If you have row and column, you can update the array
// Clicking on a button should update the true or false of the corresponding element of the array
// Setting to true is not good
// Update the data, not the display
