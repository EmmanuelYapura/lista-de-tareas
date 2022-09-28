import '../stylesheets/TaskComponent.css'

export function TaskComponent({ tarea, completada, eliminar}){

    const tareaCompletaBgc = {
        backgroundColor: '#D0B8A8'
    }

    const tareaIncompletaBgc = {
        backgroundColor: '#DFD3C3'
    }

    const tareaCompletaTexto = {
        textDecoration: 'line-through' 
    }

    const tareaIncompletaTexto = {
        textDecoration: 'none' 
    }

    return (
        <div className='contenedor-task-component' style={tarea.completada ? tareaCompletaBgc : tareaIncompletaBgc }>
            <div onClick={() => completada(tarea)}  className="contenedor-texto" >
                <p style={tarea.completada ? tareaCompletaTexto : tareaIncompletaTexto}>{tarea.texto}</p>
            </div>
            <i id='eliminar' onClick={() => eliminar(tarea)} className="bi bi-x-circle-fill"></i>
        </div>
    )
}
