import { Component } from 'react'
import { connect } from 'react-redux'

import { Todo, fetchTodos, deleteTodo } from '../actions'
import { StoreState } from '../reducers'

interface AppProps {
  todos: Todo[]
  fetchTodos: Function
  deleteTodo: typeof deleteTodo
}

interface AppState {
  fetching: boolean
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    this.state = { fetching: false }
  }

  componentDidUpdate = (previousProps: AppProps) => {
    const todosHaveChanged =
      previousProps.todos.length !== this.props.todos.length
    if (todosHaveChanged) this.setState({ fetching: false })
  }

  render = (): JSX.Element => {
    const { fetching } = this.state
    const { todos } = this.props
    const buildItem = (todo: Todo): JSX.Element => {
      return (
        <li
          key={todo.id}
          onClick={() => this.onTodoClick(todo.id)}
          style={{ cursor: 'pointer' }}
        >
          {todo.title}
        </li>
      )
    }
    const list: JSX.Element[] = todos.map(buildItem)

    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {fetching && <h3>Loading...</h3>}
        {!fetching && <ul>{list}</ul>}
      </div>
    )
  }

  private onButtonClick = () => {
    this.props.fetchTodos()
    this.setState({ fetching: true })
  }

  private onTodoClick = (id: number) => {
    this.props.deleteTodo(id)
  }
}

const mapStateToProps = (state: StoreState) => ({
  todos: state.todos,
})

const mapDispatchToProps = { fetchTodos, deleteTodo }

export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
