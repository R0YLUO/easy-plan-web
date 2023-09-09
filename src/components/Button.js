const Button = (props) => {
  return (
    <button className="btn btn-neutral ml-10 mr-10" style={{ width: '150px' }}>{props.name}</button>
  )
}

export default Button