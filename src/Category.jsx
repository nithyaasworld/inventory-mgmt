import { useState } from "react";
import { useEffect } from "react";
import Itemdisplay from "./Itemdisplay";
import { databaseRef, firebaseAuth } from "./firebase-config";
import { Link } from "react-router-dom";

export default function Category({ selectedCat, setSelectedCat }) {
  let categories = ["Mobiles", "Laptops", "Appliances"];
  // let [selectedCat, setSelectedCat] = useState("Mobiles");
  let [mobileList, setMobileList] = useState([]);
  let [laptopList, setLaptopList] = useState([]);
  let [applianceList, setApplianceList] = useState([]);
  let [currList, setCurrList] = useState([]);

  // useEffect(()=>{
  //   if(selectedCat === ""){
  //       // setCurrList(mobileList);
  //       setSelectedCat("Mobiles");
  //   }
  // }, [mobileList]);

  useEffect(() => {
    if (selectedCat === "Mobiles") {
      setCurrList(mobileList);
    } else if (selectedCat === "Laptops") {
      setCurrList(laptopList);
    } else if (selectedCat === "Appliances") {
      setCurrList(applianceList);
    }
  }, [mobileList, selectedCat]);

  useEffect(() => {
    //Getting Mobile List from DB
    databaseRef
      .collection("mobiles")
      .get()
      .then((value) => {
        let mobileListCopy = [];
        value.docs.forEach((doc) => {
          let item = {
            id: doc.id,
            name: doc.data().name,
            description: doc.data().description,
            price: doc.data().price,
            quantity: doc.data().quantity,
            image: doc.data().image,
            doc: doc,
          };
          mobileListCopy.push(item);
        });
        setMobileList(mobileListCopy);
      })
      .catch((err) => console.log(err));

    //Getting Laptop List from DB
    databaseRef
      .collection("laptops")
      .get()
      .then((value) => {
        let laptopList = [];
        value.docs.forEach((doc) => {
          let item = {
            id: doc.id,
            name: doc.data().name,
            description: doc.data().description,
            price: doc.data().price,
            quantity: doc.data().quantity,
            image: doc.data().image,
          };
          laptopList.push(item);
        });
        setLaptopList(laptopList);
      })
      .catch((err) => console.log(err));

    //Getting Appliance List from DB
    databaseRef
      .collection("appliances")
      .get()
      .then((value) => {
        let applianceListCopy = [];
        value.docs.forEach((doc) => {
          let item = {
            id: doc.id,
            name: doc.data().name,
            description: doc.data().description,
            price: doc.data().price,
            quantity: doc.data().quantity,
            image: doc.data().image,
          };
          applianceListCopy.push(item);
        });
        setApplianceList(applianceListCopy);
      })
      .catch((err) => console.log(err));
  }, []);

  const logout = () => {
    console.log("logout clicked");
    firebaseAuth.signOut();
  };

  return (
    <div className="category-container">
      <ul className="category-list">
        {categories.map((item) => (
          <li
            className="category-item"
            key={item}
            onClick={(e) => setSelectedCat(e.target.innerText)}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="secondary-links">
        <Link className="add-an-item" to="/add-item">
          <button className="add-an-item-button">
            Add an item for this category
          </button>
        </Link>
        <Link className="logout-link" onClick={logout} to="/login" >
          Logout
        </Link>
      </div>
      <Itemdisplay list={currList} catName={selectedCat.toLowerCase()} />
    </div>
  );
}
