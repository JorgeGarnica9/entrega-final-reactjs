// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, getDocs, collection, query, where, addDoc,updateDoc, writeBatch, } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0Wgo6-N8sMgC7ppyMun8Jy4TaUwnyiS4",
  authDomain: "jg-games-d7d79.firebaseapp.com",
  projectId: "jg-games-d7d79",
  storageBucket: "jg-games-d7d79.appspot.com",
  messagingSenderId: "537052244411",
  appId: "1:537052244411:web:408f194ef8b90b02a2fc9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//obtener un producto
export async function getSingleProduct(id) {
  const documentRef = doc(db, 'products', id);

  try {
    const snapshot = await getDoc(documentRef);
    if (snapshot.exists()) {
      return snapshot.data();
    } else {
      console.log('El documento no existe!');
    }
  } catch (error) {
    console.error('Error al obtener el documento: ', error);
  }
}

//obtener toda una coleccion
export async function getProducts() {
  try {
    const querySnapshot = await getDocs(collection(db, 'products'));
    if (querySnapshot.size !== 0) {
      const productsList = querySnapshot.docs.map((docu) => {
        return {
          id: docu.id,
          ...docu.data(),
        };
      });
      return productsList;
    } else {
      console.log('Coleccion vacía !');
    }
  } catch (error) {
    console.error('Error al obtener el documento: ', error);
  }
}

//filtros de categoria
export async function filterProductsByCategory(categoryId) {
  try {
    const filteredQuery = query(
      collection(db, 'products'),
      where('category', '==', categoryId)
    );
    const querySnapshot = await getDocs(filteredQuery);
    if (querySnapshot.size !== 0) {
      const productsList = querySnapshot.docs.map((docu) => {
        return {
          id: docu.id,
          ...docu.data(),
        };
      });
      return productsList;
    } else {
      console.log('Coleccion vacía !');
    }
  } catch (error) {
    console.error('Error al obtener el documento: ', error);
  }
}

//enviar una nueva orden de pedido
export async function sendOrder(order) {
  const ordersCollection = collection(db, 'orders');

  try {
    const docRef = await addDoc(ordersCollection, order);
    console.log('Nueva orden generada: ' + docRef.id);
    return docRef.id;
  } catch (error) {
    console.log('Error al agregar el documento: ' + error);
  }
}

//actualizacion de un producto
export async function updateProduct(id, toUpdate) {
  const itemRef = doc(db, 'products', id);
  try {
    await updateDoc(itemRef, toUpdate);
  } catch (error) {
    console.log('Error de actualizacion: ' + error);
  }
}

