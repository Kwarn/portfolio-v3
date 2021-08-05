import styled from "styled-components";

export const FullProjectWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 600px 1fr;
  grid-template-rows: 150px 1fr 1fr 1fr 1fr;
  color: black;
`;

export const TopLeftGrid = styled.div`
  background-color: white;
  width: 100%;
  height: 150px;
  grid-row: 1/2;
  grid-column: 1/2;
  display: grid;
  grid-template-rows: 50px 40px 60px;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
`;

export const TechIconsContainer = styled.div`
  background-color: white;
  margin: auto;
  width: 80%;
  height: 100%;
  justify-content: center;
  display: flex;
  grid-row: 1/2;
  grid-column: 1/3;
  img {
    height: 30px;
  }
`;

export const LiveDemoHeader = styled.h3`
  margin: auto auto 0 auto;
  grid-column: ${(props) => (props.doBothLinksExist ? "1/2" : "1/3")};
  grid-row: 2/3;
  width: 100%;
  text-align: center;
`;

export const GitHubHeader = styled.h3`
  margin: auto auto 0 auto;
  grid-column: ${(props) => (props.doBothLinksExist ? "2/3" : "1/3")};
  grid-row: 2/3;
  width: 100%;
  text-align: center;
`;

export const GitHubLinksContainer = styled.div`
  grid-row: 3/4;
  grid-column: ${(props) => (props.doBothLinksExist ? "2/3" : "1/3")};
  display: flex;
  flex-direction: row;
  justify-content: center;
  a {
    margin: 5px;
  }
`;

export const LiveDemoLinksContainer = styled.div`
  grid-row: 3/4;
  grid-column: ${(props) => (props.doBothLinksExist ? "1/2" : "1/3")};
  display: flex;
  flex-direction: row;
  justify-content: center;
  a {
    margin: 5px;
  }
`;

export const ProjectImagesContainer = styled.div`
  background-color: #eee;
  grid-row: 1/2;
  grid-column: 2/4;
  margin: auto;
  display: flex;
  justify-content: center;
  min-width: 100%;
  height: 150px;
  overflow: hidden;
`;
export const ProjectImage = styled.img`
  cursor: pointer;
  margin: 10px 2px;
  width: 100%;
  width: ${(props) => `${100 / props.imageCount}%`};
  height: 130px;
  object-fit: cover;
  object-position: top;
`;
export const ViewImages = styled.div`
  background-color: #eee;
  margin: auto;
  text-align: center;
  grid-column: 2/4;
  grid-row: 2/3;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  p {
    padding: 0;
    margin: auto;
    font-size: 20px;
  }
`;

export const DescriptionsContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eee;
  font-size: 20px;
  line-height: 30px;
  grid-column: 1/4;
  grid-row: 2/6;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    margin: auto;
    width: 80%;
  }
  h3 {
    margin: 0 auto;
    width: 80%;
  }
`;
