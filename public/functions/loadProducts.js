import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { collection, getDocs, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { query, orderBy, limit, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyBpWNyh3gJB_0ObrqKhzSQhuctGJKhy8zo",
  authDomain: "better-uy.firebaseapp.com",
  projectId: "better-uy",
  storageBucket: "better-uy.appspot.com",
  messagingSenderId: "148970078549",
  appId: "1:148970078549:web:1cf447200b89c16962efdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db, collection, getDocs, Timestamp, addDoc };
export { query, orderBy, limit, where, onSnapshot };

    function obtenerProductos() {
        debugger;
        var productosContainer = document.getElementById("all-products");
        var db = firebase.firestore();

        db.collection("productos").get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    var producto = doc.data();

                    // Crear los elementos para mostrar el producto
                    var divProduct = document.createElement("div");
                    divProduct.classList.add("product");

                    var imgProduct = document.createElement("img");
                    imgProduct.src = producto.image;
                    imgProduct.alt = producto.name;

                    var divProductInfo = document.createElement("div");
                    divProductInfo.classList.add("product-info");

                    var h4ProductTitle = document.createElement("h4");
                    h4ProductTitle.classList.add("product-title");
                    h4ProductTitle.textContent = producto.name;

                    var aProductBtn = document.createElement("a");
                    aProductBtn.href = "product-btn";
                    aProductBtn.textContent = "Más información";

                    // Agregar los elementos creados al contenedor principal
                    divProductInfo.appendChild(h4ProductTitle);
                    divProductInfo.appendChild(aProductBtn);

                    divProduct.appendChild(imgProduct);
                    divProduct.appendChild(divProductInfo);

                    productosContainer.appendChild(divProduct);
                });
            })
            .catch(function (error) {
                console.error("Error al obtener los productos: ", error);
            });
    }

    // Llamar a la función para obtener y mostrar los productos cuando se cargue la página
    window.onload = function () {
        obtenerProductos();
    };