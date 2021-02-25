// Virtual Pages
const Home = { template: `<h1> Home </h1>`}
const About = { template: `<h1> About </h1>`}

const app = new Vue({
    el:'#app',
    router,
    data: {
        message: ''
    }
})