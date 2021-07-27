// Link to activate Vue in the inspector
Vue.config.devtools = true;

// Variable start Vue
const root = new Vue({
    el: "#root",
    data: {
        message: "Benvenuto!",
        firstName: "",
        lastName: "",
        age: "",
        citizenship: "",
        residency: "",
        address: "",
        profession: "",
        image: "./user-img.png",
        visibility: "d-none",
    },
    methods: {
        generateCard() {
            this.visibility = "d-block"
        }
    }
});
