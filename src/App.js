import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { TaskList, Toolbar } from './components';
import { styled } from '@material-ui/styles';
import { connect } from 'react-redux';
import { ALL, COMPLETED, CURRENT } from './redux/settingsActions';
import { DONE_TASK, IN_PROCESS_TASK } from './redux/taskActions';

const TaskListWrapper = styled(Paper)(() => ({
  background: 'inherit',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'hidden',
}));

const ContentWrapper = styled(Container)({
  marginTop: '5vh',
  // overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column'
})

const Wrapper = styled('div')({
  height: '100vh',
  display: 'flex',
  overflow: 'hidden',
})

const App = ({ taskList }) => {
  return (
    <Wrapper>
      <ContentWrapper maxWidth="sm">
        <Toolbar />
        <TaskListWrapper>
          <TaskList list={taskList} />
        </TaskListWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const mapStateToProps = ({ tasks: { taskList }, settings: { filterBy } }) => ({
  taskList: (() => {
    if (filterBy == undefined || filterBy === ALL) {
      return taskList;
    }

    if (filterBy === COMPLETED) {
      return taskList.filter((el) => el.status === DONE_TASK)
    }

    if (filterBy === CURRENT) {
      return taskList.filter((el) => el.status === IN_PROCESS_TASK)
    }
  })()
});

export default connect(mapStateToProps)(App);
