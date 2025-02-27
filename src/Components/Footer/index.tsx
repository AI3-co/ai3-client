import {
  Box,
  ButtonGroup,
  Image,
  Link as ChakraLink,
  SimpleGrid,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC, ReactNode, useCallback } from 'react';
import { FaDiscord, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';
import { IconOpenSea } from '../OpenSea';
import { Footer, Media, Link, SocialLinkName } from '../../types';
import { NEXT_PUBLIC_CMS_URL } from '../../utils';
import { TFunction, useTranslation } from 'next-i18next';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'md'} mb={6}>
      {children}
    </Text>
  );
};

const listLinks = (links: Link[], translate: TFunction) => {
  return (
    <>
      {links?.map((link) => {
        return (
          <ChakraLink
            key={link.id}
            // textDecoration="underline"
            fontSize="1.3rem"
            // color="#C3C3C3"
            _hover={{ textDecoration: 'underline' }}
            href={link.link}
            isExternal
          >
            {translate(link.title) as any}
          </ChakraLink>
        );
      })}
    </>
  );
};

type FooterProps = {
  data: Footer;
};

const Footer: FC<FooterProps> = ({ data: footer }) => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  footer = {
    id: 1,
    // @ts-ignore
    logo: null,
    // @ts-ignore
    useful_links: [],
    // @ts-ignore
    discover: [],
    social: [
      {
        id: 1,
        name: 'twitter',
        title: 'Twitter',
        // @ts-ignore
        type: null,
        link: 'https://twitter.com/ai3_dao',
        disabled: false,
      },
      {
        id: 2,
        name: 'github',
        title: 'Github',
        // @ts-ignore
        type: null,
        link: 'https://github.com/AI3-co',
        disabled: false,
      },
      {
        id: 3,
        name: 'discord',
        title: 'Discord',
        // @ts-ignore
        type: null,
        link: 'https://discord.gg/ztWZ6UjuuS',
        disabled: false,
      }
    ],
  }

  // // todo: use when footer would have logo-light/dark
  // const getLogoSrc = useCallback(
  //   (logo?: Media) =>
  //     logo?.provider === 'local'
  //       ? `${NEXT_PUBLIC_CMS_URL}${logo?.url}`
  //       : logo?.url,
  //   [],
  // );

  const getSocialIcon = useCallback(
    (name: SocialLinkName) => {
      return {
        twitter: <FaTwitter aria-label="Twitter" />,
        discord: <FaDiscord aria-label="Discord" />,
        github: <FaGithub aria-label="Github" />,
        youtube: <FaYoutube aria-label="Youtube" />,
        opensea: (
          <IconOpenSea color={colorMode === 'dark' ? 'white' : 'black'} />
        ),
      }[name];
    },
    [colorMode],
  );

  return (
    <Box pt="6rem" pb="5.875rem" width="100%">
      <SimpleGrid
        templateColumns={{
          md: '1fr',
          lg: '3fr 1fr 1fr 1fr',
        }}
        spacing={{ base: 10, md: 16 }}
      >
        <Stack>
          <ChakraLink href="/" display="flex" alignItems="center">
            <Image
              width="5rem"
              h="5rem"
              // src={`/D_D_logo-${colorMode === 'dark' ? 'dark' : 'light'}.svg`}
              src={`/logo_${colorMode === 'dark' ? 'dark' : 'light'}.png`}
              alt="logo"
            />
            <Text
              ml={'1.25rem'}
              mr={{ base: '0', md: '3rem' }}
              fontWeight="bold"
              fontSize="1.7rem"
              color={colorMode === 'dark' ? '#FFFFFF' : '#000000'}
            >
              {/* AI3 */}
            </Text>
          </ChakraLink>
        </Stack>

        <Stack align={'flex-start'} paddingTop="1.4375rem">
          {/* <ListHeader>Useful Links</ListHeader> */}
          {listLinks(footer?.useful_links!, t)}
        </Stack>
        <Stack align={'flex-start'} paddingTop="1.4375rem">
          {/* <ListHeader>Discover</ListHeader> */}
          {listLinks(footer?.discover!, t)}
        </Stack>
        <Stack align={'flex-start'} paddingTop="1.4375rem">
          <ListHeader>Social</ListHeader>
          <ButtonGroup>
            {footer?.social?.map((link) => (
              <ChakraLink key={link.id} target={'_blank'} href={link.link}>
                {getSocialIcon(link.name as SocialLinkName)}
              </ChakraLink>
            ))}
          </ButtonGroup>
          {/* <NextLink href="https://vercel.com" passHref>
            <ChakraLink bg="black" borderRadius="20%" mt="2rem !important">
              <Image src="https://raw.githubusercontent.com/nextauthjs/next-auth/canary/www/static/img/powered-by-vercel.svg" />
            </ChakraLink>
          </NextLink> */}
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;
