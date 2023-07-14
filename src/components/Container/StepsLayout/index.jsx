import './styles.css';
import { Welcome } from '../../Welcome';
import { Search } from '../../Search';
import { Tickets } from '../../Tickets';

function StepsLayout({ state, send }) {
  const renderContent = () => {
    return <Tickets state={state} send={send}/>;
  };

  return <div className="StepsLayout">{renderContent()}</div>;
}

export { StepsLayout };
