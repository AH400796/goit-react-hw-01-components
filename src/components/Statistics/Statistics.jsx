import PropTypes from 'prop-types';
import getRandomHexColor from 'utils/randomColor';

import {
  StatisticSection,
  StatisticTitle,
  StatisticList,
  StatisticItem,
  StatisticLabel,
  StatisticPercentage,
} from './Statistics.styled';

export default function Statistics({ stats, title }) {
  return (
    <StatisticSection>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticList>
        {stats.map(({ id, label, percentage }) => {
          const color = getRandomHexColor();
          return (
            <StatisticItem key={id} backgroundColor={color}>
              <StatisticLabel>{label}</StatisticLabel>
              <StatisticPercentage>{percentage}%</StatisticPercentage>
            </StatisticItem>
          );
        })}
      </StatisticList>
    </StatisticSection>
  );
}

Statistics.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
