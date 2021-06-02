import React from 'react';
import AddTask from '../AddTask';
import Task from '../Task';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { changeTaskStatus, removeTask } from '../../redux/taskActions';
import ScrollOver, { AutoScrollOver } from '../ScrollOver';

import { styled } from '@material-ui/styles';

const TaskListItemWrapper = styled('div')(() => ({
  background: '#FFF',
}));

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
})

const ListWrapper = styled('div')({
  maxHeight: '60vh',
  overflowY: 'auto',
  '& ::-webkit-scrollbar': {
    display: 'none'
  },
  '& *':{
    scrollbarWidth: 'none'
  }
})

const TaskList = ({ list = [], changeTaskStatus, removeTask }) => {
  return (
    <Wrapper>
      <ListWrapper>
        <AutoScrollOver>
          <Grid container direction='column'>
            {list.map((props, i) => (
              <Grid key={props.id}  item>
                <TaskListItemWrapper>
                  <Task 
                    {...props} 
                    changeTaskStatus={() => changeTaskStatus(props.id)}
                    removeTask={() => removeTask(props.id)}
                  />
                  {i < list.length - 1 ? <Divider /> : null}
                </TaskListItemWrapper>
              </Grid>
            ))}
          </Grid>
        </AutoScrollOver>
      </ListWrapper>
      <AddTask />
    </Wrapper>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTaskStatus: (id) => dispatch(changeTaskStatus(id)),
    removeTask: (id) => dispatch(removeTask(id))
  };
};

export default connect(null, mapDispatchToProps)(TaskList);
