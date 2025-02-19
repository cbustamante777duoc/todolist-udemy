import { Grid, Header, Icon, Button, Segment, Label } from "semantic-ui-react";

export default function Tasks(props) {

    const { task, deleteTask} = props;
    const { idTask, taskName, categoryTask } = task;

    if (task.length === 0) {
        return null;
    }


    return (
        <Grid.Column width={8} className="task-container">
            <Segment>
                {categoryTask && (
                    <Label color="teal" ribbon="right">
                        {categoryTask}
                    </Label>
                )}

                <Header as="h3" className="header-task">
                    {taskName}
                </Header>

                <Grid centered columns={2}>
                    <Grid.Column >
                        <Button color="red"
                            onClick={ ()=> deleteTask(idTask)}>
                            <Icon name="remove circle" />Eliminar
                        </Button>
                    </Grid.Column>
                </Grid>

            </Segment>

        </Grid.Column>
    )
};
