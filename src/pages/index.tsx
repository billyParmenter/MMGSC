import { Text } from "@chakra-ui/react";
import Head from "next/head";
import { DashboardShell } from "../core";
import { useAtms } from "@/atms/hooks/useAtms";
import { useAids } from "@/aids/hooks/useAids";

export default function Home() {
  // const { aids, isLoading: aidsIsLoading } = useAids();
  // const { atms, isLoading: atmsIsLoading } = useAtms();

  // if (aidsIsLoading || atmsIsLoading) {
  //   return <Text>Loading</Text>;
  // }

  return (
    <>
      <Head>
        <title>Transaction Search</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mmgsc.png" />
      </Head>
      <main>
        {/* <DashboardShell atms={atms} aids={aids} /> */}
        <DashboardShell />
      </main>
    </>
  );
}
