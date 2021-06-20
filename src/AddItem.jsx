import { useRef } from "react";
import { databaseRef } from "./firebase-config";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

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
            <TextField inputRef={nameRef} id="standard-basic" label="Product name" />
            <TextField inputRef={descriptionRef} id="standard-basic" label="Description" />
            <TextField inputRef={priceRef} type="number" id="standard-basic" label="Price" />
            <TextField inputRef={quantityRef} type="number" id="standard-basic" label="Quantity" />
            <TextField inputRef={imageURLRef} type="text" id="standard-basic" label="Image URL" />
            <Button onClick={onSubmit} variant="contained" color="primary">Submit</Button>
        </div>
    )
}