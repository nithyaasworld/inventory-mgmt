export default function Itemdisplay({ list }) {
  return (
    <div className="item-display-container">
      <div className="row-item">
        <p className="item-name table-header">Name</p>
        <p className="item-desc table-header">Description</p>
        <p className="item-price table-header">Price</p>
        <p className="item-quantity table-header">Quantity</p>
        <p className="item-img-url table-header">Image</p>
      </div>
      {list.map((item) => (
        <div key={item.name} className="row-item">
          <p className="item-name">{item.name}</p>
          <p className="item-desc">{item.description}</p>
          <p className="item-price">{item.price}</p>
          <p className="item-quantity">{item.quantity}</p>
          <img src={item.image} alt="item" className="item-img-url"></img>
          <button className="delete-button">Delete</button>
        </div>
      ))}
    </div>
  );
}
