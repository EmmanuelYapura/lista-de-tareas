import { useRef } from "react"
import '../stylesheets/TaskForm.css'

export function TaskForm( { agregarTarea } ){
    const textoRef = useRef('')

    const crearTarea = (e) => {
        e.preventDefault()
        const tarea = {
            texto: textoRef.current.value,
        }
        if(tarea.texto){
            agregarTarea(tarea)
            textoRef.current.value = ''
        }else{
            alert('La tarea no puede ser vacia.')
        }
    }

    return(
        <form id="formulario">
            <input ref={textoRef} id='texto' type="text" placeholder="Agregar una tarea"/>
            <i onClick={crearTarea} id='agregar' className="bi bi-plus-square-fill"></i>
        </form>
    )
}
