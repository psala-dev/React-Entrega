import { useEffect, useState } from "react"
import { ItemDetail } from "./ItemDetail";
import { pedirItemPorId } from "../helpers/pedirDatos";
import { useParams } from "react-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {
      
const docRef = doc(db, "productos", id);
getDoc(docRef)
.then((resp) => {
  setItem(
    { ...resp.data(), id: resp.id }
  )
})
    }, [id])
    

  return (
    <div>
        {item && <ItemDetail item={item} />}
        </div>
  )
}
