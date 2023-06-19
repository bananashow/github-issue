import styled from "styled-components";

const footerItems = [
  {
    title: "Terms",
    link: "#",
  },
  {
    title: "Privacy",
    link: "#",
  },
  {
    title: "Security",
    link: "#",
  },
  {
    title: "Status",
    link: "#",
  },
  {
    title: "Docs",
    link: "#",
  },
  {
    title: "Contact Github",
    link: "#",
  },
  {
    title: "Pricing",
    link: "#",
  },
  {
    title: "API",
    link: "#",
  },
  {
    title: "Training",
    link: "#",
  },
  {
    title: "Blog",
    link: "#",
  },
  {
    title: "About",
    link: "#",
  },
];

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterUl>
        {footerItems.map((item, idx) => {
          return (
            <li key={item.title}>
              <a href={item.link}>{item.title}</a>
            </li>
          );
        })}
      </FooterUl>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  margin-top: 40px;
  padding: 40px 16px 8px;
  border-top: 1px solid #d0d7de;

  display: flex;
  justify-content: space-around;
`;

const FooterUl = styled.footer`
  display: flex;

  li {
    margin-right: 10px;

    a {
      color: #0969da;
      font-size: 12px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
