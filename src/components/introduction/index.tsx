import {
  BlockTextStyled,
  ContentBlockStyled,
  ContentStyled,
  CosmeticImageStyled,
  FeatureImageStyled,
  ImageFeatureStyled,
  ImagesBlockStyled,
  RightButtonStyled,
  RightSideStyled,
  RightTextStyled,
  VideoContentStyled,
  VideoStyled,
} from "./styled";
import casmetic from "../../assets/cosmetic-image.png";
import girlImage from "../../assets/girl-image.png";
import socksImage from "../../assets/socks-image.png";
import flatImage from "../../assets/flat-image.png";
import { Slide } from "../slide";
import { ChristmasVideo } from "../christmas-video";

export const Introduction = () => {
  const videoUrl =
    "https://xcdn.next.co.uk/COMMON/Items/Default/Default/Videos/Gifitng-1-7x3-1.7MB.mp4";

  return (
    <ContentStyled>
      <ContentBlockStyled>
        <BlockTextStyled>
          Less than 2 weeks to go for delivery in time for Christmas. Order now
          for next week delivery
        </BlockTextStyled>
      </ContentBlockStyled>
      <VideoContentStyled>
        <VideoStyled src={videoUrl} muted autoPlay loop />
      </VideoContentStyled>
      <ImageFeatureStyled>
        <FeatureImageStyled src={girlImage} />
        <FeatureImageStyled src={socksImage} />
        <FeatureImageStyled src={flatImage} />
      </ImageFeatureStyled>
      <ImagesBlockStyled>
        <div>
          <CosmeticImageStyled src={casmetic} />
        </div>
        <RightSideStyled>
          <RightTextStyled>
            Give the Gift of beauty this Christmas
          </RightTextStyled>
          <RightButtonStyled>Shop all beauty Gifts</RightButtonStyled>
        </RightSideStyled>
      </ImagesBlockStyled>
      <Slide />
      <ChristmasVideo />
    </ContentStyled>
  );
};
