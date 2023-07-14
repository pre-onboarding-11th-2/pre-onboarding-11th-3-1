import { StyledAd } from "../styles/components";

type AdProps = {
  aHref: string;
  imgSrc: string;
};

const Ad: React.FC<AdProps> = ({ aHref, imgSrc }) => {
  return (
    <a href={aHref} target="_blank" rel="noopener noreferrer">
      <StyledAd>
        <img src={imgSrc} alt="ad_image" />
      </StyledAd>
    </a>
  );
};

export default Ad;
