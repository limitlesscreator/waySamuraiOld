export type PostType = {
    message: string
    likesCount: number
    id: number
}
export type DialogType = {
    name: string
    id: number
}
export type MessageType = {
    id: number
    message: string
}

export type StateType = {
    posts: Array<PostType>
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export let state: StateType = {
    posts: [
        {id: 1, message: "hello, how are you", likesCount: 12},
        {id: 2, message: "It's my first applee", likesCount: 152},
        {id: 2, message: "It's my first applee", likesCount: 152},
        {id: 2, message: "It's my first applee", likesCount: 152},
    ],
    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'How"s your day'},
        {id: 3, message: 'Dollars'},
    ],
    dialogs: [
        {id: 1, name: 'Dimich'},
        {id: 2, name: 'Sweta'},
        {id: 3, name: 'Kolya'},
    ],
}