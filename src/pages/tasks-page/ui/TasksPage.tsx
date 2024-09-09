import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import moment from 'moment';
import { Task } from '../../../shared/ui/task';
import { DailyTasks, MainTasks } from '../../../app/mocks/tasks';

export const TasksPage: React.FC = () => {
  const [day, month] = moment().format('Do MMMM').split(' ');
  return (
    <main {...stylex.props(styles.container)}>
      <h1 {...stylex.props(styles.title)}><span {...stylex.props(styles.greenText)}>T - Card</span> Tasks</h1>
      <p {...stylex.props(styles.description)}>Join our community, following and reposts, earn TLS and be a part of Tools T - Card</p>
      <p {...stylex.props(styles.task)}>Daily Tasks: <span {...stylex.props(styles.greenText)}>{day.split('').reduce((a, b) => isNaN(+b) ? a + '' : a + b, '')}</span><span {...stylex.props(styles.lowText)}>{day.split('').reduce((a, b) => isNaN(+b) ? a + b : a + '', '')}</span> {month}</p>
      <div>
        {DailyTasks.map((task) => <Task image={task.logo} isClaimed={task.isClaimed} isCompleted={task.isCompleted} titile={task.title} reward={task.reward} key={task.id} />)}
      </div>
      <p {...stylex.props(styles.task)}>Main Tasks Progress:</p>
      <div>
      {MainTasks.map((task) => <Task image={task.logo} isClaimed={task.isClaimed} isCompleted={task.isCompleted} titile={task.title} reward={task.reward} key={task.id} />)}
      </div>
    </main>
  )
}