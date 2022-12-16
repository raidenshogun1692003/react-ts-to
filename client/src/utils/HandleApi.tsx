import axios from 'axios'

const baseUrl = "http://localhost:8000/"


interface TodoProps {
    text: String;
    setToDo: any;
    toDoId: Number;
    setText: (open: String) => void;
    setIsUpdating: (open: boolean) => void;
    _id: any;
}
const getAllToDo = ({ setToDo }: TodoProps) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data ---> ', data);
            setToDo(data)
        })
}

const addToDo = ({ text, setText, setToDo }: TodoProps) => {

    axios
        .post(`${baseUrl}/save`, { text })
        .then((data) => {
            console.log(data);
            setText("")
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

const updateToDo = ({ toDoId, text, setToDo, setText, setIsUpdating }: TodoProps) => {

    axios
        .post(`${baseUrl}/update`, { _id: toDoId, text })
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

const deleteToDo = ({ _id, setToDo }: TodoProps) => {

    axios
        .post(`${baseUrl}/delete`, { _id })
        .then((data) => {
            console.log(data)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}


export { getAllToDo, addToDo, updateToDo, deleteToDo }