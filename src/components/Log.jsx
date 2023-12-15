export default function Log({ turns }) {

    //log icin GameBoard componentdan hangi butona basıldıgı bilgisi gerekiyor. GameBoard içinde state'de tutulan deger App component'a lift edilecek
   
    return (
        <ol id="log">
          {turns.map(turn=><li key={`${turn.square.row}${turn.square.col}`}>{turn.player} selected {turn.square.row}, {turn.square.col}</li>)}
        </ol>
    )
}