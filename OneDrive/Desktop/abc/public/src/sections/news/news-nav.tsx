import {
  Box,
  Container,
  LinkBaseProps,
  List,
  ListItem,
  Link as MUILink,
  styled,
} from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Seo } from 'src/components/seo';
import { paths } from 'src/paths';
import Types from 'src/store/constants/news';
import { rootReducersState } from 'src/store/reducers';
import { neutral, orange } from 'src/theme/colors';
import { INewsRecord } from 'src/types/news';

interface ILinkProps extends LinkBaseProps {
  selectedNavItems: boolean;
}
interface INewsNav {
  setNewsCategoryId?: (value: number) => void;
  newsCategoryId?: number;
}

const NewsNav = (props: INewsNav) => {
  const { setNewsCategoryId, newsCategoryId } = props;
  const [selectedNavItem, setSelectedNavItem] = React.useState(0);
  const router = useRouter();
  const newsNavList = useSelector((state: rootReducersState) => state?.news?.newsNav);
  const dispatch = useDispatch();
  useEffect(() => {
    if (newsCategoryId !== null) {
      setSelectedNavItem(newsCategoryId!);
    }
    dispatch({
      type: Types.GET_NEWS_NAV_LIST_REQUEST,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newsCategoryId]);

  const handleLinkClick = (item: number) => {
    if (item !== null) {
      setSelectedNavItem(item);
      setNewsCategoryId && setNewsCategoryId(item);
    }
    if (newsCategoryId !== null) {
      router.push(`${paths.news}?newsCategory=${item}`);
    }
  };
  return (
    <>
      <Seo title="News" />

      <Box sx={{ background: neutral[300] }}>
        <Container maxWidth="xl">
          <List sx={{ display: 'flex', gap: 2, py: 2 }}>
            {newsNavList.map((item: INewsRecord, index) => (
              <ListItem
                key={`${item.label}_${index}`}
                disablePadding
                sx={{ width: 'auto' }}
              >
                <Box mx={1}>
                  <StyledNavLink
                    underline="none"
                    selectedNavItems={selectedNavItem === item.id}
                    variant={selectedNavItem === item.id ? 'caption' : 'body1'}
                    color="text-secondary"
                    onClick={() => handleLinkClick(item?.id)}
                    sx={{
                      color: selectedNavItem === item.id ? orange.dark : 'text.primary',
                    }}
                  >
                    {item.label}
                  </StyledNavLink>
                </Box>
                {index !== newsNavList.length - 1 && (
                  <VerticalBar>
                    <VerticalBarLine />
                  </VerticalBar>
                )}
              </ListItem>
            ))}
          </List>
        </Container>
      </Box>
    </>
  );
};

export default NewsNav;

const StyledNavLink = styled(MUILink)<ILinkProps>(({ theme, selectedNavItems }) => ({
  marginX: theme.spacing(1),
  textDecoration: 'none',
  cursor: 'pointer',
  position: 'relative',
  fontWeight: selectedNavItems ? 'bold' : 'normal',
  color: selectedNavItems ? orange.dark : 'text.primary',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 20,
    left: 0,
    width: '100%',
    textDecoration: 'none',
    borderRadius: 15,
    height: 3,
    backgroundColor: selectedNavItems ? orange.dark : 'transparent',
    transition: 'background-color 0.8s ease',
  },
}));

const VerticalBar = styled(Box)`
  position: relative;
  width: 1px; /* Adjust the width of the bar as needed */
  height: 1.5rem; /* Adjust the height of the bar as needed */
`;

const VerticalBarLine = styled(Box)`
  position: absolute;
  top: 0;
  left: 55%;
  width: 2px; /* Adjust the width of the line as needed */
  height: 1.5rem; /* Adjust the height of the line as needed */
  background-color: black; /* Adjust the color of the line as needed */
`;
