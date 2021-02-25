const Notes = {
    data: function () {
        return {
            notes: []    
        }
    },
    mounted: function () {
        db.collection('notes')
            .onSnapshot(snapshot => {
                const data = []
                snapshot.forEach(doc => data.push({
                    id: doc.id,
                    title: doc.data().title,
                    text: doc.data().text
                }))
                
                this.notes = data 
            })
    },
    template: `
    <section class="row">
        <div class="col-12 d-flex  justify-content-end">
            <router-link to="/new" class="btn btn-outline-secondary">+</router-link>
        </div>
        <div class="col-12">
            <h1 class="display-4"> Notes</h1>
        </div>
        <div class="col-12">
            <ul class="list-group">
                <li class="list-group-item" v-for="note in notes">
                    <!-- Example: router link go to : /notes/id -->
                    <router-link class="text-secondary text-decoration-none" :to="'/note/' + note.id">{{ note.title }}</router-link>
                </li>
            </ul>
        </div>
    </section>
    `
}