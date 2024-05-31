import { Container, Text, VStack, Heading, Box, Image, Link, useColorMode, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Index = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4}>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        <Box boxSize="sm">
          <Image src="/images/blog-image.jpg" alt="Blog Image" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Dive into my thoughts, experiences, and stories. Explore various topics that interest me and hopefully, you too.
        </Text>
        <Link href="/about" color="teal.500" fontSize="lg">
          Learn more about me
        </Link>
        <Link href="/add-post" color="teal.500" fontSize="lg">
          Add a new post
        </Link>
        {posts.map((post, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" width="100%">
            <Heading fontSize="xl">{post.title}</Heading>
            <Text mt={4}>{post.content}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;