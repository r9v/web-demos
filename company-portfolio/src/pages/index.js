import * as React from "react";
import { Banner } from "../components/Banner";
import ConrnerIcons from "../components/ConrnerIcons";
import Footer from "../components/Footer";
import { Hero } from "../components/Hero";
import Logos from "../components/Logos";
import { Nav } from "../components/Nav";
import Services from "../components/Services";
import Reviews from "../components/Reviews";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <title>Company Portfolio</title>
      <Nav />
      <Hero />
      <Services
        items={[
          {
            id: 0,
            title: "Product Design",
            description:
              "Etiam facilisis mauris sit amet nisl maximus luctus. Vestibulum a mollis orci, at tempus nibh. Sed blandit massa ut cursus aliquet. Sed massa nunc.",
            img: "/img/services/6.svg",
          },
          {
            id: 1,
            title: "Mobile development",
            description:
              "Etiam facilisis mauris sit amet nisl maximus luctus. Vestibulum a mollis orci, at tempus nibh. Sed blandit massa ut cursus aliquet. Sed massa nunc.",
            img: "/img/services/8.svg",
          },
          {
            id: 2,
            title: "Web Development",
            description:
              "Etiam facilisis mauris sit amet nisl maximus luctus. Vestibulum a mollis orci, at tempus nibh. Sed blandit massa ut cursus aliquet. Sed massa nunc.",
            img: "/img/services/3.svg",
          },
          {
            id: 3,
            title: "Team Enhancement",
            description:
              "Etiam facilisis mauris sit amet nisl maximus luctus. Vestibulum a mollis orci, at tempus nibh. Sed blandit massa ut cursus aliquet. Sed massa nunc.",
            img: "/img/services/2.svg",
          },
        ]}
      />
      <Logos />
      <Reviews
        items={[
          {
            id: 0,
            text: "Etiam facilisis mauris sit amet nisl maximus luctus. Vestibulum a mollis orci, at tempus nibh. Sed blandit massa ut cursus aliquet. Sed massa nunc.",
            name: "Julius L. Pierson",
            role: "CEO",
            company: "Kunze LLC",
          },
          {
            id: 1,
            text: "Nulla diam arcu, sodales sed tincidunt vitae, vestibulum non erat. Etiam a erat massa. Sed blandit massa ut cursus aliquet. Sed massa nunc.",
            name: "Ethne Anelia",
            role: "CTO",
            company: "New Space",
          },
          {
            id: 2,
            text: " Pellentesque iaculis ipsum quam, sit amet euismod leo semper in. Donec vestibulum lacus vitae est congue, id sodales enim egestas. In in pretium ligula sit.",
            name: "Alberto L. Schultz",
            role: "CEO and Founder",
            company: "Hickle Group",
          },
        ]}
      />
      <Banner />
      <Footer />
      <ConrnerIcons />
    </Layout>
  );
};

export default IndexPage;
