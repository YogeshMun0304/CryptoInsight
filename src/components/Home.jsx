import { Box, Image, Text,Stack ,VStack} from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
    <Stack  alignItems={'center'}
          direction={['column', 'row']} justifyContent={"space-evenly"} bgColor={"white"} w={"full"} h={"full"}>
    <Box  w={"30"} h={"full"} className="homecontainer">
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"50"}
          h={"600"}
          objectFit={"contain"}
          src={btcSrc}
          filter={"grayscale(1)"}
        />
      </motion.div>
      </Box>
      <VStack alignItems="flex-start">
      <motion.div
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, type: "spring", stiffness: 120 }}
    >
      
        

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        justifyContent={"center"}
        fontWeight={"thin"}
        color={"purple"}
       
        mr={"30"}
      >
       CryptoInsight
      </Text>
      <Text
        fontSize={"3xl"}
        textAlign={"center"}
        justifyContent={"center"}
        fontWeight={"thin"}
        color={"purplealpha.500"}
       
        mr={"30"}
      >
       Gain valuable insights into the cryptocurrency market
      </Text>
      </motion.div>o
      </VStack>
      </Stack>
    </>
  );
};

export default Home;
