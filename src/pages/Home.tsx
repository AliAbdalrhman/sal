import useProfileQuery from "../hooks/useProfileQuery";

function Home() {
  const { data } = useProfileQuery();
  return (
    <>
      <div>{data?.data?.data?.first_name}</div>
    </>
  );
}

export default Home;
