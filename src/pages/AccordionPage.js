import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: 0,
      label: "Can I use React on project?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque veritatis excepturi nobis, illum cum provident ea consequatur aliquam, obcaecati at id repellat officia voluptate modi earum ut et quis maxime sapiente temporibus.",
    },
    {
      id: 1,
      label: "Can I use JavaScript on project?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque veritatis excepturi nobis, illum cum provident ea consequatur aliquam, obcaecati at id repellat officia voluptate modi earum ut et quis maxime sapiente temporibus.",
    },
    {
      id: 2,
      label: "Can I use Python on project?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque veritatis excepturi nobis, illum cum provident ea consequatur aliquam, obcaecati at id repellat officia voluptate modi earum ut et quis maxime sapiente temporibus.",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
