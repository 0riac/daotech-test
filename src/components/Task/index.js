import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles';
import { DONE_TASK } from '../../redux/taskActions';

const TaskContent = styled('div')({
  display: 'flex',
  padding: '8px 0 8px 0',
  alignItems: 'center',
});

const TaskName = styled('div')(({ lineThrough }) => ({
  textDecoration: lineThrough ? 'line-through' : 'inherit',
  margin: '0 0 0 12px',
  textAlign: 'left'
}))

const TaskContentWrapper = styled(Button)(() => ({
  width: '100%',
  textTransform: 'none',
  justifyContent: 'left',
  paddingLeft: '14px'
}));

const TaskWrapper = styled('div')({
  display: 'flex',
})

const RemoveTask = styled(Button)({
  display: 'flex',
  alignItems: 'center',
})

const DoneTask = ({ taskName }) => {
  return (
    <TaskContent>
      <CheckCircleIcon style={{ color: '#6ab200' }}/>
      <TaskName lineThrough>{taskName}</TaskName>
    </TaskContent>
  )
}

const InProcessTask = ({ taskName }) => {
  return (
    <TaskContent>
      <RadioButtonUncheckedIcon style={{ color: '#9d9d9d' }} />
      <TaskName>{taskName}</TaskName>
    </TaskContent>
  )
}

const Task = ({ status, changeTaskStatus, removeTask, state, ...rest }) => {
  return (
    <TaskWrapper>
      <TaskContentWrapper onClick={changeTaskStatus}>
        {status === DONE_TASK ? 
          <DoneTask status={status} {...rest} />   
          : <InProcessTask status={status} {...rest} />}
      </TaskContentWrapper>
      <RemoveTask onClick={removeTask}>
        <DeleteOutlineOutlinedIcon style={{ color: '#9d9d9d' }}/>
      </RemoveTask>
    </TaskWrapper>
  );
}

export default Task;
