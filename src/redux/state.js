let rerenderEntireTree = () =>{

};

let state = {
    dialogPage:
    {
        messageData: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'hi how are you'},
            {id: 3, message: 'hi are you'},
            {id: 4, message: 'hi Tow'},
            {id: 5, message: ' bbbb'}
        ],
        dialogsData: [
            {id: 1, name: "Dima"},
            {id: 2, name: "Tom"}
        ]
    },
    profilePage:
    {
        posts: [
            { id: 1, message: 'How are you guys?', likeСount:6 },
            { id: 2, message:'Look at me!!!', likeСount: 5}
        ],
        placeholderPost:'click and write!'
    }

};

window.state = state;

export const addPost = (postMessage) => {
    let newPost ={
        id: 5,
        message: postMessage,
        likeСount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};

export const updateNewPostText = (newPost) => {
    state.profilePage.placeholderPost = newPost;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
 rerenderEntireTree = observer;  // патерн наблюдатель
};


export default state;