import { Select, Input, Grid, Button, Header, Icon } from 'semantic-ui-react';
import Tasks from './Tasks';

export default function taskContent(props) {

    const { tasks,deleteTask } = props;

    //en caso de no tener datos el component no se muestra
    if (tasks.length === 0) {
        return null;
    }



    return (
        <Grid className="tasks-content">
            <Header as="h2" icon textAlign="center">
                <Icon name="settings" />
                Administra tus tareas
            </Header>
            <Grid.Row>
                {tasks.map((task, index) => (
                    <Tasks task={task} key={index} deleteTask={deleteTask}/>
                ))}
            </Grid.Row>
        </Grid>
    )
};
