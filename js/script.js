
console.log("Test: ", Vue);

// Link to activate vue in the inspector
Vue.config.devtools = true;

const root = new Vue({
    el: "#root",
    data: {
        message: "Benvenuto",
        firstName: "",
        lastName: "",
        age: "",
        citizenship: "",
        residency: "",
        address: "",
        profession: "",

    }
})