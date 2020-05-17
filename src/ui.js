class UI {
    constructor() {
        this.post = document.querySelector('#posts');
        this.titleInput = document.querySelector('#title');
        this.bodyInput = document.querySelector('#body');
        this.idInput = document.querySelector('#id');
        this.postSubmit = document.querySelector('.post-submit');
        this.postCancelEdit= document.querySelector('.post-cancel');
        this.formState = 'add';
    }

    //Show all posts
    showPosts(posts) {
        let output = '';
        for(let i = posts.length - 1; i >= 0; i--) {
            output +=  `
            <div class="card mb-3">
             <div class="card-body">
             <h4 class="card-title">${posts[i].title}</h4>
                <p class="card-text">${posts[i].body}</p>
                <a href="#" class="edit card-link" data-id="${posts[i].id}">
                    <i class="fas fa-pencil-alt"></i>
                </a>

                <a href="#" class="delete card-link" data-id="${posts[i].id}">
                    <i class="fas fa-trash-alt"></i>
                </a>
             </div>
            </div>
            `;
        };


        this.post.innerHTML = output

    }


    //Show alert message
    showAlert(message, className) {
        this.clearAlert();
        //Create div
        const div = document.createElement('div');
        //Add classes
        div.className = className;
        //Add text
        div.appendChild(document.createTextNode(message));
        //Get parent
        const container = document.querySelector('.postsContainer');
        //Get posts
        const posts = document.querySelector('#posts');
        //Insert
        container.insertBefore(div, posts);
        //Timeout
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    //Clear alert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if(currentAlert) {
            currentAlert.remove();
        }

    }
    //Clear all fields
    clearFields() {
        this.titleInput.value = '';
        this.bodyInput.value = '';

    }

    //Fill form to edit
    fillForm(data) {
        this.titleInput.value = data.title;
        this.bodyInput.value = data.body;
        this.idInput.value = data.id;
        this.changeFormState('edit');
    }

    //Clear Id hidden value
    clearIdInput() {
        this.idInput.value = '';
    }

    //Change the form state
    changeFormState(type) {
        if(type === 'edit') {
            this.postSubmit.textContent = 'Update Post';
            this.postSubmit.className = 'btn btn-warning btn-block post-submit';
            this.postCancelEdit.className = 'post-cancel btn btn-light btn-block show';

        } else {
            this.postSubmit.textContent = 'Post It';
            this.postSubmit.className = 'btn btn-primary btn-block post-submit';
            //Remove cancel button if it is there
            if(this.postCancelEdit){
                this.postCancelEdit.className = 'post-cancel btn btn-light btn-block hide';
            }
            //Clear Id from hidden field
            this.clearIdInput();
            //Clear text
            this.clearFields();

        }
    }
}

export const ui = new UI();