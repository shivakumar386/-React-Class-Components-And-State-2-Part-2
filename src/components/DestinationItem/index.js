import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <li className="destination-item">
      <img src={imgUrl} alt={name} className="destination-image" />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem

// const DestinationItem = props => {
//   const {destinationsList} = props
//   const {name, imgUrl} = destinationsList
//   return (
//     <li>
//       <img src={imgUrl} alt="city" />
//       <p>{name}</p>
//     </li>
//   )
// }

// export default DestinationItem
