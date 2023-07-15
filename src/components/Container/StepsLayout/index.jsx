import './styles.css';
import { Welcome } from '../../Welcome';
import { Search } from '../../Search';
import { Tickets } from '../../Tickets';
import { Passengers } from '../../Passengers';

function StepsLayout({ state, send }) {
  const renderContent = () => {
    if(state.matches('initial')) return <Welcome send={send}/>;
    if(state.matches('search')) return <Search state={state} send={send}/>;
    if(state.matches('tickets')) return <Tickets send={send} context={state.context}/>;
    if(state.matches('passengers')) return <Passengers state={state} send={send}/>;
    return null;
  };

  return <div className="StepsLayout">{renderContent()}</div>;
}

export { StepsLayout };
