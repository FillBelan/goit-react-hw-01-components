import PropTypes from 'prop-types';
import {
  TitleStyle,
  SectionStyle,
  StatListStyle,
  StatItemStyle,
  StatItemLabel,
  StatItemPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <SectionStyle>
      <TitleStyle>{title}</TitleStyle>
      <StatListStyle>
        {stats.map(stat => (
          <StatItemStyle key={stat.id}>
            <StatItemLabel>{stat.label}</StatItemLabel>
            <StatItemPercentage> {stat.percentage}%</StatItemPercentage>
          </StatItemStyle>
        ))}
      </StatListStyle>
    </SectionStyle>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};
