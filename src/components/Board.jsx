import Cell from "./Cell";

function Board() {
  //   const lightsArray = Array(3)
  //     .fill(true)
  //     .map(() => Array(3).fill(true));
  // console.log(lightsArray);

  const randomArray = [
    [true, false, true, false, true],
    [false, false, true, false, false],
    
  ];
  //console.log(randomArray);

  return (
    <div>
      {randomArray
        .map((e, index) => e.map((f, indexT) => {
          console.log(f);
          return <Cell isOn={f} key={indexT} />;
        }))}
    </div>
  );
}

export default Board;
