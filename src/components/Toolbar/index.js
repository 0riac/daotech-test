import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { styled } from '@material-ui/styles';
import { connect } from 'react-redux';
import FilterListIcon from '@material-ui/icons/FilterList';
import Typography from '@material-ui/core/Typography';
import dayjs from 'dayjs';
import { setFilterValue, ALL, COMPLETED, CURRENT } from '../../redux/settingsActions';
import { DONE_TASK, IN_PROCESS_TASK } from '../../redux/taskActions';

const ToolbarWrapper = styled(Paper)(() => ({
  // background: '#3f51b5',
  padding: '32px 8px 14px 14px',
  borderRadius: '4px 4px 0 0',
  display: 'flex',
  background: 'linear-gradient(to right, #7360e7, #1d9eff)'
}));

const LeftWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column'
});

const RightWrapper = styled('div')({
  display: 'flex',
  flex: 1,
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  // marginRight: '14px'
});

const ToolbarLabel = styled(Typography)({
  color: '#FFF'
});

const DateWrapper = styled(Typography)({
  color: '#FFF'
});

const FitlerButton = styled(Button)({
  paddingLeft: '0px',
  paddingRight: '0px',
  minWidth: '48px',
  margin: '0 0 -4px 16px',
});

const FilterInfoLabel = styled(Typography)({
  color: '#FFF'
})

const Toolbar = ({ filterBy, setFilterValue, completedTaskCount, currentTaskCount }) => {
  const [anchorFilterMenu, $anchorFilterMenu] = useState();

  const handleCloseMenu = (e) => {
    if (e.target.value != undefined) setFilterValue(e.target.value);
    $anchorFilterMenu(null);
  }

  const FilterMenu = () => {
    return ( 
      <Menu
        anchorEl={anchorFilterMenu}
        keepMounted
        open={Boolean(anchorFilterMenu)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleCloseMenu} value={ALL}>All</MenuItem>
        <MenuItem onClick={handleCloseMenu} value={COMPLETED}>Completed</MenuItem>
        <MenuItem onClick={handleCloseMenu} value={CURRENT}>Current</MenuItem>
      </Menu>)
  }

  const FilterInfo = () => {
    switch (filterBy) {
      case ALL: {
        return (
          <FilterInfoLabel variant='body2'>
            {completedTaskCount} / {completedTaskCount + currentTaskCount} — All tasks
          </FilterInfoLabel>
        )
      }
      case COMPLETED: {
        return (
          <FilterInfoLabel variant='body2'>
            {completedTaskCount} — Completed tasks
          </FilterInfoLabel>
        )
      }
      case CURRENT: {
        return (
          <FilterInfoLabel variant='body2'>
            {currentTaskCount} — Current tasks
          </FilterInfoLabel>
        )
      }
      default: return null
    }
  }

  return (
    <ToolbarWrapper>
      <FilterMenu />
      <LeftWrapper>
        <ToolbarLabel variant='h4'>TO DO</ToolbarLabel>
        <DateWrapper variant='body2'>
          {dayjs().format('dddd, MMMM D')}
        </DateWrapper>
      </LeftWrapper>
      <RightWrapper>
        <div>
          <FilterInfo />
        </div>
        <FitlerButton size='small' onClick={(e) => $anchorFilterMenu(e.target)}>
          <FilterListIcon style={{ color: '#FFF' }}/>
        </FitlerButton>
      </RightWrapper>      
    </ToolbarWrapper>
  );
}

const mapStateToProps = ({ tasks: { taskList }, settings: { filterBy } }) => ({
  filterBy,
  completedTaskCount: taskList.filter((el) => el.status === DONE_TASK).length,
  currentTaskCount: taskList.filter((el) => el.status === IN_PROCESS_TASK).length,
});

const mapDispatchToProps = (dispatch) => ({
  setFilterValue: (value) => dispatch(setFilterValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
