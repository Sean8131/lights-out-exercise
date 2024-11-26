import Cell from "./Cell";

function Board() {
  //   const lightsArray = Array(3)
  //     .fill(true)
  //     .map(() => Array(3).fill(true));
  // console.log(lightsArray);

  const randomArray = [
    [true, false, true, false, true],
    [false, false, true, false, false],
    [false, false, true, false, false],
    [false, false, true, false, false],
    [false, false, true, false, false],
  ];
  //console.log(randomArray);

  return (
    <div>
      {randomArray.map((e, index) => {
        console.log("printing a row");
        return (
          <div>
            {e.map((f, indexT) => {
              console.log("Printing a cell");
              return <Cell isOn={f} key={indexT} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Board;
