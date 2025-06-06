import database from "./firebase";
import { ref, get, remove, push } from "firebase/database";

const dbRef = ref(database, "/bikes");

const getAllBikes = () => {
  return get(dbRef);
};

const addBike = (brand, model) => {
  return push(dbRef, {
    brand: brand,
    model: model
  });
};

const removeBike = (key) => {
  const dbRefBike = ref(database, `/bikes/${key}`);
  return remove(dbRefBike);
};

export default {
  getAllBikes,
  addBike,
  removeBike,
};