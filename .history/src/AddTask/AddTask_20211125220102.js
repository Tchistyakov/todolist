//import clouseX from "../ClouseX/ClouseX";
import { useState, useEffect} from "react";

function AddTask() {

const [todos, setTodos] = useState([])

    // let inputValue = document.querySelector("input").value;
    // let id = "d" + +new Date();

    return (
        <>
            <div>
                <input type="checkbox" />
                <label></label>
            </div>
            <div>
                <span class="x">❌</span>
            </div>
        </>
    )

}

export default AddTask

// let list = `
    //       <div>
    //         <input type="checkbox">
    //         <label>${inputValue}</label>
    //       </div>
    //       <div>
    //         <span class="x" onclick='clouseX("${id}")'>❌</span>
    //       </div>`;

    // let li = document.createElement("li");
    // li.id = id;
    // li.className = "li";
    // li.innerHTML = list;
    // document.getElementById("todo").appendChild(li);
    // document.getElementById("input").value = "";