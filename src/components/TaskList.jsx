import { useEffect, useState } from "react"
import { TaskComponent } from "./TaskComponent"
import { TaskForm } from "./TaskForm"

export function TaskList() {

    const tareasPorDefecto = [
        { texto: 'Tarea ejemplo incompleta, haga click para completarla.', completada: false },
    ]

    const [tareas, setTareas] = useState(tareasPorDefecto)

    useEffect(() => {
        console.log('Una tarea fue modificada')
    }, [tareas])

    const agregaTarea = (tarea) => {
        const tareasNuevas = [...tareas]
        tareasNuevas.push(tarea)
        setTareas(tareasNuevas)
    }

    const eliminarTarea = (tarea) => {
        const indexTarea = tareas.indexOf(tarea)
        const tareasNuevas = [...tareas]
        tareasNuevas.splice(indexTarea, 1)
        setTareas(tareasNuevas)
    }

    const completarTarea = (tarea) => {
        const indexTarea = tareas.indexOf(tarea)
        const tareasNuevas = [...tareas]
        tareasNuevas[indexTarea].completada = !tareasNuevas[indexTarea].completada
        setTareas(tareasNuevas)
    }

    return (
        <div className="contenedor-principal">
            <TaskForm
                agregarTarea={agregaTarea}
            />
            <div>

                {
                    tareas.length > 0 ? (
                        tareas.map((tarea, index) => {
                            return (
                                <TaskComponent
                                    key={index}
                                    tarea={tarea}
                                    completada={completarTarea}
                                    eliminar={eliminarTarea}
                                />
                            )
                        })
                    ) :
                    (
                        <h1 className="texto-principal">No hay tareas para mostrar</h1>
                    )
                }

            </div>
        </div>
    )
}
