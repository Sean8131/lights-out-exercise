import Cell from "./Cell";
import { useState } from "react";

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
      {array.map((e, rowIndex) => {
        // console.log("printing a row");
        return (
          <div>
            {e.map((f, cellIndex) => {
              function toggleLights() {
                currentCell = [rowIndex, cellIndex];
                console.log(currentCell);
                
              newArray = [...array];  
              newArray[rowIndex][cellIndex] = true;
                setArray(newArray);
                console.log(newArray);
                // if (currentCell == [rowIndex, cellIndex]) {
                //   isOn = false;
                  // 
              }
              // console.log("Printing a cell");
              return (
                <Cell isOn={f} key={cellIndex} toggleLights={toggleLights} />
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
