const config = {
    apiKey: "AIzaSyDSEge0CQkRNhEhx-tcIdgIyLdgCW8BgAM",
    authDomain: "images-services-52149.firebaseapp.com",
    databaseURL: "https://images-services-52149.firebaseio.com",
    projectId: "images-services-52149",
    storageBucket: "gs://images-services-52149.appspot.com",
    messagingSenderId: "388061356865"
};

const app = firebase.initializeApp(config);
const storage = app.storage();
const defaultBucket = storage.ref('images');

function handleSubmit(event) {
    event.preventDefault();
    if (!file.value.length) return;
    configCloudStorage(file.files[0]);
}

function configCloudStorage(path) {
    const timer = new Date().getTime();
    const picturePath = "images/image" + timer.toString();
    const storageRef = storage.ref(picturePath);

    const uploadTask = storageRef.put(path);

    uploadTask.on('state_changed', (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: 
                console.log('Upload is paused');
                break;
            case firebase.storage.TaskState.RUNNING:
                console.log('Upload is running');
                break;
        }
    }, (error) => {
        console.log(error);
    }, () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log('File available at', downloadURL);
        });
    });
}