import { Button, Container, VStack } from "@chakra-ui/react";
import axiosInstance from "../api";
import { useInfiniteQuery } from "@tanstack/react-query";

import QuestionSkeleton from "../components/QuestionSkeleton";
// import Questions from "../components/Questions";
import QuestionCard from "../components/QuestionCard";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function getQuestions(page: number) {
  return axiosInstance.get<never, QuestionsResponse>("/questions", {
    params: {
      page,
    },
  });
}

function HomePage() {
  const { ref, inView } = useInView({
    rootMargin: "0px 0px 200px 0px",
  });
  // const [page, setPage] = useState(1);
  // const { data, isLoading } = useQuery({
  //   queryKey: ["questions", page],
  //   queryFn: () => getQuestions(page),
  // });

  useEffect(() => {
    if (inView && hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [inView]);

  const { data, isLoading, fetchNextPage, hasNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: ["questions"],
      queryFn: ({ pageParam }) => getQuestions(pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage, _, lastPageParam) => {
        const isLastPage =
          Math.ceil(lastPage.meta.total / lastPage.meta.per_page) ===
          lastPageParam;
        if (isLastPage) {
          return undefined;
        }
        return lastPageParam + 1;
      },
    });

  return (
    <>
      <Container maxW="container.md" py="8" px="10px">
        {isLoading ? (
          <QuestionSkeleton />
        ) : (
          <VStack spacing="6">
            {data?.pages.map((page: any) => {
              return page.data.map((question: Question) => (
                <QuestionCard key={question.id} question={question} />
              ));
            })}

            {hasNextPage && (
              <Button opacity="0" ref={ref}>
                Load More
              </Button>
            )}
          </VStack>
        )}
      </Container>
    </>
  );
}

export default HomePage;
