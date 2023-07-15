import './styles.css';
import { useMachine } from '@xstate/react';
import { BookingMachine } from '../../../machines/BookingMachine';
import { Nav } from '../../Nav';
import { StepsLayout } from '../StepsLayout';

function BaseLayout() {
  const [state, send] = useMachine(BookingMachine);

  return (
    <div className='BaseLayout'>
      <Nav state={state} send={send} />
      <StepsLayout state={state} send={send}/>
    </div>
  );
}

export { BaseLayout };
