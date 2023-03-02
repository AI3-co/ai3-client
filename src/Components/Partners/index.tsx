import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  Heading,
  Image,
  Link,
  useColorMode,
} from '@chakra-ui/react';
import { useCallback } from 'react';

import { Media, Partner, StrapiMultipleData } from '../../types';
import { NEXT_PUBLIC_CMS_URL } from '../../utils';
import mainImg from '../../../public/future.png';
import aragonImage from '../../../public/aragon-logo.png';
import openaiImage from '../../../public/openai.png';
import midjourneyImage from '../../../public/midjourney.png';
import copilotImage from '../../../public/copilot.png';

interface PartnersProps {
  data: StrapiMultipleData<Partner>;
}

const Partners = ({ data: partners }: PartnersProps) => {
  const { colorMode } = useColorMode();
  const handleButtonClick = useCallback(() => {
    const partnerFormUrl = 'https://discord.gg/ztWZ6UjuuS';
    window.open(partnerFormUrl, '_blank');
  }, []);
  partners = {
    data: [],
  }
  partners.data = [
    {
      id: 1,
      attributes: {
        id: 1,
        name: 'Developer DAO',
        website: 'https://www.developerdao.com',
        // @ts-ignore
        logo_dark: 'D_D_logo-light.svg',
        // @ts-ignore
        logo_light: 'D_D_logo-light.svg',
      },
    },
    {
      id: 2,
      attributes: {
        id: 1,
        name: 'Aragon',
        website: 'https://aragon.org',
        // @ts-ignore
        logo_dark: 'aragon-logo.png',
        // @ts-ignore
        logo_light: 'aragon-logo.png',
      },
    },
    {
      id: 3,
      attributes: {
        id: 1,
        name: 'OpenAI',
        website: 'https://openai.com',
        // @ts-ignore
        logo_dark: 'openai.png',
        // @ts-ignore
        logo_light: 'openai.png',
      },
    },
    {
      id: 4,
      attributes: {
        id: 1,
        name: 'Midjourney',
        website: 'https://www.midjourney.com/home',
        // @ts-ignore
        logo_dark: 'midjourney-1.png',
        // @ts-ignore
        logo_light: 'midjourney-1.png',
      },
    },
    {
      id: 5,
      attributes: {
        id: 1,
        name: 'Github Copilot',
        website: 'https://github.com/features/copilot',
        // @ts-ignore
        logo_dark: 'copilot.png',
        // @ts-ignore
        logo_light: 'copilot.png',
      },
    }
  ];

  const getLogoSrc = useCallback(
    (logo?: Media) =>
      logo?.provider === 'local'
        ? `${NEXT_PUBLIC_CMS_URL}${logo?.url}`
        : logo?.url,
    [],
  );

  return (
    <Flex flexDir="column" justifyContent="center" pt="5.5rem" pb="5.5rem">
      <Heading
        textTransform={'capitalize'}
        fontFamily="Inter"
        fontWeight="800"
        fontSize="3.375rem"
        mb={{ base: '5rem', xl: '6.175rem' }}
        textAlign="center"
      >
        Building with
      </Heading>
      <Flex flexDir={{ base: 'column', xl: 'row' }} alignItems={'center'}>
        {partners?.data ? (
          partners.data.map((partnerEntity) => {
            return (
              <Link
                href={partnerEntity.attributes.website}
                key={partnerEntity.id}
                mb={{ base: '4rem', xl: '0' }}
                mx={{ base: '0', xl: '3rem' }}
                target="_blank"
              >
                <div style={{
                  width: '220px',
                  height: '220px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  borderRadius: '20%',
                  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
                }}>
                <img
                  loading="lazy"
                  // @ts-ignore
                  src={colorMode === 'dark' ? partnerEntity.attributes.logo_dark : partnerEntity.attributes.logo_light}
                  alt={partnerEntity.attributes.name || 'partner image'}
                />
                </div>
              </Link>
            );
          })
        ) : (
          <></>
        )}
      </Flex>
      <Button
        backgroundColor={colorMode === 'dark' ? 'white' : 'black'}
        color={colorMode === 'dark' ? 'black' : 'white'}
        fontFamily="Inter"
        fontWeight="500"
        fontSize={{ base: '1rem', xl: '1.25rem' }}
        borderRadius="56px"
        px="2rem"
        py="2rem"
        mt={{ base: '5rem', xl: '6.85rem' }}
        alignSelf="center"
        onClick={handleButtonClick}
      >
        Join Us <ArrowForwardIcon w="1.5rem" h={'22px'} ml="8px" />
      </Button>
    </Flex>
  );
};

export default Partners;
