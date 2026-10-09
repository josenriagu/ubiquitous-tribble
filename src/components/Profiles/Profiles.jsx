import ExternalLink from '../ExternalLink';
import { profileList } from './profileList';
import { ProfileList } from './Profiles.styled';

const Profiles = () => {
  return (
    <ProfileList aria-label="Profiles">
      {profileList.map((profile) => (
        <li key={profile.name}>
          <ExternalLink href={profile.href}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {profile.icon.map((d) => (
                <path key={d} d={d} />
              ))}
            </svg>
            {profile.name}
          </ExternalLink>
        </li>
      ))}
    </ProfileList>
  );
};

export default Profiles;
