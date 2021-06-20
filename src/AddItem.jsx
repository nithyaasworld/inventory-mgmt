import { useRef } from "react";
import { databaseRef } from "./firebase-config";

export default function AddItem({selectedCat}){
    let nameRef = useRef();
    let descriptionRef = useRef();
    let priceRef = useRef();
    let quantityRef = useRef();
    let imageURLRef = useRef();

    const onSubmit = () => {
        databaseRef.collection(selectedCat.toLowerCase()).add({
            name: nameRef.current.value,
            description: descriptionRef.current.value, 
            price: priceRef.current.value, 
            quantity: quantityRef.current.value, 
            image: imageURLRef.current.value,
          }).then((addedData) => {
            console.log("successfully added to DB", addedData);
            window.location = '/categories';
          }).catch((e) => {
            console.error('Not able to add data to DB.', e);
          })
    }
    return (
        <div className="add-item-container">
            <label htmlFor="name" >Name: </label>
            <input ref={nameRef} type="text" placeholder="Enter the product name" id="name" name="name"></input>
            <label htmlFor="description">Description: </label>
            <input ref={descriptionRef} type="text" id="description" name="description"></input>
            <label htmlFor="price">Price: </label>
            <input ref={priceRef} type="number" id="price" name="price"></input>
            <label htmlFor="quantity">Quantity: </label>
            <input ref={quantityRef} type="number" id="quantity" name="quantity"></input>
            <label htmlFor="image">Image URL: </label>
            <input ref={imageURLRef} type="text" id="image" name="image"></input>
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}