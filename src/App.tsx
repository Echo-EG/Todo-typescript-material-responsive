import React, {ChangeEvent, useState} from 'react';
import {Button, Container, Grid, makeStyles, TextField, Typography} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import {useDispatch} from "react-redux";
import {addTodoAsync} from "./redux/slice";
import TodoList from "./components/TodoList";

const useStyles = makeStyles({
    textField: {
        minWidth: '100%',
    }
})
const App = () => {

    const classes = useStyles();

    const [title, setTitle] = useState<string>('');

    const handleInput = (event: ChangeEvent<HTMLInputElement>) =>{
        setTitle(event.target.value)
    }

    const dispatch = useDispatch();

    const addTask = () =>{
        dispatch(addTodoAsync({title:title}))
    }

    return (
        <div>
            <Container maxWidth='md'>
                <Typography color='primary' variant='h3' align='center'>Todo-list Typescript</Typography>
                <Grid container alignItems='center' justifyContent="space-between" spacing={4}>
                    <Grid item md={10} sm={10} xs={12}>
                        <TextField className={classes.textField} label='Stuff todo' type='text'  onChange={handleInput} value={title}/>
                    </Grid>
                    <Grid item md={2} sm={2}>
                        <Button fullWidth color='secondary' variant='contained' size='large' onClick={addTask}>Add<AddIcon/> </Button>
                    </Grid>
                </Grid>
            </Container>
            <TodoList/>
        </div>
    );
};

export default App;