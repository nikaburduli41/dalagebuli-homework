//2//
function Hello(props){
    let helo = 'hello'
    if(props.city === 'paris'){
        helo = 'bonjour'
    }else if(props.city === 'tbilisi'){
        helo = 'salami'
    }else if(props.city === 'new york'){
        helo = 'hi'
    }

    return(
        <div>
            <h1>you are in this city {props.city} {helo}</h1>
            <h1>you are {props.age} year old</h1>
            <h1>your name is {props.name}</h1>
        </div>
    )
}
export default Hello