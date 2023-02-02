import PropTypes from 'prop-types';
import {
  ProfileStyle,
  ImgStyle,
  NameStyle,
  CardStyle,
  DescriptionStyle,
  TagStyle,
  LocationStyle,
  StatsStyle,
  StatsList,
  LabelStyle,
  QuantityStyle,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileStyle>
      <CardStyle>
        <ImgStyle src={avatar} alt={username} class="avatar" />

        <DescriptionStyle>
          <NameStyle>{username}</NameStyle>
          <TagStyle>@{tag}</TagStyle>
          <LocationStyle>{location}</LocationStyle>
        </DescriptionStyle>
      </CardStyle>

      <StatsStyle>
        <StatsList>
          <LabelStyle>Followers</LabelStyle>
          <QuantityStyle> {stats.followers}</QuantityStyle>
        </StatsList>
        <StatsList>
          <LabelStyle>Views</LabelStyle>
          <QuantityStyle> {stats.views}</QuantityStyle>
        </StatsList>
        <StatsList>
          <LabelStyle>Likes</LabelStyle>
          <QuantityStyle> {stats.likes}</QuantityStyle>
        </StatsList>
      </StatsStyle>
    </ProfileStyle>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
