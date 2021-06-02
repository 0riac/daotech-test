import React, { useState } from 'react';
import { connect } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import TextField from '@material-ui/core/TextField';
import { styled } from '@material-ui/styles';
import { addTask } from '../../redux/taskActions';

const TASK_NAME_CHAR_LIMIT = 50;
const MIN_TASK_NAME = 2;

const AddTaskContent = styled('div')({
  display: 'flex',
  padding: '8px 0 8px 0',
  alignItems: 'center',
});

const TextWrapper = styled('div')({
  margin: '0 0 0 12px',
  textAlign: 'left',
  color: '#3f51b5'
});

const AddTaskWrapper = styled(Button)(() => ({
  width: '100%',
  textTransform: 'none',
  justifyContent: 'left',
  paddingLeft: '14px'
}));

const AddTaskFormWrapper = styled('div')({  
  display: 'flex',
  alignItems: 'center',
  background: '#FFF',
  paddingLeft: '6px'
})

const AddTaskFormContent = styled('div')({
  padding: '16px 0 16px 8px',
  display: 'flex',
  alignItems: 'center',
  flex: 1
})

const TextFieldWrapper = styled(TextWrapper)(({ withLabel }) => ({
  width: '100%',
  flex: 1,
  display: 'flex',
  justify: 'space-between',
  marginTop: withLabel ? '-16px' : 0,
  '& div': {
    flex: 1
  }
}))

const DoneButton = styled('div')({
  display: 'flex',
  alignSelf: 'stretch',
  margin: '0 0 0 16px'
})

const AddTaskFrom = ({ addTask, onFocus, onBlur }) => {
  const [taskName, $taskName] = useState('');
  const [lengthLimitError, $lengthLimitError] = useState(false);

  return (
    <AddTaskFormWrapper>
      <AddTaskFormContent>
        <RadioButtonUncheckedIcon style={{ color: '#9d9d9d' }} />
        <TextFieldWrapper withLabel={lengthLimitError}>
          <TextField 
            autoFocus 
            onChange={({ target: { value }}) => {
              if (value.length <= TASK_NAME_CHAR_LIMIT) {
                $lengthLimitError(false);
              } else {
                $lengthLimitError(true);
              }
              $taskName(value);
            }}
            label={lengthLimitError ? `Length range >${MIN_TASK_NAME} and <${TASK_NAME_CHAR_LIMIT}` : ''}
            error={lengthLimitError}
          />
        </TextFieldWrapper>
      </AddTaskFormContent>
      <DoneButton onClick={() => {
        if (taskName.length < MIN_TASK_NAME || taskName.length > TASK_NAME_CHAR_LIMIT) {
          $lengthLimitError(true);
        } else {
          addTask(taskName)
        }}}
      >
        <Button>
          <DoneOutlinedIcon style={{ color: '#9d9d9d' }} />
        </Button>
      </DoneButton>
    </AddTaskFormWrapper>

  )
}

const AddTask = ({ addTask }) => {
  const [showForm, $showForm] = useState();

  return (
    <>
    <Divider />
      {showForm ? 
        <AddTaskFrom 
          addTask={(taskName) => $showForm(false) || addTask(taskName)} 
        />
       : null}
      <Divider />
      <AddTaskWrapper onClick={() => $showForm((state) => !state)}>
        <AddTaskContent>
          {showForm ? (
            <>
              <CloseOutlinedIcon color='primary' />
              <TextWrapper>Close</TextWrapper>
            </>
          ) : (
            <>
              <AddIcon color='primary'/>
              <TextWrapper>Add a task</TextWrapper>
            </>
          )}
        </AddTaskContent>
      </AddTaskWrapper>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addTask: (taskName) => dispatch(addTask({ taskName }))
});

export default connect(null, mapDispatchToProps)(AddTask);
