import {
  ChristmasVideoStyled,
  VideoButtonStyled,
  VideoStyled,
  VideoSubTitleStyled,
  VideoTextStyled,
  VideoTitleStyled,
} from "./styled";

const videoUrl =
  "https://xcdn.next.co.uk/COMMON/Items/Default/Default/Videos/Initial-soft-launch-christmas-animation-desktop.mp4";
export const ChristmasVideo = () => {
  return (
    <ChristmasVideoStyled>
      <VideoStyled src={videoUrl} muted autoPlay loop />
      <VideoTextStyled>
        <VideoTitleStyled>Christmast advent Calendar</VideoTitleStyled>
        <VideoSubTitleStyled>
          The countdown to christmas has begun! Unlock your daily letter to be
          in with a chance to win £5,000 to spen with Next*
        </VideoSubTitleStyled>
      </VideoTextStyled>
      <VideoButtonStyled>Play Now</VideoButtonStyled>
    </ChristmasVideoStyled>
  );
};
