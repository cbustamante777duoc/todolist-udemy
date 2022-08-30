import { Select, Input, Grid, Button, Header, Icon } from 'semantic-ui-react';
// import { Select, Input, Button, Grid, Header, Icon } from "semantic-ui-react";
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

const options = [
    { key: "deporte", text: "Deporte", value: "deporte" },
    { key: "casa", text: "Casa", value: "casa" },
    { key: "oficina", text: "Oficina", value: "oficina" },
    { key: "otra", text: "Otra", value: "otra" },
];

export default function InputTask() {
    const [task, setTask] = useState({
        idTask: "",
        taskName: "",
        categoryTask: "",
    });
    const [error, setError] = useState(false);

    /**
     * captura lo que viene en el input taskName
     * @param {e} evento por teclado 
     */
    //[e.target.name] = Input name="taskName"
    const onChangeTask = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value//actualiza
        });
        console.log(task);
    }

    /**
     * recupera el valor del select categoryTask
     * @param {*} e 
     * @param {*} data recupera los valores que estan en el select 
     */
    const onChangeCategory = (e, data) => {
        setTask({
            ...task,
            [data.name]: data.value//actualiza
        });

        console.log(task);


    }

    const onSubmitTask = (e) => {
    
        //evitar recargar la pagina
        e.preventDefault();
        
        //validaciones
        if (task.taskName.trim() ==="") {
            setError(true);
            return;
        }

        //eliminar mensajes de error
        setError(false);

        //asignar id
        task.idTask = uuidv4();
        console.log(`id ${task.idTask}`);


    }


    return (
        <>
            <Grid centered columns={2}>
                <Input type="text" action>
                    <Input
                        size="small"
                        icon="add"
                        placeholder="Escribe tu tarea..."
                        iconPosition="left"
                        name="taskName"
                        value={task.taskName}
                        onChange={onChangeTask}
                    />
                </Input>
                <Select
                    compact
                    options={options}
                    className="select-form-task"
                    name="categoryTask"
                    placeholder="Categoria"
                    value={task.categoryName}
                    onChange={onChangeCategory}
                />
                <Button
                    type="submit"
                    color="violet"
                    onClick={onSubmitTask}>Añadir tarea
                </Button>
            </Grid>
            {error && (
                <Grid centered>
                    <Header
                        as="h4"
                        color="red"
                        className="alert-error-form">
                        <Icon name="close" />
                        <Header.Content>La tares es obligatoria </Header.Content>
                        <Icon name="close" />
                    </Header>
                </Grid>
            )}
        </>
    )
};

