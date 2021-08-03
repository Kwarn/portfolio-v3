import React from "react";
import hackerRankImage from "../../assets/hackerrank.jpg";
import edabitImage from "../../assets/edabit.png";
import codingBatImage from "../../assets/codingBat.jpg";
import udemyImage from "../../assets/udemy.png";
import freecodecampImage from "../../assets/freeCodeCamp.png";
import codeCademyImage from "../../assets/codeCademy.png";
import theArtOfReadableCodeImage from "../../assets/theArtOfReadableCode.jpg";
import becomingABetterProgrammerImage from "../../assets/becomingABetterProgrammer.jpg";
import { ExtraInfoContainer, ExtraInfoWrapper } from "./ExtraInfoStyles";

const ExtraInfo = ({ modalHandler }) => {
  const imageWithLink = (image, alt, link) => {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={alt} />
      </a>
    );
  };
  const imageWithModal = (img) => {
    const image = (
      <img
        onClick={() =>
          modalHandler({
            isVisible: true,
            contentArray: [img],
          })
        }
        src={img}
        alt="the art of readable code"
      />
    );
    return image;
  };

  const description = `Playing a pivotal role in improving my problem solving skills, coding challenges have also exposed me to which language features are available and their correct situational usage. 
  
  I'm constantly challenging myself by not just solving the problem but also searching for and understanding the most elegant solutions. 
  
  So far, I've completed all challenges on CodingBat, earned 1800 XP on Edabit solving primarily medium-hard difficulty problems and am currently working through certification on HackerRank.`;

  return (
    <ExtraInfoWrapper>
      <ExtraInfoContainer>
        <h2>Code Challenges</h2>
        <p>{description}</p>
        <hr />
        <h2>Profiles & Resources</h2>
        {imageWithLink(
          hackerRankImage,
          "hackerRank",
          "https://www.hackerrank.com/karlwarner_dev"
        )}
        {imageWithLink(
          edabitImage,
          "edabit",
          "https://edabit.com/user/qgYikiD7WB8JciTdo"
        )}
        {imageWithLink(
          codingBatImage,
          "codingbat",
          "https://codingbat.com/done?user=karlwarner.dev@gmail.com&tag=6083086670"
        )}
        {imageWithLink(
          udemyImage,
          "udemy",
          "https://www.udemy.com/user/karl-warner-5/"
        )}
        {imageWithLink(
          freecodecampImage,
          "freeCodeCamp",
          "https://www.freecodecamp.org/karl_warner"
        )}
        {imageWithLink(
          codeCademyImage,
          "codecademy",
          "https://www.codecademy.com/profiles/Xeptic"
        )}
        <hr />
        {imageWithModal(theArtOfReadableCodeImage)}
        {imageWithModal(becomingABetterProgrammerImage)}
      </ExtraInfoContainer>
    </ExtraInfoWrapper>
  );
};

export default ExtraInfo;
