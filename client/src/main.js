import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).mount('#app')


// import { fetchData } from "./app.js";

// const appDiv = document.getElementById("app");

// fetchData()
//   .then((data) => {
//     console.log(data);
//     appDiv.innerText = `Hello World! Data from server: ${JSON.stringify(data)}`;
//   })
//   .catch((error) => {
//     console.error(error);
//     appDiv.innerText = "Failed to fetch data from server!";
//   });