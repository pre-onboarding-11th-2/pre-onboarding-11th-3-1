import { StyledUserAvatar } from "../styles/components";

type UserAvatarProps = {
  url: string;
};

const UserAvatar: React.FC<UserAvatarProps> = ({ url }) => {
  return (
    <StyledUserAvatar>
      <img src={url} alt="user-avatar" />
    </StyledUserAvatar>
  );
};

export default UserAvatar;
