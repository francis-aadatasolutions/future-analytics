import { HeadlessCreateInferencer } from "@refinedev/inferencer/headless";
import { GetServerSideProps } from "next";

export default function CategoryCreate() {
  return <HeadlessCreateInferencer />;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  return {
    props: {},
  };
};
