import { FC } from 'react';
import {
  Box,
  Flex,
  Heading,
  Icon,
  LinkBox,
  LinkOverlay,
  ListItem,
  OrderedList,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { BsArrowUpRight } from 'react-icons/bs';
import { DEVELOPER_DAO_WIKI } from '../../utils';
import { HomePage } from '../../types';

type PurposeProps = Pick<HomePage, 'values' | 'mission' | 'goals'>;

const Purpose: FC<PurposeProps> = ({ values, mission, goals }) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  values = [
    {
      id: 1,
      name: 'Tech for public good',
      title: 'Tech for public good',
      description: 'Tech for public good',
    },
    {
      id: 2,
      name: 'Openness and Transparency',
      title: 'Openness and Transparency',
      description: 'Building in public, open source and collaborative.',
    },
    {
      id: 3,
      name: 'Community First',
      title: 'Community First',
      description: 'Equal opportunity to participate in the ecosystem. build for the community, by the community',
    }
  ];
  goals = [
    {
      id: 1,
      name: 'To build community, discuss, debate at the intersection of web3 and Ai technology.',
      title: 'To build community, discuss, debate at the intersection of web3 and Ai technology.',
      description: 'To build community, discuss, debate at the intersection of web3 and Ai technology.',
    },
    {
      id: 2,
      name: 'To build, support and scale new ventures at this intersection.',
      title: 'To build, support and scale new ventures at this intersection.',
      description: 'To build, support and scale new ventures at this intersection.',
    }
  ];
  const { t } = useTranslation();
  const valuesListStyle = {
    counterReset: 'values',
    marginLeft: '2.3rem',
    'li::marker': {
      content: 'counter(values) "   "',
    },
    li: {
      counterIncrement: 'values',
      margin: '2rem 0',
    },
  };
  const goalsListStyle = {
    counterReset: 'goals',
    marginLeft: '2.3rem',
    'li::marker': {
      content: 'counter(goals) " - "',
    },
    li: {
      counterIncrement: 'goals',
      margin: '1rem 0',
    },
  };

  const getValuesItem = (title: string, body: string) => {
    return (
      <Box flexDir="column">
        <Text
          variant={isMobile ? 'normal' : 'large'}
          fontWeight="bold"
          mb="1rem"
        >
          {t(title)}
        </Text>
        <Text variant={isMobile ? 'normalMobile' : 'normal'}>{t(body)}</Text>
      </Box>
    );
  };

  return (
    <Flex justify="center" wrap="wrap-reverse">
      <Box className="box-border" flex="3" minW={isMobile ? '100%' : '20rem'}>
        <Heading variant={isMobile ? 'mediumMobile' : 'medium'}>
          {/* {t('values.title')} */}
          Values
        </Heading>
        <OrderedList sx={valuesListStyle}>
          {values?.map((value) => (
            <ListItem key={value.id}>
              {getValuesItem(value.title, value.description)}
            </ListItem>
          ))}
        </OrderedList>
      </Box>
      <Flex
        className="box-border"
        flex="2"
        justifyContent="space-between"
        alignItems="center"
        flexDir="column"
        minW={isMobile ? '100%' : '20rem'}
      >
        <Box>
          <Box mb="4.4rem">
            <Text
              variant="normal"
              fontSize={isMobile ? 'md' : 'lg'}
              fontWeight="bold"
              mb="0.9rem"
            >
              {/* {t('mission.title')} */}
              Mission
            </Text>
            <Text variant={isMobile ? 'normalMobile' : 'normal'}>
              AI3 exist to build a better future with the merging of AI and Web3
            </Text>
          </Box>
          <Box mb="3.4rem">
            <Text variant="large" fontWeight="bold" mb="1rem">
              {/* {t('goals.title')} */}
              Goals
            </Text>
            <OrderedList sx={goalsListStyle}>
              {goals?.map((goal) => (
                <ListItem key={goal.id}>
                  <Text variant={isMobile ? 'normalMobile' : 'normal'}>
                    {t(goal.description)}
                  </Text>
                </ListItem>
              ))}
            </OrderedList>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};
export default Purpose;
