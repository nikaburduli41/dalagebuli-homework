//1//

function App(props){
  let areyou = ''
  if(props.age >= 30){
    areyou = 'experinced'
  }else if(props.age < 29){
    areyou = 'young'
  }
  return(
    <div style={{
      backgroundColor:props.bColor
      ,color:'gray'
      ,textAlign:'center'
      ,borderRadius:'15px'
    }}>
        <h1>you are {areyou}</h1>
        <h1>your name {props.name}</h1>
        <h1>your age {props.age}</h1>
        <h1>where you live {props.city}</h1>
        <h1>your fav color {props.bColor}</h1>
    </div>
  )
}
export default App