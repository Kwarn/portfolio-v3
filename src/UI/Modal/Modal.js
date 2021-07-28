import React, { useEffect, useState } from "react";
import Backdrop from "../Backdrop/Backdrop";
import styled from "styled-components";
import swipeIcon from "../../assets/swipe.png";
import closeIcon from "../../assets/closeIcon.png";
import { useSwipeable } from "react-swipeable";
import documentIcon from "../../assets/document.png";

const StyledModal = styled.div`
  margin-left: 5%;
  transform: ${(props) =>
    props.isShown ? "translateY(0)" : "translateY(-100vh)"};
  opacity: ${(props) => (props.isShown ? "1" : "0")};
  z-index: 500;
  position: fixed;
  background-color: #fff;
  width: 90%;
  height: 100%;
  max-height: 90%;
  top: 5vh;
  padding: 1px;
  box-sizing: border-box;
  transition: all 0.3s ease-in;
`;

const StyledCloseIcon = styled.img`
  z-index: 1000;
  position: absolute;
  top: -35px;
  right: -35px;
  height: 30px;
  width: 30px;
  cursor: pointer;
  @media (max-width: 700px) {
    top: 5px;
    right: 5px;
  }
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: auto;
  height: 100%;
`;

const StyledMainContentWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  text-align: center;
`;

const StyledSwipeIcon = styled.img`
  position: absolute;
  bottom: 5px;
  left: calc(50% - 30px);
  width: 60px;
  height: 60px;
`;

const StyledMainImage = styled.div`
  background-image: url(${({ background }) => background});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: auto;
  /* border: 3px solid #474747 */
`;

const StyledThumbnailWrapper = styled.div`
  margin: auto;
  width: 100%;
  height: fit-content;
  border-top: 2px solid black;
`;

const StyledThumbnail = styled.img`
  border: ${(props) => (props.isFocus ? "2px solid green" : "none")};
  width: 30px;
  height: 30px;
  margin: 5px;
  cursor: pointer;
  @media (min-width: 500px) {
    width: 50px;
    height: 50px;
  }
  @media (min-width: 700px) {
    width: 60px;
    height: 60px;
  }
`;

const Modal = ({ isVisible, closeFn, contentArray = [], startingIndex }) => {
  const [mainContentIndex, setMainContentIndex] = useState(0);
  let thumbnails = [];
  const isMultipleContent = contentArray.length > 1;
  const isContentImage = typeof contentArray[mainContentIndex] === "string";

  // probably shouldn't do this, feels hacky.
  // prevents scrolling of page while modal is open.
  if (isVisible) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  if (contentArray.length > 0) {
    contentArray.forEach((content) => {
      const index = thumbnails.length;
      thumbnails.push(
        <StyledThumbnail
          key={`modal-image-${index}`}
          onClick={() => setMainContentIndex(index)}
          src={typeof content === "object" ? documentIcon : content}
          alt={`modal-${index}`}
          isFocus={mainContentIndex === index}
        />
      );
    });
  }

  const goRight = () => {
    if (mainContentIndex === contentArray.length - 1) {
      setMainContentIndex(0);
    } else {
      setMainContentIndex(mainContentIndex + 1);
    }
  };

  const goLeft = () => {
    if (mainContentIndex === 0) {
      setMainContentIndex(contentArray.length - 1);
    } else {
      setMainContentIndex(mainContentIndex - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => goRight(),
    onSwipedRight: () => goLeft(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const imageResetHelperFn = () => {
    setMainContentIndex(0);
  };

  useEffect(() => {
    if (startingIndex) setMainContentIndex(startingIndex);
  }, [startingIndex]);

  return (
    <>
      <Backdrop
        isShown={isVisible}
        closeFn={closeFn}
        imageResetFn={imageResetHelperFn}
      />
      <StyledModal {...handlers} isShown={isVisible} closeFn={closeFn}>
        <StyledCloseIcon
          onClick={() => {
            imageResetHelperFn();
            closeFn();
          }}
          src={closeIcon}
          alt="close modal"
        />
        <StyledContent>
          <StyledMainContentWrapper>
            <StyledSwipeIcon src={swipeIcon} alt="swiping enabled" />
            {isContentImage ? (
              <StyledMainImage background={contentArray[mainContentIndex]} />
            ) : (
              contentArray[mainContentIndex]
            )}
          </StyledMainContentWrapper>
          {isMultipleContent ? (
            thumbnails ? (
              <StyledThumbnailWrapper>{thumbnails}</StyledThumbnailWrapper>
            ) : null
          ) : null}
        </StyledContent>
      </StyledModal>
    </>
  );
};

export default React.memo(Modal);
