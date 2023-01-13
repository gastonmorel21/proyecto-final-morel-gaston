import {
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
  addDoc,
} from "firebase/firestore/lite";
import { db } from "../db/db";

const getAllProducts = async () => {
  try {
    const productsCol = collection(db, "productos");
    const productsSnapshot = await getDocs(productsCol);
    const productsList = productsSnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return productsList;
  } catch (err) {
    console.warn({ err });
  }
};

const getSingleProduct = async (id) => {
  try {
    const docRef = doc(db, "products", id);
    const sigleProduct = await getDoc(docRef);
    return sigleProduct.data();
  } catch (err) {
    console.warn({ err });
  }
};

const getSingleOrder = async (id) => {
  try {
    const docRef = doc(db, "orders", id);
    const sigleOrder = await getDoc(docRef);
    return {
      id: sigleOrder.id,
      ...sigleOrder.data(),
    };
  } catch (err) {
    console.warn({ err });
  }
};

const createOrder = async (order) => {
  try {
    const docRef = collection(db, "orders");
    const createdOrder = await addDoc(docRef, order);
    return {
      id: createdOrder.id,
      ...order,
    };
  } catch (err) {
    console.warn({ err });
  }
};

const productActions = {
  getAllProducts,
  getSingleProduct,
};

const orderActions = {
  createOrder,
  getSingleOrder,
};

export { productActions, orderActions };

