// Routes
const routes = [
    { path: '/', name: 'Notes', component: Notes},
    { path: '/new', name: 'New', component: New},
    { path: '/note/:id', name: 'Note', component: Note, props:true}
]

// Router
const router = new VueRouter({
    routes: routes
})