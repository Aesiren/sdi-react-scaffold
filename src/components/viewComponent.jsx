
function ViewComponent(props) {
  let item = props;

  return (
    <>
      {item.drinkName}
      <img src={item.image} />

    </>
  )
}

export default ViewComponent;