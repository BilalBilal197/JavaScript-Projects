//initialize Github class

const github = new Github;

//init UI class

const ui = new UI;


// Search InputDeviceInfo

const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e)=>{
    //Get input text
    const userText = e.target.value;

    if(userText !== ''){
        // Make http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                //show aler
                URL.showAlert('User not found', 'alert alert-danger');
            } else {
                // show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    } else {
        // clear the profile
        ui.clearProfile();
    }
})
