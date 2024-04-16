import React, { useContext } from "react";
import {
  Box,
  HStack,
  Icon,
  Image,
  Pressable,
  Text,
  VStack,
  Tooltip,
  TooltipContent,
  TooltipText, StarIcon
} from "../../components/ui";
import { ChevronRight, Heart } from "lucide-react-native";
import { AnimatePresence, Motion } from "@legendapp/motion";
import { ScrollView } from "react-native";
import { ThemeContext } from "../../App";

const homestayInfoData = [
  {
    title: "ImageView Inn",
    src: require("../../assets/display/image16.png"),
    location: "401 Platte River Rd, Gothenburg, United States",
    price: "$1,481",
    rating: 4.9,
  },
  {
    title: "Spinner Resort",
    src: require("../../assets/display/image17.png"),
    location: "1502 Silica Ave, Sacramento California",
    price: "$1,381",
    rating: 4.89,
  },
  {
    title: "DropDown Den",
    src: require("../../assets/display/image18.png"),
    location: "2945 Entry Point Blvd, Kissimmee, Florida",
    price: "$2,481",
    rating: 4.6,
  },
];

const tabsData = [
  {
    title: "Tropical",
  },
  {
    title: "Amazing views",
  },
  {
    title: "Caves",
  },
  {
    title: "Mansions",
  },
  {
    title: "Amazing pools",
  },
  {
    title: "Cabins",
  },
  {
    title: "Beachfront",
  },
  {
    title: "Countryside",
  },
  {
    title: "Tiny homes",
  },
  {
    title: "National parks",
  },
];

const HomestayInformationFold = () => {
  return (
    <Box className="pb-8 px-4 md:px-0">
      <HomestayInfoTabs tabsData={tabsData} />
      <TabPanelData />
    </Box>
  );
};

const HomestayInfoTabs = ({ tabsData }: any) => {
  const [activeTab, setActiveTab] = React.useState(tabsData[0]);
  return (
    <Box className="border-b border-outline-50 md:border-b-0 md:border-transparent">
      <Box className="py-5">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HStack space="lg" className="mx-0.5">
            {tabsData.map((tab: any) => {
              return (
                <Pressable
                  key={tab.title}
                  className={`my-0.5 py-1 ${
                    activeTab === tab ? "border-b-[3px]" : "border-b-0"
                  } border-outline-900 hover:border-b-[3px] ${
                    activeTab === tab
                      ? "hover:border-outline-900"
                      : "hover:border-outline-200"
                  } `}
                  onPress={() => setActiveTab(tab)}
                >
                  <Text
                    size="sm"
                    className={`${
                      activeTab === tab
                        ? "text-typography-900"
                        : "text-typography-600"
                    } font-medium`}
                  >
                    {tab.title}
                  </Text>
                </Pressable>
              );
            })}
          </HStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

const TabPanelData = () => {
  const [likes, setLikes]: any = React.useState([]);
  const { colorMode } = useContext(ThemeContext);
  return (
    <VStack className="justify-between lg:flex-row">
      {homestayInfoData.map((image: any, index: any) => {
        return (
          <Box
            key={index}
            className={`flex-1 my-2 lg:my-0 ${
              index === 0 ? "lg:ml-0" : "lg:ml-2"
            } ${index === homestayInfoData.length - 1 ? "lg:mr-0" : "lg:mr-2"}`}
          >
            <Pressable className="w-full">
              {(props: any) => {
                return (
                  <>
                    <Box className="overflow-hidden rounded-md">
                      <Image
                        source={image.src}
                        className={`w-full h-64 ${
                          props.hovered
                            ? "scale-[1.04] opacity-90"
                            : "scale-100 opacity-100"
                        }`}
                        alt="Explore"
                      />
                    </Box>
                    {props.hovered && (
                      <Box className="absolute bg-[#181718] opacity-30 w-full h-full cursor-pointer" />
                    )}
                    <Box
                      className={`absolute top-[45%] bg-transparent rounded border border-white self-center content-center py-1.5 px-4 flex-row ${
                        props.hovered ? "flex" : "hidden"
                      }`}
                    >
                      <Text className="text-white">Explore</Text>
                      <Icon
                        as={ChevronRight}
                        size="sm"
                        className="self-center"
                        color="white"
                      />
                    </Box>
                  </>
                );
              }}
            </Pressable>

            <Pressable
              onPress={() => {
                if (likes.includes(image.title)) {
                  const newLikes = likes.filter(
                    (like: any) => like !== image.title
                  );
                  setLikes(newLikes);
                  return;
                } else {
                  setLikes([...likes, image.title]);
                }
              }}
              className="absolute top-3 right-4 h-6 w-6 justify-center items-center"
            >
              <AnimatePresence>
                <Motion.View
                  key={likes.includes(image.title) ? "liked" : "unliked"}
                  initial={{
                    scale: 1.3,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  exit={{
                    scale: 0.9,
                  }}
                  transition={{
                    type: "spring",
                    mass: 0.9,
                    damping: 9,
                    stiffness: 300,
                  }}
                  style={{
                    position: "absolute",
                  }}
                >
                  <Icon
                    as={Heart}
                    size="lg"
                    fill={likes.includes(image.title) === true ? "red" : "gray"}
                    color={
                      likes.includes(image.title) === true ? "red" : "white"
                    }
                  />
                </Motion.View>
              </AnimatePresence>
            </Pressable>

            <HStack className="justify-between py-2 items-start">
              <VStack space="sm" className="flex-1">
                <Text className="font-semibold text-typography-900">
                  {image.title}
                </Text>
                <Text size="sm" className="text-typography-500">
                  {image.location}
                </Text>
                <HStack>
                  <Text size="sm" className="font-semibold text-typography-900">
                    {image.price}
                  </Text>
                  <Text size="sm" className="pl-1 text-typography-900">
                    night
                  </Text>
                </HStack>
              </VStack>
              <Tooltip
                trigger={(triggerProps: any) => {
                  return (
                    <Pressable {...triggerProps}>
                      <HStack className="items-center flex-start">
                        <Icon
                          as={StarIcon}
                          size="xs"
                          fill={colorMode === "light" ? "#272625" : "#F6F6F6"}
                          color={colorMode === "light" ? "#272625" : "#F6F6F6"}
                        />
                        <Text size="sm" className="pl-1 text-typography-900">
                          {image.rating}
                        </Text>
                      </HStack>
                    </Pressable>
                  );
                }}
              >
                <TooltipContent>
                  <TooltipText className="text-white px-2 py-1">
                    Ratings
                  </TooltipText>
                </TooltipContent>
              </Tooltip>
            </HStack>
          </Box>
        );
      })}
    </VStack>
  );
};
export default HomestayInformationFold;
