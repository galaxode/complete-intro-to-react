import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyFirstComponent = React.createClass({
  render: function () {
    return (
        <div>
          <MyTitle title='props are cool' color='rebeccapurple' />
          <MyTitle title='props are cool' color='mediumaquamarine' />
          <MyTitle title='props are cool' color='peru' />
          <MyTitle title='props are cool' color='lightgoldenrodyellow' />
          <MyTitle title='props are cool' color='whitesmoke' />
          <MyTitle title='props are cool' color='tomato' />
        </div>
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
