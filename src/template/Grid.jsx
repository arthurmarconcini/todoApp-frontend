import React, { Component } from 'react'

export default class Grid extends Component {
  toCssClasses(numbers) {
    const cols = numbers ? numbers.split(' ') : []
    let classes = ''

    if (cols[0]) classes += `col-xs-${cols[0]}`
    if (cols[1]) classes += `col-sm-${cols[1]}`
    if (cols[2]) classes += `col-md-${cols[2]}`
    if (cols[3]) classes += `col-lg-${cols[3]}`

    return classes
  }

  tamanho(width) {
    if (width) {
      return '100%'
    } else {
      return ''
    }
  }

  espaco(width) {
    if (width) {
      return '2em'
    } else {
      return ''
    }
  }

  render() {
    const btngrid = this.props.btngrid ? 'btn-grid' : ''
    const gridClasses = this.toCssClasses(this.props.cols || 12)
    const width = this.tamanho(this.props.width)
    const margin = this.espaco(this.props.width)

    return (
      <div
        style={{ width: width, marginRight: margin }}
        className={`${gridClasses} ${btngrid}`}
      >
        {this.props.children}
      </div>
    )
  }
}
