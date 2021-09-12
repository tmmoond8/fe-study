import * as NotionUI from 'notion-ui';
import styled from '@emotion/styled';

const StyledAside = styled(NotionUI.Aside)`
  background-color: ${NotionUI.colors.backgroundAside};
`;

export default function Aside() {
  return (
    <StyledAside visible>
      <NotionUI.Content.Text fontSize={16}>인기 글</NotionUI.Content.Text>
      <NotionUI.Content.Text fontSize={12}>궁시렁 구시렁</NotionUI.Content.Text>
      <NotionUI.Content.Text fontSize={12}>어쩌구 저쩌구</NotionUI.Content.Text>
    </StyledAside>
  );
}
