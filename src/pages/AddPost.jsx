import { useState } from "react";
import { Container, VStack, Heading, Input, Textarea, Button, useToast, useColorMode } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleAddPost = () => {
    if (title && content) {
      const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
      const newPost = { title, content };
      existingPosts.push(newPost);
      localStorage.setItem("posts", JSON.stringify(existingPosts));
      toast({
        title: "Post added.",
        description: "Your new post has been added successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate(-1); // Go back to the previous page
    } else {
      toast({
        title: "Error.",
        description: "Both title and content are required.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
        <Heading as="h1" size="xl">Add New Post</Heading>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          height="200px"
        />
        <Button colorScheme="teal" onClick={handleAddPost}>Add Post</Button>
      </VStack>
    </Container>
  );
};

export default AddPost;