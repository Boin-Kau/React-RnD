import styled from 'styled-components';
import dummy from './db/FooterData.json';
import FooterItem from './FooterItem';

const size = {
    mobile: '500px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '2560px'
};
export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    desktop: `(max-width: ${size.desktop})`,
};

const Footer = () => {

  return (
    <FooterDiv>
      {dummy.data.map(data => (
        <FooterItem key={data.id} value={data}/>
      ))}
    </FooterDiv>
  )
}

export default Footer;

const FooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 80px;

  border: 1px red solid;

  @media ${device.tablet} {
    flex-direction: column;
    padding: 0 40px;
  }

  @media ${device.mobile} {
    display: none;
  }
`;
