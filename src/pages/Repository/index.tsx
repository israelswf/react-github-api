import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { Header, RepositoryInfo } from './styles';
import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/dashboard">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="x" alt="Rocketseat" />
          <div>
            <strong>rocketseat/unform</strong>
            <p>desc</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>14564</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>14564</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>14564</strong>
            <span>Issues</span>
          </li>
        </ul>
      </RepositoryInfo>
    </>
  );
};

export default Repository;
