import './styles.css';
import { Welcome } from '../../Welcome';

function StepsLayout() {
  const renderContent = () => {
    return <Welcome />;
  };

  return <div className="StepsLayout">{renderContent()}</div>;
}

export { StepsLayout };
