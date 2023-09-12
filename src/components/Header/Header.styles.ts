import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding-bottom: 8px;
  border-bottom: 1px solid #e6ecf0;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  max-width: 800px;
  height: 150px;
  position: absolute;
  top: 0;
`;

export const ProfileContainer = styled.div`
  position: relative;
  margin-top: 100px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const ProfileImageContainer = styled.div`
  height: 95px;
  width: 95px;
  border-radius: 50%;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-bottom: 8px;
`;

export const ProfileImage = styled.img`
  height: 90px;
  width: 90px;
  border-radius: 50%;
`;

export const InfoContainer = styled.div``;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Name = styled.p`
  font-family: "Inter";
  font-weight: 600;
  font-size: 20px;
  margin-right: 4px;
`;

export const Username = styled.p`
  font-family: "Inter";
  font-weight: 300;
  font-size: 14px;
  opacity: 0.8;
  margin-bottom: 6px;
`;

export const Position = styled.p`
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 60px;
  right: 0px;
`;

export const SaveNumber = styled.button`
  display: flex;
  flex-direction: row;
  position: relative;
  display: inline-flex;
  align-items: center;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border-radius: 5px;
  border: 1px solid transparent;
  background-color: #007bff;
  padding: 8px;
`;

export const ShareContact = styled.button`
  display: flex;
  flex-direction: row;
  position: relative;
  display: inline-flex;
  align-items: center;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border-radius: 0.3rem;
  border: 1px solid transparent;
  background-color: #fff;
  margin-left: 8px;
  margin-right: 8px;
  opacity: 0.7;
`;

export const AddContactLabel = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 12px;
  margin-left: 8px;
  color: #ffffff;
`;
