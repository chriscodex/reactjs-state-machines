import './styles.css';
import { useMachine } from '@xstate/react';
import { BookingMachine } from '../../machines/BookingMachine';

function BaseLayout() {
  const [state, send] = useMachine(BookingMachine);

  console.log(state.matches('search'));
  return (
    <div className='BaseLayout'>
      <p>BaseLayout</p>
    </div>
  );
}

export { BaseLayout };
