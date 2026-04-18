function Third(props) {
    let hobbyy = 'No Hobby Listed'
    if(props.hobby.length > 1){
        hobbyy = props.hobby
    }
  return (
    <div>
        
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.city}</h1>
      <h1>{props.bgColor}</h1>
      <h1>{hobbyy}</h1>
    </div>
  );
}
export default Third;
