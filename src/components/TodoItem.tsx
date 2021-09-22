import React, {ChangeEvent, useState} from 'react';
import {ITask} from "../interface";
import {Button, Checkbox, Container, Grid, makeStyles, TextField} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {useDispatch} from "react-redux";
import {deleteTodoAsync, editTodoAsync, toggleCompleteAsync} from "../redux/slice";

const useStyles = makeStyles({
    editField: {
        minWidth: '80%',
    }
})


const TodoItem = ({id, title, checked}: ITask) => {

    const classes = useStyles();

    const [edit, setEdit] = useState<string>(title)

    const handleEditInput = (event:ChangeEvent<HTMLInputElement>) =>{
        setEdit(event.target.value)
    }

    const dispatch = useDispatch();

    const handleDeleteClick = () => {
        dispatch(deleteTodoAsync({id}))
    }

    const handleCompleteClick = () => {
        dispatch(toggleCompleteAsync({id, checked: !checked, title}))
    }

    const handleEditClick = () => {
        dispatch(editTodoAsync({id, title: edit, checked}))
    }


    return (
        <div>
            <Container maxWidth='md'>
                <Grid container alignItems='center' justifyContent="space-between" spacing={4}>
                    <Grid item md={8} sm={6} xs={12}>
                        <Checkbox onChange={handleCompleteClick} checked={checked}/>
                        <TextField className={classes.editField} type='text' onChange={handleEditInput}
                                   value={edit}/>
                    </Grid>
                    <Grid item md={2} sm={3} xs={6}>
                        <Button fullWidth color='primary' variant='contained' size='large'
                                onClick={handleDeleteClick}>Delete<DeleteIcon/></Button>

                    </Grid>
                    <Grid item md={2} sm={3} xs={6}>
                        <Button fullWidth onClick={handleEditClick} color='secondary' variant='contained'
                                size='large'>Edit<EditIcon/></Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default TodoItem;