import React from 'react'
import Grid from '../template/Grid'
import IconButton from '../template/IconButton'

export default props => {
  const keyHandler = e => {
    if (e.key === 'Enter') {
      e.shiftKey ? props.handleSearch() : props.handleAdd()
    } else if (e.key === 'Escape') {
      props.handleClear()
    }
  }
  return (
    <div role="form" className="todoForm" style={{ display: 'flex' }}>
      <Grid cols="12 9 10" width="max">
        <input
          id="description"
          className="form-control"
          placeholder="Acidione uma tarefa"
          onChange={props.handleChange}
          value={props.description}
          onKeyUp={keyHandler}
        />
      </Grid>
      <Grid cols="12 3 2" btngrid="btngrid">
        <IconButton style="primary" icon="plus" onClick={props.handleAdd} />
        <IconButton style="info" icon="search" onClick={props.handleSearch} />
        <IconButton style="default" icon="close" onClick={props.handleClear} />
      </Grid>
    </div>
  )
}
