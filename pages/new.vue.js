const New = {
    data: function(){
        return {
            title: '',
            text: ''
        }
    },
    methods: {
        addNote: function () {
            db.collection('notes').add({
                title: this.title,
                text: this.text
            }).then(doc => router.push({ path: '/'}))
        }
    },
    template: `
    <section class="row">
        <div class="col-12">
            <h1 class="display-4"> New Note </h1>
        </div>
        <div class="col-12">
            <form @submit.prevent="addNote">
                <input type="text" class="form-control my-3" v-model="title" placeholder="Title">
                <textarea class="form-control my-3" v-model="text"></textarea>
                <button class="btn btn-primary mr-3">Add Note</button>
            </form>
        </div>
    </section>
    `
}