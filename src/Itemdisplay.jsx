import Divider from "@material-ui/core/Divider";
import { databaseRef } from "./firebase-config";

export default function Itemdisplay({ list }) {
  const onDelete = (e) => {
    let doc_id = e.target.parentElement.getAttribute("doc");
    databaseRef.collection("mobiles")
      .doc(doc_id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

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
        <div key={item.id}>
          <div className="row-item" doc={item.id}>
            <p className="item-name">{item.name}</p>
            <p className="item-desc">{item.description}</p>
            <p className="item-price">{item.price}</p>
            <p className="item-quantity">{item.quantity}</p>
            <img src={item.image} alt="item" className="item-img-url"></img>
            <button onClick={(e) => onDelete(e)} className="delete-button">
              Delete
            </button>
          </div>
          <Divider style={{ backgroundColor: "rgb(185 147 247)" }} />
        </div>
      ))}
    </div>
  );
}
